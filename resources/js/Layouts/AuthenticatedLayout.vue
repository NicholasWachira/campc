<template>
    <div>
        <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
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

            <div class="bg-gray-800 p-5 fixed bottom-20 right-8 text-white text-2xl font-extrabold h-10 w-10 lg:hidden flex justify-center items-center rounded-full text-center">
                +
            </div>

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
    import { Link } from '@inertiajs/vue3';
    import Navbar from '@/Components/Navbar.vue';
    import Trending from '@/Components/Trending.vue';

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
            BottomNav
        },
    }
</script>
