<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    public function up(): void
    {
        Schema::table('template_images', function (Blueprint $table) {
            $table->string("imageText", 512)->default("temp");
        });
    }

    public function down(): void
    {
        Schema::table('template_images', function (Blueprint $table) {
            $table->dropColumn("imageText");
        });
    }
};
