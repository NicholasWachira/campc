<template>
	<div class="mt-2 flex items-center gap-x-1">
		<button @click.prevent="upvotePost" class="">
			<!-- #FA4242 -->
			<template v-if="post.voted">
				<svg fill="#FA4242" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"/>
				`</svg>
			</template>
			<template v-if="!post.voted">
				<svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"/>
				`</svg>
			</template>
		</button>
        <p class="text-sm font-bold mt-1">{{ post.upvotes }}</p>
	</div>
</template>

<script>
	import axios from 'axios'
	import { router } from '@inertiajs/vue3';

	export default {
		components: {
			axios,
			router
		},
		props: {
			post: Object
		},
		methods: {
			upvotePost()
			{
				if (this.post.voted) {
					this.post.upvotes--;
				}
				else {
					this.post.upvotes++;
				}

				axios.post('/p/'+ this.post.uuid + '/upvote')
				.then(response => {
					router.reload();
				})
				.catch(error => {
					console.log(error)
				})
			},
		},
        created()
        {
          // window.Echo.channel('posts')
          //   .listen('.PostUpvotesWereUpdated', (e) => {
          //       if (e.id === this.post.id) {
          //        this.post.upvotes = e.count
          //       }

          //       console.log(e)
          //   })
        },
	}
</script>