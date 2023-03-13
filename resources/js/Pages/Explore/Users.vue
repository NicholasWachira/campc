<template>
    <Head title="Home" />
    <AuthenticatedLayout>
        <div class="max-w-lg w-full">
            <!-- Explore -->
            <!-- <h1 class="text-center pb-3">Explore Users</h1> -->
            <div class="h-screen overflow-y-scroll no-scrollbar m-4">
                <input type="search" class="w-full bg-gray-900 rounded-full outline-none">
                <div class="mx-auto">
                    <div v-for="(user, index) in users" :key="index" class="p-2">
                        <div class="p-2 flex items-center justify-between">
                            <div class="flex items-center">
                                <img :src="user.avatar" @error="$event.target.src='/image/abc.png'" width="50" height="50" class="rounded-full">
                                <p class="ml-2 text-md hover:underline"><Link :href="route('user.profile', user)">{{ user.name }}</Link></p>
                                <p class="ml-2 text-sm">{{ user.username }}</p>
                            </div>
                            <FollowButton class="ml-10" :userId="user.id" :follows="follows" v-show="user.id != $page.props.auth.user.id"/>
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
            follows: Object
        }
    }
</script>


