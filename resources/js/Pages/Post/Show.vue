<template>
    <Head :title="post.title" />
    <AuthenticatedLayout>
        <div class="p-5">
            <!-- Navbar -->
            <div class="rounded-lg max-w-xl w-full">
                <div class="flex items-center p-2">
                <img src="https://picsum.photos/id/299/50/50" class="rounded-full">
                <Link class="font-extrabold text-lg ml-3 hover:underline" :href="route('user.profile', post.user)">{{ post.user.name }}</Link>
                <svg width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="verified" class="icon glyph ml-1"><path d="M21.6,9.84A4.57,4.57,0,0,1,21.18,9,4,4,0,0,1,21,8.07a4.21,4.21,0,0,0-.64-2.16,4.25,4.25,0,0,0-1.87-1.28,4.77,4.77,0,0,1-.85-.43A5.11,5.11,0,0,1,17,3.54a4.2,4.2,0,0,0-1.8-1.4A4.22,4.22,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0,4.22,4.22,0,0,0-2.24-.07A4.2,4.2,0,0,0,7,3.54a5.11,5.11,0,0,1-.66.66,4.77,4.77,0,0,1-.85.43A4.25,4.25,0,0,0,3.61,5.91,4.21,4.21,0,0,0,3,8.07,4,4,0,0,1,2.82,9a4.57,4.57,0,0,1-.42.82A4.3,4.3,0,0,0,1.63,12a4.3,4.3,0,0,0,.77,2.16,4,4,0,0,1,.42.82,4.11,4.11,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.25,4.25,0,0,0,1.87,1.28,4.77,4.77,0,0,1,.85.43,5.11,5.11,0,0,1,.66.66,4.12,4.12,0,0,0,1.8,1.4,3,3,0,0,0,.87.13A6.66,6.66,0,0,0,11,21.81a4,4,0,0,1,1.94,0,4.33,4.33,0,0,0,2.24.06,4.12,4.12,0,0,0,1.8-1.4,5.11,5.11,0,0,1,.66-.66,4.77,4.77,0,0,1,.85-.43,4.25,4.25,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.94a4.11,4.11,0,0,1,.15-.95,4.57,4.57,0,0,1,.42-.82A4.3,4.3,0,0,0,22.37,12,4.3,4.3,0,0,0,21.6,9.84Zm-4.89.87-5,5a1,1,0,0,1-1.42,0l-3-3a1,1,0,1,1,1.42-1.42L11,13.59l4.29-4.3a1,1,0,0,1,1.42,1.42Z" style="fill:#EAEF4D"></path></svg>
                <p class="font-thin text-md ml-2">@{{ post.user.username }}</p>
                <p class="text-xs ml-5">2hr</p>
            </div>
                <div class="mt-2 mb-1">
                    <div class="mb-5">
                        <p class="pl-2 pr-2">{{ post.title }}</p>
                        <img :src="post.image" class="mt-3 rounded-2xl mx-auto">
                    </div>
                <hr>
                <div class="p-2 mt-3">
                    <form @submit.prevent="submit">
                        <div class="flex">
                            <input type="text" class="w-full bg-gray-900 rounded-full" v-model="form.message">
                            <button class="px-3 py-1 bg-gray-200 text-gray-900 font-extrabold ml-3 rounded-full" type="submit" :disabled="form.processing">Reply</button>
                        </div>
                        <div class="mt-3">
                            <input type="file" class="block w-1/2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" @input="form.image = $event.target.files[0]">
                        </div>
                    </form>
                </div>
                <h1 class="mt-2 text-lg font-bold underline">Comments</h1>
                <div class="p-2" v-for="(comment, index) in post.comments" :key="index">
                    <div class=" mt-3 flex items-center">
                        <img src="https://via.placeholder.com/50" class="rounded-full">
                        <p class="ml-2 font-semibold">{{ comment.user.name }}</p>
                        <p class="ml-2 text-sm font-thin">@{{ comment.user.username }}</p>
                        <p class="text-xs ml-1 font-thin">{{ comment.created_at }}</p>
                    </div>
                    <div class="mt-2">
                        <p>{{ comment.message }}</p>
                        <img :src="comment.image"  class="mt-2 rounded-2xl">
                    </div>
                </div>
            </div>
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
    import { Head, Link, useForm } from '@inertiajs/vue3';

    export default {
        components: {
            AuthenticatedLayout,
            ApplicationLogo,
            Head,
            Link,
            Timeline,
            useForm
        },
        props: {
            post: Object
        },
        setup(props)
        {
            const form = useForm({
                message: '',
                image: null
            });

            const submit = () => {
                form.post(route('comment.store', props.post.uuid))
            }

            return { form, submit }
        }
    }
</script>


