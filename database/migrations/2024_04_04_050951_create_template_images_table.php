<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    public function up(): void
    {
        Schema::create('template_images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('template_id');
            $table->uuid('uni')->nullable();
            $table->integer("width")->default(0);
            $table->integer("height")->default(0);
            $table->double("x_axis")->default(0);
            $table->double("y_axis")->default(0);
            $table->double("rotation")->default(0);
            $table->double("scale")->default(1);
            $table->text("image");
            $table->foreign('template_id')->references('id')->on('templates')->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('template_images');
    }
};
