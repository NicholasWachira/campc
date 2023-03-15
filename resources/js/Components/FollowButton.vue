<template>
	<button class="hover:bg-red-200 text-gray-900 mt-1 text-sm bg-gray-100 font-bold px-5 py-2 rounded-full hover:" @click="followUser" v-text="buttonText"></button>
</template>

<script>
	import { Link, router } from '@inertiajs/vue3';
	import axios from 'axios'

	export default {
		components: {
			Link,
			axios
		},
		data()
		{
			return {
				status: this.follows 
			}
		},
		props: {
			userId: Number,
			follows: Boolean
		},
		methods: {
			followUser()
			{
				this.status =! this.status;
				
				axios.post('/follow/' + this.userId)
				.then(response => {
					router.reload();
				})
				.catch(errors => {
					if (errors.response.status == 401 || errors.response.status == 500)
                        {
                            window.location = '/login';
                        }
				})
			}
		},
		computed: {
			buttonText(){
				return (this.status) ? 'Unfollow': 'follow'
			}
		}
	}
</script>