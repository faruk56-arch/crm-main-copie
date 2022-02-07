<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Aouth extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('oauth_access_tokens', function (Blueprint $table) {
            $table->integer('user_id')->nullable();
            $table->integer('client_id')->nullable();
            $table->string('name')->nullable();
            $table->string('scopes')->nullable();
            $table->integer('revoked')->nullable();
            $table->integer('created_at')->nullable();
            $table->integer('updated_at')->nullable();
            $table->integer('expires_at')->nullable();
        });

        Schema::create('oauth_auth_codes', function (Blueprint $table) {
            $table->integer('user_id')->nullable();
            $table->integer('client_id')->nullable();
            $table->integer('scopes')->nullable();
            $table->integer('revoked')->nullable();
            $table->integer('expires_at')->nullable();
        });
        Schema::create('oauth_clients', function (Blueprint $table) {
            $table->integer('user_id')->nullable();
            $table->string('name')->nullable();
            $table->string('secret')->nullable();
            $table->string('redirect')->nullable();
            $table->integer('personal_access_client')->nullable();
            $table->integer('password_client')->nullable();
            $table->timestamp('revoked')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
        Schema::create('oauth_personel_access_clients', function (Blueprint $table) {
            $table->integer('client_id')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
        Schema::create('oauth_refresh_tokens', function (Blueprint $table) {
            $table->string('access_token_id')->nullable();
            $table->integer('revoked')->nullable();
            $table->timestamp('expires_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
