<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('single_image_data', function (Blueprint $table) {
            $table->id();
            $table->text('image');
            $table->string('type');
            $table->text('category_id');
            $table->string('user_id')->nullable();
            $table->text('thumbnail');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('single_image_data');
    }
};
