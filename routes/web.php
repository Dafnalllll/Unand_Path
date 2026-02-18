<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Actions\Fortify\CreateNewUser;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// Fallback route untuk halaman tidak ditemukan
Route::fallback(function () {
    return Inertia::render('notfound', [
        'isLoggedIn' => Auth::check(),
    ]);
});

require __DIR__.'/settings.php';

Route::post('/logout', function (Request $request) {
    Auth::logout();
    $request->session()->invalidate();
    $request->session()->regenerateToken();
    return redirect()->route('home');
})->name('logout');

Route::post('/register', function (Request $request) {
    app(CreateNewUser::class)->create($request->all());
    return redirect('/login');
})->middleware(['guest'])->name('register.store');

