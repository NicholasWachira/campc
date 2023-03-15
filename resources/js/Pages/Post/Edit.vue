<template>
    <Head title="Edit Post" />
    <AuthenticatedLayout>
        <div class="p-5">
            <!-- Navbar -->
            <div class="rounded-lg max-w-xl w-full">
                {{ post }}
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import ApplicationLogo from '@/Components/ApplicationLogo.vue';
    import Navbar from '@/Components/Navbar.vue';
    import Trending from '@/Components/Trending.vue';
    import { Head, Link, useForm } from '@inertiajs/vue3';

    export default {
        components: {
            AuthenticatedLayout,
            ApplicationLogo,
            Head,
            Link,
            useForm
        },
        props: {
            post: Object
        }
    }
</script>


