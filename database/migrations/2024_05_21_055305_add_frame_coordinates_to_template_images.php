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
            $table->json("coordinates")->nullable();
            $table->string("isFrame")->nullable()->default("0");

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('template_images', function (Blueprint $table) {
            //
            $table->dropColumn('coordinates');
            $table->dropColumn('isFrame');
        });
    }
};
