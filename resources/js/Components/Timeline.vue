<template>
	<div class="max-w-md h-screen overflow-x-hidden overflow-y-scroll no-scrollbar mb-12 lg:mb-0 mt-5">
        <div v-for="(post, index) in posts" :key="index" class="mt-2">
              <UserPostInfo :post="post"/>
              <div>
                <Link :href="route('post.show', post.uuid)" class="hover:text-gray-300">
                    <p class="pl-3 pr-3 mt-1 text-md whitespace-pre-wrap">{{ post.title }}</p>
                    <img v-show="post.image" :src="post.image" class="max-h-screen mt-2 rounded-2xl">
                </Link>
              </div>
              <UpvoteAndCommentSec :post="post"/>
                <hr>
            </div>
        </div>
</template>

<script>
    import UpvoteAndCommentSec from '@/Components/UpvoteAndCommentSec.vue';
    import UserPostInfo from '@/Components/UserPostInfo.vue';
    import { Link, router } from '@inertiajs/vue3';    
    import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'


    export default {
        components: {
            Link,
            Menu, MenuButton, MenuItems, MenuItem,
            router,
            UpvoteAndCommentSec,
            UserPostInfo
        },
        props: {
            posts: {
                type: Object,
                required: true
            }
        },
        setup()
        {
            const destroy = (uuid) => {
                if (confirm('Are you sure you want to delete this post?')) {
                    router.delete(route('post.delete', uuid));
                }
            }

            return { destroy }
        }
    }
</script>