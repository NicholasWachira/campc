<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FollowsController;
use App\Http\Controllers\VotingController;
use App\Http\Controllers\ExploreController;
use App\Http\Controllers\UserNotificationsController;
use App\Http\Controllers\UserProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return redirect()->route('home');
})->name('homepage');


Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Follows Controller
    Route::post('/follow/{user}', [FollowsController::class, 'store'])->name('follows.store');

	// User Notifications
	Route::get('/notifications', [UserNotificationsController::class, 'index'])->name('user.notifications');

	// Post Upvoting
	Route::post('/p/{uuid}/upvote', [VotingController::class, 'upvotePost'])->name('post.upvote');
});

// Follow Users
Route::get('/follow/users', [HomeController::class, 'users'])->name('follow.users');

// Search Users
Route::get('/explore/users', [ExploreController::class, 'searchUsers'])->name('explore.users');
// Explore Groups
Route::get('/explore/groups', [ExploreController::class, 'searchGroups'])->name('explore.groups');

// Show Group
Route::get('/explore/group/show', [ExploreController::class, 'showGroup'])->name('group.show');


// User profile
Route::get('/u/{user:username}', [UserProfileController::class, 'index'])->name('user.profile');

Route::get('/u/{user:username}/edit', [UserProfileController::class, 'edit'])->name('user.profile.edit');
Route::post('/u/{user:username}/update', [UserProfileController::class, 'update'])->name('user.profile.update');

Route::post('/u/{user:username}/update-avatar', [UserProfileController::class, 'updateAvatar'])->name('user.profile.update.avatar');


// Post
Route::post('/post/create', [PostController::class, 'store'])->name('post.store');
Route::get('/post/{uuid}', [PostController::class, 'show'])->name('post.show');

// Post Edit
Route::get('/post/{uuid}/edit', [PostController::class, 'edit'])->name('post.edit');

// Comments
Route::post('/post/{uuid}/comment', [CommentController::class, 'store'])->name('comment.store');

require __DIR__.'/auth.php';
