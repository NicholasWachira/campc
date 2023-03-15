<template>
    <Head :title="post.title + ' Edit Post'" />
    <AuthenticatedLayout>
        <div class="p-5 mb-12">
            <!-- Navbar -->
            <div class="rounded-lg max-w-lg">
                <div class="flex flex-col">
                    <div class="flex justify-end mb-3">
                        <button @click.prevent="submit()" type="submit" class="bg-white text-gray-900 px-5 py-1 rounded-2xl font-bold" :disabled="form.processing" :class="{ 'opacity-25': form.processing }">Save</button>
                    </div>

                    <textarea class="whitespace-pre-wrap mx-auto bg-gray-900 rounded-2xl" cols="46" rows="3" v-model="form.title"/>

                    <div class="mt-3 max-w-md">
                        <img :src="post.image" class="rounded">
                    </div>
                </div>
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
        },
        setup(props)
        {
            const form = useForm({
                uuid: props.post.uuid,
                title: props.post.title
            })

            const submit = () => {
                form.patch(route('post.update', form.uuid))
            }

            return { form, submit }
        }
    }
</script>


