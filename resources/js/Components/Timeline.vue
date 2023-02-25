<template>
	<div class="rounded-lg max-w-xl w-full h-screen overflow-y-scroll no-scrollbar">
        <div v-for="(post, index) in posts" :key="index" class="mt-2 mb-1">
            <div class="flex items-center p-2">
                <img :src="post.user.avatar"  @error="$event.target.src='/image/abc.png'" class="rounded-full" width="50" height="50">
                <Link class="font-extrabold text-lg ml-3 hover:underline shrink-0" :href="route('user.profile', post.user)">{{ post.user.name }}</Link>
                <svg v-show="post.user.isVerified" width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="verified" class="icon glyph ml-1"><path d="M21.6,9.84A4.57,4.57,0,0,1,21.18,9,4,4,0,0,1,21,8.07a4.21,4.21,0,0,0-.64-2.16,4.25,4.25,0,0,0-1.87-1.28,4.77,4.77,0,0,1-.85-.43A5.11,5.11,0,0,1,17,3.54a4.2,4.2,0,0,0-1.8-1.4A4.22,4.22,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0,4.22,4.22,0,0,0-2.24-.07A4.2,4.2,0,0,0,7,3.54a5.11,5.11,0,0,1-.66.66,4.77,4.77,0,0,1-.85.43A4.25,4.25,0,0,0,3.61,5.91,4.21,4.21,0,0,0,3,8.07,4,4,0,0,1,2.82,9a4.57,4.57,0,0,1-.42.82A4.3,4.3,0,0,0,1.63,12a4.3,4.3,0,0,0,.77,2.16,4,4,0,0,1,.42.82,4.11,4.11,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.25,4.25,0,0,0,1.87,1.28,4.77,4.77,0,0,1,.85.43,5.11,5.11,0,0,1,.66.66,4.12,4.12,0,0,0,1.8,1.4,3,3,0,0,0,.87.13A6.66,6.66,0,0,0,11,21.81a4,4,0,0,1,1.94,0,4.33,4.33,0,0,0,2.24.06,4.12,4.12,0,0,0,1.8-1.4,5.11,5.11,0,0,1,.66-.66,4.77,4.77,0,0,1,.85-.43,4.25,4.25,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.94a4.11,4.11,0,0,1,.15-.95,4.57,4.57,0,0,1,.42-.82A4.3,4.3,0,0,0,22.37,12,4.3,4.3,0,0,0,21.6,9.84Zm-4.89.87-5,5a1,1,0,0,1-1.42,0l-3-3a1,1,0,1,1,1.42-1.42L11,13.59l4.29-4.3a1,1,0,0,1,1.42,1.42Z" style="fill:#EAEF4D"></path></svg>
                <p class="font-thin text-sm ml-2">@{{ post.user.username }}</p>
                <p class="text-xs ml-5 shrink-0">{{ post.created_at }}</p>
                <div>
                </div>
            </div>
            <div>
                <Link :href="route('post.show', post.uuid)" class="hover:text-gray-300">
                    <p class="pl-3 pr-3">{{ post.title }}</p>
                    <img :src="post.image" class="mt-2 rounded-2xl">
                </Link>
            </div>
            <div class="flex items-center gap-x-4 p-2 ml-3">
                <div class="mt-2 flex items-center gap-x-1">
                    <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"/></svg>
                    <p class="text-sm font-bold mt-1">76</p>
                </div>
                <Link :href="route('post.show', post.uuid)">
                    <div class="mt-2 flex items-center hover:text-gray-400">
                    <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.893 28.023c-1.685-1.617-2.921-3.69-3.509-6.021l-0.019-0.087c1.754-1.973 2.841-4.575 2.885-7.429l0-0.009c0-6.961-6.617-12.624-14.75-12.624s-14.75 5.663-14.75 12.624 6.617 12.625 14.75 12.625c1.851-0.001 3.632-0.3 5.298-0.851l-0.119 0.034c2.543 1.908 5.61 3.262 8.946 3.822l0.122 0.017c0.076 0.016 0.163 0.026 0.252 0.026 0.691 0 1.251-0.56 1.251-1.251 0-0.34-0.136-0.649-0.357-0.875l0 0zM21.766 23.982c-0.047-0.035-0.1-0.068-0.156-0.097l-0.007-0.003c-0.061-0.047-0.131-0.091-0.204-0.127l-0.007-0.003c-0.133-0.041-0.291-0.074-0.454-0.093l-0.014-0.001c-0.098 0.004-0.19 0.019-0.278 0.044l0.009-0.002c-0.064 0.005-0.123 0.015-0.18 0.028l0.008-0.002c-1.465 0.554-3.159 0.875-4.928 0.875-0.019 0-0.038-0-0.057-0h0.003c-6.755 0-12.25-4.543-12.25-10.125s5.495-10.124 12.25-10.124c6.754 0 12.25 4.542 12.25 10.124-0.025 2.459-1.034 4.678-2.652 6.285l-0 0c-0.021 0.021-0.027 0.050-0.046 0.072-0.157 0.178-0.259 0.409-0.275 0.663l-0 0.003c-0.006 0.047-0.010 0.101-0.010 0.156 0 0.031 0.001 0.061 0.003 0.091l-0-0.004c0.003 0.032-0.008 0.062-0.003 0.095 0.331 1.835 0.989 3.47 1.917 4.915l-0.032-0.054c-1.886-0.602-3.516-1.531-4.904-2.732l0.018 0.015z"></path>
                    </svg>
                    <p class="ml-2 text-sm mt-1">{{ post.comments_count }}</p>
                    </div>
                </Link>
                </div>
                <hr>
            </div>
        </div>
</template>

<script>
    import { Link } from '@inertiajs/vue3';
    
    export default {
        components: {
            Link
        },
        props: {
            posts: {
                type: Object,
                required: true
            }
        }
    }
</script>