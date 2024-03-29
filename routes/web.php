<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FollowsController;
use App\Http\Controllers\VotingController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\JoinController;
use App\Http\Controllers\ExploreController;
use App\Http\Controllers\UserNotificationsController;
use App\Http\Controllers\UserProfileController;
use App\Http\Controllers\IntrestsController;
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

    // Follow Users
    Route::get('/follow/users', [HomeController::class, 'users'])->name('follow.users');

    // Users Intrests
    Route::get('/user/intrests', [IntrestsController::class, 'index'])->name('users.intrests');

    // Follows Controller
    Route::post('/follow/{user}', [FollowsController::class, 'store'])->name('follows.store');

    // Follows Controller
    Route::post('/join/{group}', [JoinController::class, 'store'])->name('group.join');


	// User Notifications
	Route::get('/notifications', [UserNotificationsController::class, 'index'])->name('user.notifications');

	// Post Upvoting
	Route::post('/p/{uuid}/upvote', [VotingController::class, 'upvotePost'])->name('post.upvote');
});

// Search Users
Route::get('/explore/users', [ExploreController::class, 'searchUsers'])->name('explore.users');
// Search Group
Route::get('/explore/a/groups', [ExploreController::class, 'exploreGroups'])->name('explore.all.groups');

// Explore Groups
Route::get('/explore/groups', [ExploreController::class, 'searchGroups'])->name('explore.groups');
// Create Group
Route::get('/explore/group/create', [GroupController::class, 'create'])->name('group.create');
// Show Group
Route::get('/explore/group/{uuid}', [ExploreController::class, 'showGroup'])->name('group.show');
// Edit Group
Route::get('/explore/group/{uuid}/edit', [GroupController::class, 'edit'])->name('group.edit');
Route::post('/explore/group/{uuid}/update-avatar', [GroupController::class, 'updateAvatar'])->name('group.update.avatar');
Route::post('/explore/group/store', [GroupController::class, 'store'])->name('group.store');
// Post
Route::post('/explore/group/post/create', [GroupController::class, 'createPost'])->name('group.post.create');



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

Route::patch('/post/{uuid}/update', [PostController::class, 'update'])->name('post.update');

// Post Delete
Route::delete('/post/{uuid}/delete', [PostController::class, 'delete'])->name('post.delete');

// Comments
Route::post('/post/{uuid}/comment', [CommentController::class, 'store'])->name('comment.store');

require __DIR__.'/auth.php';
