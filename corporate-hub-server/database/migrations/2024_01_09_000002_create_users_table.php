<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('company_name', 55);
            $table->string('company_nit', 17)->unique();
            $table->string('address', 45);
            $table->foreignId('country_id')->references('id')->on('countries');
            // $table->string('logo', 180);
            $table->string('description', 900);
            $table->string('principal_activity', 90);
            $table->foreignId('legal_form_id')->references('id')->on('legal_forms');
            $table->string('password', 130);
            $table->unsignedBigInteger('score')->default(0)->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
