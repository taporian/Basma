<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserUpdateValidator;
use App\Http\Requests\UserValidator;
use App\Models\User;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use function PHPUnit\Framework\isEmpty;



class UserController extends Controller
{
    public function register(UserValidator $request)
    {

        $inputs = $request->validated();

        $data = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret' => env("GOOGLE_RECAPTCHA_SECRET"),
            'response' => $request->input('recaptcha_token'),
        ])->json();
        if ($data['success']) {

            $user = new User();
            $user->fill($inputs);
            $user->save();
        }
        else{
            return response()->json([
             'errors'=>[
                 'message' => 'Recaptcha Error',
             ]

            ],400);
        }

        $token = auth('user')->login($user);

        return $this->respondWithToken($token);
    }

    public function login()
    {
        $credentials = request(['email', 'password']);
        $id = User::select('id')->where('email', $credentials)->get()->pluck('id');
        $name = User::select('name')->where('email', $credentials)->first();


        if (!$token= auth('user')->attempt($credentials)  ) {
            return response()->json(['error' => 'Wrong Username or Password'], 401);
        }

        $id=$id[0];
        return $this->respondWithLoginToken($token,$id,$name);
    }

    public function logout()
    {
        auth('user')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    protected function respondWithToken($token)
    {

        return response()->json([

            'access_token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth('user')->factory()->getTTL() * 60
        ]);
    }
    protected function respondWithLoginToken($token,$id,$name)
    {
        $email = request('email');
        return response()->json([
            'id'=>$id,
            'access_token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth('user')->factory()->getTTL() * 60,
            'email'=>$email,
            'user_name'=>$name,
        ]);
    }
    public function destroy(int $id)
    {

        $email = User::select('email')->where('id', $id)->get();
        User::where('id',$id)->delete();
        return response()->json([
            'message' => 'Successfully Deleted Your account',
            'email'=> $email
        ]);
    }
    public function update(UserUpdateValidator $request, int $id){

        $inputs = $request->validated();
        $user =  User::where('id',$id)->first();
        $user->update($inputs);
        return response()->json([
            'message' => 'Succesfully Updated',
            'email'=> $user

        ]);

    }
}
