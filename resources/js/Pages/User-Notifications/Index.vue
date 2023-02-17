<template>
    <Head title="Notifications" />
    <AuthenticatedLayout>
        <div class="max-w-xl w-full">
            <p class="text-center font-bold">Notifications</p>

            <div class="p-5">
                <p class="text-lg font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed</p>
                <p class="p-3 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
            </div>
            <hr>
            <div class="p-5">
                <p class="text-lg font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed</p>
                <p class="p-3 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
            </div>
            <hr>
            <div class="p-5">
                <p class="text-lg font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed</p>
                <p class="p-3 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
            </div>
            <hr>
        </div>
    </AuthenticatedLayout>
</template>

<script>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head, Link } from '@inertiajs/vue3';
    import Timeline from '@/Components/Timeline.vue';
    import Navbar from '@/Components/Navbar.vue';
    import Trending from '@/Components/Trending.vue';

    export default {
        components: {
            AuthenticatedLayout,
            Head,
            Link,
            Timeline,
            Navbar,
            Trending
        },
    }
</script>


