<template>
    <Head :title="post.title + ' Edit Post'"/>
    <AuthenticatedLayout>
        <div class="p-5 mb-12">
            <!-- Navbar -->
            <div class="rounded-lg lg:max-w-lg max-w-xs">
                <div>
                    <div class="flex justify-end mt-2 mb-2">
                        <button @click.prevent="submit()" type="submit" class="bg-white hover:bg-gray-300 text-gray-900 px-5 py-1 rounded-2xl font-bold" :disabled="form.processing" :class="{ 'opacity-25': form.processing }">Save</button>
                    </div>
                </div>
                <div class="flex items-center mb-3">
                    <div>
                       <img :src="post.user.avatar"  @error="$event.target.src='/image/abc.png'" class="rounded-full w-12 lg:w-14">
                    </div>
                    <div>
                      <div class="flex items-center">
                        <Link class="font-extrabold text-sm ml-3 hover:underline shrink-0" :href="route('user.profile', post.user)">{{ post.user.name }}</Link>
                      <svg v-show="post.user.isVerified" width="13px" height="13px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="verified" class="icon glyph ml-1 shrink-0"><path d="M21.6,9.84A4.57,4.57,0,0,1,21.18,9,4,4,0,0,1,21,8.07a4.21,4.21,0,0,0-.64-2.16,4.25,4.25,0,0,0-1.87-1.28,4.77,4.77,0,0,1-.85-.43A5.11,5.11,0,0,1,17,3.54a4.2,4.2,0,0,0-1.8-1.4A4.22,4.22,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0,4.22,4.22,0,0,0-2.24-.07A4.2,4.2,0,0,0,7,3.54a5.11,5.11,0,0,1-.66.66,4.77,4.77,0,0,1-.85.43A4.25,4.25,0,0,0,3.61,5.91,4.21,4.21,0,0,0,3,8.07,4,4,0,0,1,2.82,9a4.57,4.57,0,0,1-.42.82A4.3,4.3,0,0,0,1.63,12a4.3,4.3,0,0,0,.77,2.16,4,4,0,0,1,.42.82,4.11,4.11,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.25,4.25,0,0,0,1.87,1.28,4.77,4.77,0,0,1,.85.43,5.11,5.11,0,0,1,.66.66,4.12,4.12,0,0,0,1.8,1.4,3,3,0,0,0,.87.13A6.66,6.66,0,0,0,11,21.81a4,4,0,0,1,1.94,0,4.33,4.33,0,0,0,2.24.06,4.12,4.12,0,0,0,1.8-1.4,5.11,5.11,0,0,1,.66-.66,4.77,4.77,0,0,1,.85-.43,4.25,4.25,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.94a4.11,4.11,0,0,1,.15-.95,4.57,4.57,0,0,1,.42-.82A4.3,4.3,0,0,0,22.37,12,4.3,4.3,0,0,0,21.6,9.84Zm-4.89.87-5,5a1,1,0,0,1-1.42,0l-3-3a1,1,0,1,1,1.42-1.42L11,13.59l4.29-4.3a1,1,0,0,1,1.42,1.42Z" style="fill:#EAEF4D"></path></svg>
                      <p class="font-thin text-xs ml-2 shrink-0">@{{ post.user.username }}</p>
                      <p class="text-xs ml-5 shrink-0">{{ post.created_at }}</p>
                      </div>
                      <div class="ml-3 flex">
                        <svg width="15px" height="15px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#D5D5D5" d="M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"/><path fill="#D5D5D5" d="M64 832h896v64H64zm256-640h128v96H320z"/><path fill="#D5D5D5" d="M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"/></svg>
                        <p class="text-xs uppercase text-gray-400 font-extrabold ml-1">{{ post.user.institution.short_name }}</p>
                      </div>
                </div>
                </div>
                <div class="flex flex-col">
                    <textarea class="resize-none whitespace-pre-wrap mx-auto bg-gray-900 rounded-2xl w-full" cols="35" rows="3" v-model="form.title"/>

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


