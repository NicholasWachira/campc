<template>
    <Head title="Explore Groups" />
    <AuthenticatedLayout>
        <div class="max-w-lg w-full m-4 rounded-2xl">
            <div class="h-screen overflow-y-scroll no-scrollbar m-4">
                <div class="mx-auto">
                    <div class="">
                        <div class="flex items-center p-2">
                            <div>
                                <img src="" @error="$event.target.src='/image/abc.png'" width="70" height="70" class="rounded-full">
                            </div>
                            <div class="ml-7">
                                <h1 class="text-center text-xl font-bold">Tech Gurus Multimedia</h1>
                                <h1 class="text-xs">@techgurusmmu</h1>
                            </div>
                        </div>
                        <div class="mt-2 mb-2 flex justify-around">
                            <p class="text-gray-300">Members: 1000</p>
                            <p class="text-gray-100">Location: Multimedia University</p>
                        </div>
                        <div class="mt-4 mb-2">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                        </div>
                        <hr>

                        <div class="m-3">
                            <h1 class="text-center font-bold">Posts</h1>
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
        }
    }
</script>


