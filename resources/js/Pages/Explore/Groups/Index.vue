<template>
    <Head title="Explore Groups" />
    <AuthenticatedLayout>
        <div class="max-w-lg w-full border m-4 rounded-2xl">
            <div class="h-screen overflow-y-scroll no-scrollbar m-4">
                <!-- <input type="search" class="w-full bg-gray-900 rounded-full outline-none"> -->
                <div class="mx-auto">
                    <div class="p-2">
                        <h1 class="text-center uppercase">Groups</h1>
                        <div class="flex justify-center mt-3">
                            <Link :href="route('group.create')" class="bg-gray-500 p-2 rounded-full hover:bg-gray-900">Create Group</Link>
                        </div>
                        <div class="p-2">
                            <div class="flex mb-3" v-for="(group, index) in groups" :key="index">
                                <div class="mt-6">
                                    <img :src="group.avatar" @error="$event.target.src='/image/abc.png'" width="70" height="70" class="rounded-full">
                                </div>
                                <div class="ml-5 mt-3">
                                    <p class="text-lg font-bold hover:underline">
                                        <Link :href="route('group.show', group.uuid)">{{ group.name }}</Link>
                                    </p>
                                    <div>
                                        <p class="text-gray-400">@{{ group.username }}</p>
                                    </div>
                                    <Link class="flex items-center hover:bg-gray-800 mt-3 p-2 bg-gray-700 rounded-full w-32">
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7C13 6.44771 12.5523 6 12 6C11.4477 6 11 6.44771 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17Z" fill="#ffffff"/>
                                        </svg>
                                        <p>Join Group</p>
                                    </Link>
                                </div>
                            </div>
                            <hr>
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
            groups: Object
        }
    }
</script>


