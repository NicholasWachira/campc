<template>
    <Head :title="group.name" />
    <AuthenticatedLayout>
        <div class="max-w-lg w-full rounded-2xl h-screen overflow-x-hidden overflow-y-scroll no-scrollbar mt-5">
            <div class="m-4">
                <div class="mx-auto">
                    <div class="">
                        <div class="flex items-center justify-between p-2">
                            <div class="flex items-center">
                                <div>
                                    <img :src="group.avatar" @error="$event.target.src='/image/abc.png'" width="70" height="70" class="rounded-full">
                                </div>
                                <div class="ml-4">
                                    <h1 class="text-md font-bold shrink-0">{{ group.name }}</h1>
                                    <h1 class="text-xs">@{{ group.username }}</h1>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <div v-if="$page.props.auth.user.id">
                                    <Link :href="route('group.edit', group.uuid)" class="bg-gray-600 text-center px-4 py-1 rounded-full hover:bg-gray-700" v-if="group.owner_id == $page.props.auth.user.id">Edit Page</Link>
                                </div>
                                <div v-if="$page.props.auth.user.id">
                                    <JoinGroupButton v-show="!group.member" :groupId="group.id" :member="group.member" v-if="group.owner_id != $page.props.auth.user.id"/>
                                </div>
                            </div>
                        </div>
                        <div class="mt-2 mb-2 flex justify-around">
                            <p class="text-gray-300 shrink-0">Members: {{ group.members_count }}</p>
                            <p class="text-gray-100 inline-flex ml-5">Location: <p class="ml-2 font-bold uppercase">{{ group.institution }}</p></p>
                        </div>
                        <div class="mt-4 mb-2">
                            <p>{{ group.description }}</p>
                        </div>
                        <hr>

                        <!-- Create Post -->
                        <div class="border p-2 mt-2 rounded-lg m-2" v-if="group.member">
                            <div class="w-32 m-2 animate-pulse">
                                <p class="bg-gray-800 px-4 rounded-full">Whats New</p>
                            </div>
                            <form @submit.prevent="submit">
                                <textarea v-model="form.title" type="text" class="w-full bg-gray-800 rounded-md resize-none" rows="2" required=""></textarea>
                                <InputError class="mt-2" :message="form.errors.title"/>
                                <div class="flex justify-between items-center mt-4 mr-2">
                                    <input
                                      type="file"
                                      id="formImage"
                                      class="hidden"
                                       @input="form.image = $event.target.files[0]"
                                    >

                                    <label for="formImage" class="cursor-pointer">
                                      <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V16.999V17.001V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V14V6ZM19 6V14.5858L15.7071 11.2929C15.3166 10.9024 14.6834 10.9024 14.2929 11.2929L13 12.5858L9.20711 8.79289C8.81658 8.40237 8.18342 8.40237 7.79289 8.79289L5 11.5858V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6ZM5 18V14.4142L8.5 10.9142L12.2929 14.7071C12.6834 15.0976 13.3166 15.0976 13.7071 14.7071L15 13.4142L19 17.4142V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18ZM14.5 10C15.3284 10 16 9.32843 16 8.5C16 7.67157 15.3284 7 14.5 7C13.6716 7 13 7.67157 13 8.5C13 9.32843 13.6716 10 14.5 10Z" fill="#D5D5D5"/>
                                        </svg>
                                  </label>
                                    <InputError class="mt-2" :message="form.errors.image"/>
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
    import InputError from '@/Components/InputError.vue';
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
            FollowButton,
            InputError
        },
        props: {
            group: Object,
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


