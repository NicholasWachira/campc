<template>
	<div class="hidden md:block w-54 mt-5">
        <div class="">
            <h1 class="font-bold">Trending</h1>    
            <ul class="mt-3 mb-5">
                <li class="font-bold hover:underline">#CampusSocial</li>
                <li class="font-bold mt-1 hover:underline">#Multimedia University School</li>
            </ul>
            <hr>
            <div class="mt-3 mb-3">
                <h1 class="text-center font-bold">Users</h1>
                <div class="flex mt-4" v-for="(user, index) in $page.props.users.user" :key="index">
                    <img :src="user.avatar" @error="$event.target.src='/image/abc.png'" class="rounded-full w-12">
                    <div>
                        <p class="shrink-0 ml-3 mr-4 font-bold hover:underline">
                            <Link :href="route('user.profile', user.username)">{{ user.name }}</Link>
                        </p>
                        <p class="ml-3 text-xs">@{{ user.username }}</p>
                    </div>
                    <svg v-show="user.isVerified" width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="verified" class="icon glyph ml-1 mt-1"><path d="M21.6,9.84A4.57,4.57,0,0,1,21.18,9,4,4,0,0,1,21,8.07a4.21,4.21,0,0,0-.64-2.16,4.25,4.25,0,0,0-1.87-1.28,4.77,4.77,0,0,1-.85-.43A5.11,5.11,0,0,1,17,3.54a4.2,4.2,0,0,0-1.8-1.4A4.22,4.22,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0,4.22,4.22,0,0,0-2.24-.07A4.2,4.2,0,0,0,7,3.54a5.11,5.11,0,0,1-.66.66,4.77,4.77,0,0,1-.85.43A4.25,4.25,0,0,0,3.61,5.91,4.21,4.21,0,0,0,3,8.07,4,4,0,0,1,2.82,9a4.57,4.57,0,0,1-.42.82A4.3,4.3,0,0,0,1.63,12a4.3,4.3,0,0,0,.77,2.16,4,4,0,0,1,.42.82,4.11,4.11,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.25,4.25,0,0,0,1.87,1.28,4.77,4.77,0,0,1,.85.43,5.11,5.11,0,0,1,.66.66,4.12,4.12,0,0,0,1.8,1.4,3,3,0,0,0,.87.13A6.66,6.66,0,0,0,11,21.81a4,4,0,0,1,1.94,0,4.33,4.33,0,0,0,2.24.06,4.12,4.12,0,0,0,1.8-1.4,5.11,5.11,0,0,1,.66-.66,4.77,4.77,0,0,1,.85-.43,4.25,4.25,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.94a4.11,4.11,0,0,1,.15-.95,4.57,4.57,0,0,1,.42-.82A4.3,4.3,0,0,0,22.37,12,4.3,4.3,0,0,0,21.6,9.84Zm-4.89.87-5,5a1,1,0,0,1-1.42,0l-3-3a1,1,0,1,1,1.42-1.42L11,13.59l4.29-4.3a1,1,0,0,1,1.42,1.42Z" style="fill:#EAEF4D"></path></svg>
                </div>
            </div>
            <hr>
            <div class="mt-5 mb-2">
                <h1 class="text-center font-bold">Groups</h1>
                <div class="flex mt-4" v-for="(group, index) in $page.props.groups.group" :key="index">
                    <img :src="group.avatar" @error="$event.target.src='/image/abc.png'" class="rounded-full w-12">
                    <div>
                        <p class="shrink-0 ml-3 mr-4 font-bold hover:underline">
                            <Link :href="route('group.show', group.uuid)">{{ group.name }}</Link>
                        </p>
                        <p class="ml-3 text-xs">@{{ group.username }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { Link } from '@inertiajs/vue3';

	export default {
        components: {
            Link
        }
    }
</script>