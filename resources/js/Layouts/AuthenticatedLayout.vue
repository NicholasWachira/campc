<template>
    <div>
        <div class="min-h-screen bg-gray-900 dark:bg-gray-900">
            <!-- App Logo -->
            <div class="flex justify-center items-center pt-2">
                <div class="max-w-7xl w-full">
                    <Link :href="route('home')">
                        <div class="flex justify-center items-center gap-x-2 border-2 p-1 rounded-md text-white w-40 mx-auto hover:bg-gray-800 mt-5">
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

            <main class="flex justify-center overflow-x-hidden text-white mx-auto">
                <navbar/>
                    <slot />
                <trending/>
            </main>

            <div v-show="$page.props.auth.user" @click="openModal" class="bg-gray-700 p-5 fixed bottom-20 right-8 text-white text-2xl font-extrabold h-10 w-10 lg:hidden flex justify-center items-center rounded-full text-center md:hidden  lg:hidden xl:hidden">
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
                          <form @submit.prevent="submit">
                            <div class="mt-1">
                              <textarea class="bg-gray-900 text-white rounded-lg resize-none" rows="2" cols="28" v-model="form.title" required></textarea>
                            </div>
                            <div class="align-left p-2 ml-3">
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
