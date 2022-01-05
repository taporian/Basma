<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;

use Faker\Factory as Faker;

class UserSeeder extends Seeder{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    // php artisan db:seed --class=UserSeeder to run
    public function run()
    {
        $faker = Faker::create();
        foreach (range(1,10) as $index) {
            DB::table('users')->insert([
                'name' => $faker->name,
                'last_name' => $faker->lastName,
                'email' => $faker->email,
                'password' => bcrypt('1!Cc2345678'),
                'created_at' => $faker->dateTimeBetween('-1 years', '+0 days'),
                'updated_at' => $faker->dateTimeBetween('-1 years', '+0 days'),

            ]);
        }
    }
}
