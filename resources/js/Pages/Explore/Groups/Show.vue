<template>
    <Head :title="group.name" />
    <AuthenticatedLayout>
        <div class="max-w-lg w-full m-4 rounded-2xl">
            <div class="h-screen overflow-y-scroll no-scrollbar m-4">
                <div class="mx-auto">
                    <div class="">
                        <div class="flex items-center justify-between p-2">
                            <div class="flex items-center">
                                <div>
                                    <img :src="group.avatar" @error="$event.target.src='/image/abc.png'" width="70" height="70" class="rounded-full">
                                </div>
                                <div class="ml-4">
                                    <h1 class="text-center text-xl font-bold">{{ group.name }}</h1>
                                    <h1 class="text-xs">@{{ group.username }}</h1>
                                </div>
                            </div>
                            <div class="flex flex-col ml-7">
                                <Link :href="route('group.edit', group.uuid)" class="bg-gray-600 text-center px-4 py-1 rounded-full hover:bg-gray-700" v-show="group.owner_id == $page.props.auth.user.id">Edit Page</Link>
                                <JoinGroupButton v-show="!group.member" :groupId="group.id" :member="group.member" v-if="group.owner_id != $page.props.auth.user.id"/>
                            </div>
                        </div>
                        <div class="mt-2 mb-2 flex justify-around">
                            <p class="text-gray-300">Members: {{ group.members_count }}</p>
                            <p class="text-gray-100 inline-flex">Location: <p class="ml-2 font-bold">{{ group.institution }}</p></p>
                        </div>
                        <div class="mt-4 mb-2">
                            <p>{{ group.description }}</p>
                        </div>
                        <hr>

                        <!-- Create Post -->
                        <div class="border p-2 mt-2 rounded-lg" v-if="group.member">
                            <div class="w-32 m-2 animate-pulse">
                                <p class="bg-gray-900 px-4 rounded-full">Whats New</p>
                            </div>
                            <form @submit.prevent="submit">
                                <textarea v-model="form.title" type="text" class="w-full bg-gray-800 rounded-md resize-none" rows="2"></textarea>
                                <div class="flex items-center mt-4">
                                    <input type="file" class="block w-64 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" @input="form.image = $event.target.files[0]">
                                    <button type="submit" class="bg-gray-100 text-black font-extrabold ml-2 px-4 rounded-full shrink-0" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Create Post</button>
                                </div>  
                            </form>  
                        </div>

                        <div class="m-3">
                            <h1 class="text-center font-bold">Posts</h1>

                            <timeline :posts="group.posts"/>
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
    import { Head, Link, useForm } from '@inertiajs/vue3';

    export default {
        components: {
            AuthenticatedLayout,
            JoinGroupButton,
            ApplicationLogo,
            Head,
            Link,
            useForm,
            Timeline,
            FollowButton
        },
        props: {
            group: Object
        },
        setup(props)
        {
            const form = useForm({
                group_id: props.group.id,
                title: '',
                image: null
            });

            const submit = () => {
              form.post(route('group.post.create'))
              form.reset();
            }

            return { form, submit }
        }
    }
</script>


