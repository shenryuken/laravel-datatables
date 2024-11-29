<?php

namespace Shenryuken\LaravelDatatables\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class DataTableController extends Controller
{
    public function getData(Request $request, $table)
    {
        $perPage = $request->input('per_page', 10);
        $page = $request->input('page', 1);

        $query = DB::table($table);

        $totalItems = $query->count();
        $data = $query->paginate($perPage, ['*'], 'page', $page);

        return response()->json([
            'data' => $data->items(),
            'current_page' => $data->currentPage(),
            'last_page' => $data->lastPage(),
            'total' => $totalItems,
        ]);
    }
}
