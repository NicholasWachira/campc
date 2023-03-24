<template>
    <Head title="Explore Groups" />
    <AuthenticatedLayout>
        <div class="max-w-md w-full border m-4 rounded-2xl mb-16 lg:mb-5">
            <div class="h-screen overflow-y-scroll no-scrollbar ml-3 mr-3 mt-1">
                <div class="mx-auto">
                    <div>
                        <div class="flex justify-center mt-3" v-if="$page.props.auth.user">
                            <Link :href="route('group.create')" class="bg-gray-700 px-4 py-1 rounded-full hover:bg-gray-900">Create Group</Link>
                        </div>
                        <div class="p-2">
                            <div class="flex mb-3" v-for="(group, index) in groups" :key="index">
                                <div class="mt-6">
                                    <img :src="group.avatar" @error="$event.target.src='/image/abc.png'" width="70" height="70" class="rounded-full">
                                </div>
                                <div class="ml-5 mt-3">
                                    <div class="flex items-center">
                                        <div class="mt-5">
                                            <p class="text-lg font-bold hover:underline">
                                            <Link :href="route('group.show', group.uuid)">{{ group.name }}</Link></p>
                                            <p class="text-gray-400">@{{ group.username }}</p>
                                        </div>
                                    </div>
                                    <div v-show="$page.props.auth.user">
                                        <JoinGroupButton :groupId="group.id" :member="group.member"/>
                                    </div>
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


