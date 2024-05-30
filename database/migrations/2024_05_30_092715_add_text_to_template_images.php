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
        Schema::table('template_images', function (Blueprint $table) {
            $table->text("imageText")->nullable()->default("temp");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('template_images', function (Blueprint $table) {
            $table->dropColumn("imageText");
        });
    }
};
