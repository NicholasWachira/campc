<template>
    <Head title="Home" />
    <AuthenticatedLayout>
        <div class="p-5">
            <!-- Navbar -->
            <div class="text-white flex justify-between max-w-5xl mx-auto">
                <!-- Timeline -->
                <timeline :posts="posts"/>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
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
            Timeline
        },
        props: {
            posts: Object
        }
    }
</script>


