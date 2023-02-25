<template>
    <Head :title="user.name" />
    <AuthenticatedLayout>
        <div class="flex justify-center mt-2 text-white max-w-lg w-full">
            <div class="border p-6 rounded-lg max-w-md w-full ml-6 mr-6">
            <h1 class="text-center mb-3 text-2xl font-bold">Edit Profile</h1>
                
                <form @submit.prevent="uploadAvatar">
                    <img :src="user.avatar" @error="$event.target.src='/image/abc.png'" class="mx-auto rounded-full" width="100" height="100">
                    <div class="flex justify-center">
                        <input type="file" class="mt-2 mb-2 border rounded-2xl" @input="form2.avatar = $event.target.files[0]" required="">
                    </div>
                    <div class="text-red-700 px-2 mt-2">{{ form2.errors.avatar}}</div>

                    <div class="flex flex-col mt-5">
                    <button class="bg-white text-gray-900 font-bold px-4 py-2 rounded-full" :disabled="form2.processing">Update Avatar</button>
                </div>
                </form>

              <form @submit.prevent="submit" enctype="multipart/form-data">
                <div class="flex flex-col mt-3">
                    <label class="mb-2 text-center">Name</label>
                    <input type="text" class="bg-gray-900 rounded-full outline-none" placeholder="Nicholas Wachira" v-model="form.name">
                    <div class="text-red-700 px-2 mt-2">{{ form.errors.name}}</div>
                </div>  
                <div class="flex flex-col mt-3">
                    <label class="mb-2 text-center">Username</label>
                    <input type="text" class="bg-gray-900 rounded-full outline-none" placeholder="Kanjox" v-model="form.username">
                    <div class="text-red-700 px-2 mt-2">{{ form.errors.username}}</div>
                </div>
                <div class="flex flex-col mt-3">
                    <label class="mb-2 text-center">Email</label>
                    <input type="email" class="bg-gray-900 rounded-full outline-none" placeholder="wachiranicholas60@gmail.com" v-model="form.email">
                    <div class="text-red-700 px-2 mt-2">{{ form.errors.email}}</div>
                </div>
                 <div class="flex flex-col mt-5">
                    <button class="bg-white text-gray-900 font-bold px-4 py-2 rounded-full" :disabled="form.processing">Update Profile</button>
                </div>
              </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head, Link, useForm, router } from '@inertiajs/vue3';

    export default {
        components: {
            AuthenticatedLayout,
            Head,
            Link,
            router
        },
        props: {
            user: Object
        },
        setup(props)
        {
            const form = useForm({
                name: props.user.name,
                username: props.user.username,
                email: props.user.email,
            });

            const form2 = useForm({
                avatar: null
            });

            const uploadAvatar = () => {
                router.post(route('user.profile.update.avatar', props.user), {
                  _method: 'post',
                  avatar: form2.avatar,
                })
            }

            const submit = () => {
                // form.post(route('user.profile.update', props.user))

                router.post(route('user.profile.update', props.user), {
                  _method: 'post',
                  name: form.name,
                  username: form.username,
                  email: form.email,
                })

                form2.reset();
            }

            return { form, form2, submit, uploadAvatar }
        }
    }
</script>


