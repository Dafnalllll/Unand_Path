<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::firstOrCreate(
            ['email' => strtolower('UnandPath@gmail.com')],
            [
                'name' => 'UnandPath',
                'password' => bcrypt('UnandPath'),
                'email_verified_at' => now(),
            ]
        );
    }
}
