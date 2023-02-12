<template>
    <Head title="Profile" />
    <AuthenticatedLayout>
        <div class="flex justify-center mt-2 text-white max-w-lg w-full">
            <div class="border p-6 rounded-lg max-w-md w-full ml-6 mr-6">
              <form>
                <h1 class="text-center mb-3 text-2xl font-bold">Edit Profile</h1>
                <div>
                    <img src="https://via.placeholder.com/80" class="mx-auto rounded-full">
                    <input type="file" class="mt-2 mb-2">
                </div>
                <div class="flex flex-col mt-3">
                    <label class="mb-2 text-center">Name</label>
                    <input type="text" class="bg-gray-900 rounded-full outline-none" placeholder="Nicholas Wachira">
                </div>
                <div class="flex flex-col mt-3">
                    <label class="mb-2 text-center">Username</label>
                    <input type="text" class="bg-gray-900 rounded-full outline-none" placeholder="Kanjox">
                </div>
                <div class="flex flex-col mt-3">
                    <label class="mb-2 text-center">Email</label>
                    <input type="email" class="bg-gray-900 rounded-full outline-none" placeholder="wachiranicholas60@gmail.com">
                </div>
                 <div class="flex flex-col mt-5">
                    <button class="bg-white text-gray-900 font-bold px-4 py-2 rounded-full">Update Profile</button>
                </div>
              </form>
            </div>           
        </div>
    </AuthenticatedLayout>
</template>

<script>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head, Link, useForm } from '@inertiajs/vue3';

    export default {
        components: {
            AuthenticatedLayout,
            Head,
            Link
        },
        props: {
            user: Object
        },
        // setup(props)
        // {
        //     const form = useForm(props.user);

        //     const submit = () => {
        //         form.patch(route('userprofile.update', form.id))
        //     }

        //     return { form, submit }
        // }
    }
</script>


