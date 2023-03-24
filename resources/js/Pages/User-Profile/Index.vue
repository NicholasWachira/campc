<template>
    <Head :title="user.name" />
    <AuthenticatedLayout>
        <div class="flex ml-5 mr-5 mt-5 mb-5 lg:mb-2 text-white">
            <div class="max-w-lg w-full mx-auto text-white">
                <div class="border rounded-2xl p-5">
                    <img :src="user.avatar" @error="$event.target.src='/image/abc.png'" width="100" heigth="100" class="rounded-full mx-auto">
                    <div class="flex justify-center items-center mt-3">
                        <p class="text-white text-center text-lg font-bold">{{ user.name }}</p>
                        <svg v-show="user.isVerified" width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="verified" class="icon glyph ml-1"><path d="M21.6,9.84A4.57,4.57,0,0,1,21.18,9,4,4,0,0,1,21,8.07a4.21,4.21,0,0,0-.64-2.16,4.25,4.25,0,0,0-1.87-1.28,4.77,4.77,0,0,1-.85-.43A5.11,5.11,0,0,1,17,3.54a4.2,4.2,0,0,0-1.8-1.4A4.22,4.22,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0,4.22,4.22,0,0,0-2.24-.07A4.2,4.2,0,0,0,7,3.54a5.11,5.11,0,0,1-.66.66,4.77,4.77,0,0,1-.85.43A4.25,4.25,0,0,0,3.61,5.91,4.21,4.21,0,0,0,3,8.07,4,4,0,0,1,2.82,9a4.57,4.57,0,0,1-.42.82A4.3,4.3,0,0,0,1.63,12a4.3,4.3,0,0,0,.77,2.16,4,4,0,0,1,.42.82,4.11,4.11,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.25,4.25,0,0,0,1.87,1.28,4.77,4.77,0,0,1,.85.43,5.11,5.11,0,0,1,.66.66,4.12,4.12,0,0,0,1.8,1.4,3,3,0,0,0,.87.13A6.66,6.66,0,0,0,11,21.81a4,4,0,0,1,1.94,0,4.33,4.33,0,0,0,2.24.06,4.12,4.12,0,0,0,1.8-1.4,5.11,5.11,0,0,1,.66-.66,4.77,4.77,0,0,1,.85-.43,4.25,4.25,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.94a4.11,4.11,0,0,1,.15-.95,4.57,4.57,0,0,1,.42-.82A4.3,4.3,0,0,0,22.37,12,4.3,4.3,0,0,0,21.6,9.84Zm-4.89.87-5,5a1,1,0,0,1-1.42,0l-3-3a1,1,0,1,1,1.42-1.42L11,13.59l4.29-4.3a1,1,0,0,1,1.42,1.42Z" style="fill:#EAEF4D"></path></svg>
                    </div>
                    <div>
                        <p class="text-center mt-1 text-sm font-thin">@{{ user.username }}</p>
                    </div>
                    <div class="flex justify-center mt-2">
                        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0" style="margin-top: 3px;">
                        <circle cx="12" cy="10" r="3" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19 9.75C19 15.375 12 21 12 21C12 21 5 15.375 5 9.75C5 6.02208 8.13401 3 12 3C15.866 3 19 6.02208 19 9.75Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p class="text-center text-md font-bold">{{ user.institution }}</p>
                    </div>
                    <p class="text-center mt-2 font-thin">Lorem ipsum dolor sit amet, consectetur</p>
                    <div class="flex justify-center mt-2 gap-x-20">
                        <div class="flex items-center">
                            <p class="font-bold">Followers </p>
                            <p class="font-thin text-sm ml-2"> {{ user.followers }}</p>
                        </div>
                        <div class="flex items-center">
                            <p class="font-bold">Following </p>
                            <p class="font-thin text-sm ml-2">{{ user.following }}</p>
                        </div>
                    </div>
                    <div class="flex justify-center mt-3 gap-x-4" v-if="$page.props.auth.user">
                        <FollowButton :userId="user.id" :follows="follows" v-show="user.id != $page.props.auth.user.id"/>
                        <Link class="text-gray-900 mt-1 text-sm bg-gray-100 font-bold px-5 py-2 rounded-full" v-if="$page.props.users.user" v-show="user.id === $page.props.auth.user.id" :href="route('user.profile.edit', user)">edit profile</Link>
                    </div>
                </div>
                <!-- Timeline -->
                <h1 class="text-center text-xl font-bold mt-5">Timeline</h1>
                <div>
                    <timeline :posts="user.posts"/>
                </div>

            </div>  
        </div>
    </AuthenticatedLayout>
</template>

<script>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head, Link } from '@inertiajs/vue3';
    import Timeline from '@/Components/Timeline.vue';
    import FollowButton from '@/Components/FollowButton.vue';
    import Navbar from '@/Components/Navbar.vue';
    import Trending from '@/Components/Trending.vue';

    export default {
        components: {
            AuthenticatedLayout,
            Head,
            Link,
            Timeline,
            Navbar,
            Trending,
            FollowButton
        },
        props: {
            user: Object,
            follows: Boolean,
        }
    }
</script>


