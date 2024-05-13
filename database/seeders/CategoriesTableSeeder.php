<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();
        $numCategories = 30;
        for ($i = 0; $i < $numCategories; $i++) {
            DB::table('categories')->insert([
                'name' => $faker->word,
                'type' => $faker->randomElement(['template', 'background', 'pattern', 'sticker', 'solid color', 'gradient']),
                'show' => $faker->boolean(100),
                'order' => $faker->numberBetween(1, 100),
                'thumbnail' => $faker->imageUrl(),
                'uni' => Str::uuid(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

    }
}
