<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [
    		'id'=> 1,
    		'name'=>'Nicholas Wachira',
    		'username'=>'Kanjox',
    		'email'=>'wachiranicholas60@gmail.com',
    		'institution_id'=> 1,
    		'password' => bcrypt('Kanjox20')
        ];

        $u = User::create($user);

        $u->assignRole('Admin');
    }
}
