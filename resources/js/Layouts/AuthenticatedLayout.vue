<template>
    <div>
        <div class="min-h-screen bg-gray-100 dark:bg-gray-800">
            <!-- App Logo -->
            <div class="flex justify-center items-center pt-2">
                <div class="max-w-7xl w-full">
                    <Link :href="route('home')">
                        <div class="flex justify-center items-center gap-x-2 border-2 p-1 rounded-md text-white w-48 mx-auto hover:bg-gray-800 mt-5">
                            <p class="text-xs uppercase">Campus</p>
                            <p class="text-xs font-extrabold uppercase">Connect</p>
                        </div>
                    </Link>
                </div>
            </div>
            <!-- Page Heading -->
            <header class="bg-white dark:bg-gray-800 shadow" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <main class="flex justify-center text-white mx-auto">
                <navbar/>
                    <slot />
                <trending/>
            </main>

            <div @click="openModal" class="bg-gray-900 p-5 fixed bottom-20 right-8 text-white text-2xl font-extrabold h-10 w-10 lg:hidden flex justify-center items-center rounded-full text-center md:hidden  lg:hidden xl:hidden">
                +
            </div>

            <TransitionRoot appear :show="isOpen" as="template">
                <Dialog as="div" @close="closeModal" class="relative z-10">
                  <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                  >
                    <div class="fixed inset-0 bg-black bg-opacity-25" />
                  </TransitionChild>

                  <div class="fixed inset-0 overflow-y-auto">
                    <div
                      class="flex h-auto mt-12 items-center justify-center p-4 text-center"
                    >
                      <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                      >
                        <DialogPanel
                          class="w-full max-w-lg transform overflow-hidden rounded-2xl bg-gray-800 p-6 align-middle shadow-xl transition-all"
                        >
                          <DialogTitle
                            as="h3"
                            class="text-lg font-medium leading-6 text-white"
                          >
                            Tweet
                          </DialogTitle>
                          <form @submit.prevent="submit">
                            <div class="mt-1">
                              <textarea class="bg-gray-900 text-white rounded-lg resize-none" rows="6" cols="40" v-model="form.title" required></textarea>
                            </div>
                            <div class="align-left p-2">
                              <input type="file" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" @input="form.image = $event.target.files[0]">
                            </div>
                            <div class="mt-4">
                              <button
                                type="submit"
                                class="inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                :disabled="form.processing">
                                Create Post
                              </button>
                            </div>
                          </form>
                        </DialogPanel>
                      </TransitionChild>
                    </div>
                  </div>
                </Dialog>
            </TransitionRoot>
            <BottomNav/>
        </div>
    </div>
</template>

<script>
    import ApplicationLogo from '@/Components/ApplicationLogo.vue';
    import BottomNav from '@/Components/BottomNav.vue';
    import Dropdown from '@/Components/Dropdown.vue';
    import DropdownLink from '@/Components/DropdownLink.vue';
    import NavLink from '@/Components/NavLink.vue';
    import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
    import { Link, useForm } from '@inertiajs/vue3';
    import Navbar from '@/Components/Navbar.vue';
    import Trending from '@/Components/Trending.vue';
    import { ref } from 'vue'
    import {
      TransitionRoot,
      TransitionChild,
      Dialog,
      DialogPanel,
      DialogTitle,
    } from '@headlessui/vue'

    export default {
        components: {
            ApplicationLogo,
            Dropdown,
            DropdownLink,
            NavLink,
            ResponsiveNavLink,
            Link,
            Navbar,
            Trending,
            BottomNav,
            ref,
            TransitionRoot,
            TransitionChild,
              Dialog,
              DialogPanel,
              DialogTitle,
              useForm
        },
        setup()
        {
            const isOpen = ref(false);

            const form = useForm({
                title: '',
                image: null
            });

            const submit = () => {
              form.post(route('post.store'))
                setTimeout(() => isOpen.value = false, 2000);
              form.reset()
            }

            function closeModal() {
              isOpen.value = false
            }
            function openModal() {
              isOpen.value = true
            }

            return { isOpen, closeModal, openModal, form, submit }
        }
    }
</script>
