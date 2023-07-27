<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         $this->call(UserSeeder::class);
         $this->call(SchoolSeeder::class);
         $this->call(CycleSeeder::class);
         $this->call(TournamentSeeder::class);
         $this->call(TeamSeeder::class);
    }
}
