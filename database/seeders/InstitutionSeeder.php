<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Institution;

class InstitutionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $institutions = [
        	[
        		'id'=> 1,
        		'name'=>'Multimedia University',
                'short_name'=>'Mmu',
        	],
            [
                'id'=> 2,
                'name'=>'Jomo Kenyatta University of Agriculture and Technology',
                'short_name'=>'Jkuat',
            ]
        ];

        Institution::insert($institutions);
    }
}
