<?php

use Illuminate\Support\Facades\Route;
use Shenryuken\LaravelDatatables\Http\Controllers\DataTableController;

Route::get('/datatable/{table}', [DataTableController::class, 'getData'])->name('datatable.getData');
