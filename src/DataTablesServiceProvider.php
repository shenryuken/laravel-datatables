<?php

namespace Shenryuken\LaravelDatatables;

use Illuminate\Support\ServiceProvider;

class DataTablesServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadViewsFrom(__DIR__.'/resources/views', 'laravel-datatables');
        $this->loadRoutesFrom(__DIR__.'/routes/web.php');

        $this->publishes([
            __DIR__.'/resources/views' => resource_path('views/vendor/laravel-datatables'),
            __DIR__.'/resources/js' => resource_path('js/vendor/laravel-datatables'),
        ], 'laravel-datatables');
    }

    public function register()
    {
        //
    }
}
