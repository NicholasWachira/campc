<template>
    <Head title="Explore Groups" />
    <AuthenticatedLayout>
        <div class="max-w-lg w-full border m-4 rounded-2xl">
            <div class="h-screen overflow-y-scroll no-scrollbar m-4">
                <!-- <input type="search" class="w-full bg-gray-900 rounded-full outline-none"> -->
                <div class="mx-auto">
                    <div class="p-2">
                        <div class="flex justify-center mt-3">
                            <Link :href="route('group.create')" class="bg-gray-500 px-4 py-1 rounded-full hover:bg-gray-900">Create Group</Link>
                        </div>
                        <div class="p-2">
                            <div class="flex mb-3" v-for="(group, index) in groups" :key="index">
                                <div class="mt-6">
                                    <img :src="group.avatar" @error="$event.target.src='/image/abc.png'" width="70" height="70" class="rounded-full">
                                </div>
                                <div class="ml-5 mt-3">
                                    <div class="flex">
                                        <div>
                                            <p class="text-lg font-bold hover:underline">
                                            <Link :href="route('group.show', group.uuid)">{{ group.name }}</Link></p>
                                            <p class="text-gray-400">@{{ group.username }}</p>
                                        </div>
                                        <div class="ml-2 mt-1">
                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#D3D3D3">
                                              <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 12.5L11 15l4.5-4.5m-.595-5.512l-.48-.659a3 3 0 00-4.85 0l-.48.659-.804-.127a3 3 0 00-3.43 3.43l.127.804-.659.48a3 3 0 000 4.85l.659.48-.127.804a3 3 0 003.43 3.43l.804-.127.48.659a3 3 0 004.85 0l.48-.659.804.127a3 3 0 003.43-3.43l-.127-.804.659-.48a3 3 0 000-4.85l-.659-.48.127-.804a3 3 0 00-3.43-3.43l-.804.127z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <JoinGroupButton :groupId="group.id" :member="group.member"/>
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
    import JoinGroupButton from '@/Components/JoinGroupButton.vue';
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
            FollowButton,
            JoinGroupButton
        },
        props: {
            groups: Object
        }
    }
</script>


