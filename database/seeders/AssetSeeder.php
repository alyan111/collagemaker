<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class AssetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        $numCategories = 20;
        for ($i = 0; $i < $numCategories; $i++) {
            DB::table('single_image_data')->insert([
                'image' => $faker->imageUrl(),
                'type' => $faker->randomElement(['background', 'pattern', 'sticker', 'solid color', 'gradient']),
                'thumbnail' => $faker->imageUrl(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
