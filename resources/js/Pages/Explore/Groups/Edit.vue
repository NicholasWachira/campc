<template>
    <Head :title="group.name" />
    <AuthenticatedLayout>
        <div class="flex justify-center mt-2 text-white max-w-lg w-full mb-12 lg:mb-8">
            <div class="border p-6 rounded-lg max-w-md w-full ml-6 mr-6">
            <h1 class="text-center mb-3 text-2xl font-bold">Create Group</h1>
                
                <form @submit.prevent="uploadAvatar">
                    <img :src="group.avatar" @error="$event.target.src='/image/abc.png'" class="mx-auto rounded-full" width="100" height="100">
                    <div class="flex justify-center">
                        <input type="file" class="mt-2 mb-2 border rounded-md" @input="form2.avatar = $event.target.files[0]" required="">
                    </div>
                    <div class="text-red-700 px-2 mt-2">{{ form2.errors.avatar}}</div>

                    <div class="flex flex-col mt-5">
                    <button :class="{ 'opacity-25': form2.processing }" class="bg-white text-gray-900 font-bold px-4 py-2 rounded-full" type="submit" :disabled="form2.processing">Update Group Avatar</button>
                </div>
                </form>

              <form @submit.prevent="submit">
                <div class="flex flex-col mt-3">
                    <label class="mb-2 text-center">Name</label>
                    <input type="text" class="bg-gray-900 rounded-md outline-none" placeholder="Creators Forum" v-model="form.name">
                    <div class="text-red-700 px-2 mt-2">{{ form.errors.name}}</div>
                </div>  
                <div class="flex flex-col mt-3">
                    <label class="mb-2 text-center">Username</label>
                    <input type="text" class="bg-gray-900 rounded-md outline-none" placeholder="creatorsforum" v-model="form.username">
                    <div class="text-red-700 px-2 mt-2">{{ form.errors.username}}</div>
                </div>
                <div class="mt-4">
                    <InputLabel for="Institution" value="Institution" />

                    <select id="institution" class="border-gray-300 bg-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full" v-model="form.institution_id">
                      <template v-for="(institution, index) in institutions" :key="index">
                        <option :value="institution.id">{{ institution.name }}</option>  
                      </template>
                    </select>

                    <InputError class="mt-2" :message="form.errors.institution_id" />
            </div>
                <div class="flex flex-col mt-3">
                    <label class="mb-2 text-center">Description</label>
                    <textarea class="bg-gray-900 rounded-md outline-none resize-none" rows="6" placeholder="Where Creators come alive" v-model="form.description"></textarea>
                    <div class="text-red-700 px-2 mt-2">{{ form.errors.description}}</div>
                </div>
                 <div class="flex flex-col mt-5">
                    <button class="bg-white text-gray-900 font-bold px-4 py-2 rounded-full" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Create Group</button>
                </div>
              </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head, Link, useForm, router } from '@inertiajs/vue3';
    import InputError from '@/Components/InputError.vue';
    import InputLabel from '@/Components/InputLabel.vue';

    export default {
        components: {
            AuthenticatedLayout,
            Head,
            Link,
            router,
            InputError,
            InputLabel
        },
        props: {
            institutions: Object,
            group: Object
        },
        setup(props)
        {
            const form = useForm({
                name: props.group.name,
                username: props.group.username,
                institution_id: props.group.institution_id,
                description: props.group.description,
            });

            const form2 = useForm({
                avatar: null
            });

            const uploadAvatar = () => {
                router.post(route('group.update.avatar', props.group.uuid), {
                  _method: 'post',
                  avatar: form2.avatar,
                })
            }

            const submit = () => {

                console.log('Submitted')
            }

            return { form, submit, form2, uploadAvatar }
        }
    }
</script>


