# Laravel DataTables

A dynamic DataTables plugin for Laravel using Tailwind CSS and Alpine.js.

## Installation

1. Install the package via Composer:

```bash
composer require shenryuken/laravel-datatables
```

2. Publish the package assets:

```bash
php artisan vendor:publish --tag=laravel-datatables
```

3. Add Alpine.js to your project (if not already installed):

```bash
Run `npm run dev` to compile your assets.
```

4. In your `resources/js/app.js` file, import Alpine and the DataTable functionality:

```bash
import './bootstrap';
import Alpine from 'alpinejs';
import './vendor/laravel-datatables/data-table';

window.Alpine = Alpine;
Alpine.start();
```

5. Run `npm run dev` to compile your assets.

## Usage

To use the DataTable in your Blade views:

```
<x-laravel-datatables::data-table
    id="users-table"
    :columns="[
        ['field' => 'id', 'label' => 'ID'],
        ['field' => 'name', 'label' => 'Name'],
        ['field' => 'email', 'label' => 'Email'],
        ['field' => 'created_at', 'label' => 'Created At'],
    ]"
    url="{{ route('datatable.getData', ['table' => 'users']) }}"
/>
```

Make sure to include Tailwind CSS in your project for proper styling.

## Customization

You can customize the DataTable component by publishing the views and modifying them:

```
php artisan vendor:publish --tag=laravel-datatables --force
```

This will publish the component views to `resources/views/vendor/laravel-datatables`.

## License

This package is open-sourced software licensed under the MIT license.
