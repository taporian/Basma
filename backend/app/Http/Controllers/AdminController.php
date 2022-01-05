<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminValidator;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;
use Carbon\Carbon;

class AdminController extends Controller
{
    public function register(AdminValidator $request) {
        $inputs = $request->validated();
        $admin = new Admin();
        $admin->fill($inputs);
        $admin->save();
        $token = auth('admin')->login($admin);

        return $this->respondWithTokenRegister($token);


    }
    public function index()
    {
        //

        $admin = Admin::all();
        return response()->json($admin);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */

    public function login(): \Illuminate\Http\JsonResponse
    {
        $credentials = request(['email', 'password']);
        $name = Admin::select('name')->where('email', $credentials)->first();
        $name = $name->name;
        if (! $token = auth('admin')->attempt($credentials)) {
            return response()->json(['error' => 'Wrong Username or Password'], 401);
        }

        return $this->respondWithTokenLogin($token,$name);


    }

    public function logout()
    {
        auth('admin')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    protected function respondWithTokenRegister($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth('admin')->factory('api')->getTTL() * 60,
            'message' => 'Successfully Registered an Admin',

        ]);
    }
    protected function respondWithTokenLogin($token,$name)
    {
        $email = request('email');
        return response()->json([
            'access_token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth('admin')->factory('api')->getTTL() * 60,
            'message' => 'Successfully Logged In',
            'email' => $email,
            'name' => $name,



        ]);
    }
    public function getAllUsers(Request $request)
    {

        $search =  $request->input('filter');

        if($search!=""){
            $users = User::where(function ($query) use ($search){
                $query->where('name', 'like', '%'.$search.'%')
                    ->orWhere('last_name', 'like', '%'.$search.'%')
                    ->orWhere('id', 'like', '%'.$search.'%')
                    ->orWhere('email', 'like', '%'.$search.'%');
            })
                ->paginate(20);
            $users->appends(['filter' => $search]);
        }
        else{
            $users = User::paginate(20);
        }
        return response()->json($users);


//        $user = User::whereRaw("CONCAT(name,' ',last_name) like ?", ['%'. $name . '%'])->paginate(20);;
//        return response()->json($user);
    }
    public function getUserAverageDaily()
    {
       $usersHourly= User::where('created_at', '>=', Carbon::now()->subDay())->get()->groupBy(function($date) {
            return Carbon::parse($date->created_at)->format('h');
        });
        $countHourly = count($usersHourly);
//        $collectHourly =collect($countHourly)->average();

        $user= User::where('created_at', '>=', Carbon::now()->subDay())->get();
        $count = count($user);

//        $previous_week = strtotime("-1 week +1 day");
//        $start_week = strtotime("last sunday midnight",$previous_week);
//        $end_week = strtotime("next saturday",$start_week);
//        $start_week = date("Y-m-d",$start_week);
//        $end_week = date("Y-m-d",$end_week);
//        User::whereBetween('created_at', [$start_week, $end_week])->get(['name','created_at']);
        $last_week = User::whereBetween('created_at',
                [Carbon::now()->subWeek()->startOfWeek(), Carbon::now()->subWeek()->endOfWeek()]
            )->get();
        $count_last_week = count($last_week);

        $last_month = User::whereMonth('created_at', Carbon::now()->subMonth()->month)->get(['name','created_at']);
        $count_last_months = count($last_month);


        $last_three_month= User::whereMonth('created_at','>=', Carbon::now()->subMonth(3)->month)->get(['name','created_at']);
        $count_last_three_months = count($last_three_month);

//        $last_year= User::whereYear('created_at', '>=', now()->subYear()->year)->get(['name','created_at']);
        $last_year=  User::whereYear('created_at', date('Y', strtotime('-1 year')))->get(['name','created_at']);
        $count_last_year = count($last_year);
        return response()->json([

            'Past_24_hours'=>$count,
            'Last_week'=>$count_last_week,
            'last_month'=>$count_last_months,
            'last_3_month'=>$count_last_three_months,
            ' $last_three_month'=> $last_three_month,
        'last_year'=>$count_last_year,


        ]);
    }

}
