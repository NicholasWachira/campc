<template>
    <Head title="Notifications" />
    <AuthenticatedLayout>
        <div class="max-w-xl w-full">
            <p class="text-center font-bold">Notifications</p>
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
        // props: {
        //     user: Object
        // }
    }
</script>


