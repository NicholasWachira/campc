<template>
    <Head title="Explore Users" />
    <AuthenticatedLayout>
        <div class="max-w-lg w-full">
            <!-- Explore -->
            <!-- <h1 class="text-center pb-3">Explore Users</h1> -->
            <div class="h-screen overflow-y-scroll no-scrollbar m-4">
                <input type="search" class="w-full bg-gray-900 rounded-full outline-none">
                <div class="pt-5">
                    <div class="flex itemse-center justify-around ml-5 mr-5">
                        <Link class="px-4 py-1 font-bold hover:bg-gray-900 bg-gray-700 rounded-full" :href="route('explore.users')">Users</Link>
                        <Link class="px-4 py-1 font-bold hover:bg-gray-900 bg-gray-700 rounded-full" :href="route('explore.all.groups')">Groups</Link>
                    </div>
                </div>
                <div class="mx-auto">
                    <div v-for="(user, index) in users" :key="index" class="p-2">
                        <div class="p-2 flex items-center justify-between">
                            <div class="flex items-center">
                                <img :src="user.avatar" @error="$event.target.src='/image/abc.png'" width="50" height="50" class="rounded-full">
                                <p class="ml-2 text-md hover:underline"><Link :href="route('user.profile', user)">{{ user.name }}</Link></p>
                                <svg v-show="user.isVerified" width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="verified" class="icon glyph ml-1 shrink-0"><path d="M21.6,9.84A4.57,4.57,0,0,1,21.18,9,4,4,0,0,1,21,8.07a4.21,4.21,0,0,0-.64-2.16,4.25,4.25,0,0,0-1.87-1.28,4.77,4.77,0,0,1-.85-.43A5.11,5.11,0,0,1,17,3.54a4.2,4.2,0,0,0-1.8-1.4A4.22,4.22,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0,4.22,4.22,0,0,0-2.24-.07A4.2,4.2,0,0,0,7,3.54a5.11,5.11,0,0,1-.66.66,4.77,4.77,0,0,1-.85.43A4.25,4.25,0,0,0,3.61,5.91,4.21,4.21,0,0,0,3,8.07,4,4,0,0,1,2.82,9a4.57,4.57,0,0,1-.42.82A4.3,4.3,0,0,0,1.63,12a4.3,4.3,0,0,0,.77,2.16,4,4,0,0,1,.42.82,4.11,4.11,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.25,4.25,0,0,0,1.87,1.28,4.77,4.77,0,0,1,.85.43,5.11,5.11,0,0,1,.66.66,4.12,4.12,0,0,0,1.8,1.4,3,3,0,0,0,.87.13A6.66,6.66,0,0,0,11,21.81a4,4,0,0,1,1.94,0,4.33,4.33,0,0,0,2.24.06,4.12,4.12,0,0,0,1.8-1.4,5.11,5.11,0,0,1,.66-.66,4.77,4.77,0,0,1,.85-.43,4.25,4.25,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.94a4.11,4.11,0,0,1,.15-.95,4.57,4.57,0,0,1,.42-.82A4.3,4.3,0,0,0,22.37,12,4.3,4.3,0,0,0,21.6,9.84Zm-4.89.87-5,5a1,1,0,0,1-1.42,0l-3-3a1,1,0,1,1,1.42-1.42L11,13.59l4.29-4.3a1,1,0,0,1,1.42,1.42Z" style="fill:#EAEF4D"></path></svg>
                                <p class="ml-2 text-sm">@{{ user.username }}</p>
                            </div>
                            <FollowButton class="ml-10" :userId="user.id" :follows="user.follows" v-show="user.id != $page.props.auth.user.id"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import FollowButton from '@/Components/FollowButton.vue';
    import ApplicationLogo from '@/Components/ApplicationLogo.vue';
    import Timeline from '@/Components/Timeline.vue';
    import Navbar from '@/Components/Navbar.vue';
    import Trending from '@/Components/Trending.vue';
    import { Head, Link } from '@inertiajs/vue3';

    export default {
        components: {
            AuthenticatedLayout,
            ApplicationLogo,
            Head,
            Link,
            Timeline,
            FollowButton
        },
        props: {
            users: Object,
            groups: Object,
        }
    }
</script>


