<template>
    <Head title="Explore Users" />
    <AuthenticatedLayout>
        <div class="max-w-lg w-full mb-12">
            <!-- Explore -->
            <!-- <h1 class="text-center pb-3">Explore Users</h1> -->
            <div class="h-screen overflow-y-scroll no-scrollbar m-4">
                <input type="search" class="w-full bg-gray-900 rounded-full outline-none">
                <div class="pt-5">
                    <div class="flex itemse-center justify-around ml-5 mr-5 mb-5">
                        <Link class="px-4 py-1 font-bold hover:bg-gray-900 bg-gray-700 rounded-full" :href="route('explore.users')">Users</Link>
                        <Link class="px-4 py-1 font-bold hover:bg-gray-900 bg-gray-700 rounded-full" :href="route('explore.all.groups')">Groups</Link>
                    </div>
                </div>
                <div class="mx-auto">
                    <div v-for="(group, index) in groups" :key="index" class="p-2">
                        <div class="p-2">
                            <div class="flex flex-col lg:flex-row justify-between">
                                <div class="flex items-center">
                                    <img :src="group.avatar" @error="$event.target.src='/image/abc.png'" width="50" height="50" class="rounded-full">
                                    <p class="ml-2 text-md hover:underline shrink-0 font-bold"><Link :href="route('group.show', group.uuid)">{{ group.name }}</Link></p>
                                    <svg class="shrink-0" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#D3D3D3">
                                      <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 12.5L11 15l4.5-4.5m-.595-5.512l-.48-.659a3 3 0 00-4.85 0l-.48.659-.804-.127a3 3 0 00-3.43 3.43l.127.804-.659.48a3 3 0 000 4.85l.659.48-.127.804a3 3 0 003.43 3.43l.804-.127.48.659a3 3 0 004.85 0l.48-.659.804.127a3 3 0 003.43-3.43l-.127-.804.659-.48a3 3 0 000-4.85l-.659-.48.127-.804a3 3 0 00-3.43-3.43l-.804.127z"/>
                                    </svg>

                                    <p class="ml-2 text-sm">@{{ group.username }}</p>
                                </div>
                                <div class="mx-auto">
                                    <JoinGroupButton v-if="$page.props.auth.user" :groupId="group.id" :member="group.member"/>
                                </div>
                            </div>
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
            JoinGroupButton,
            ApplicationLogo,
            Head,
            Link,
            Timeline,
            FollowButton
        },
        props: {
            groups: Object,
        }
    }
</script>


