<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions =  [
        	'admin_access',
        	'manage_user_account',
        	'create_group'
        ];

        foreach ($permissions as $permission) {
        	Permission::create([
        		'name'=> $permission
        	]);
        }

        Role::create(['name' => 'Admin']);

        $role = Role::create(['name' => 'User']);

        $userPermissions =  [
        	'manage_user_account',
        	'create_group'
        ];

        foreach ($userPermissions as $permission) {
        	$role->givePermissionTo($permission);
        }
    }
}
