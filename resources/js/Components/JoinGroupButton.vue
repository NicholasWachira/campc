<template>
	<button class="flex justify-center items-center hover:bg-gray-700 mt-3 px-4 py-1 bg-gray-600 rounded-full w-32" @click="joinGroup" v-text="buttonText">
    </button>
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
			groupId: Number,
			member: Boolean
		},
		data()
		{
			return {
				status: this.member 
			}
		},
		methods: {
			joinGroup()
			{
				
				axios.post('/join/' + this.groupId)
				.then(response => {
					this.status =! this.status;
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
				return (this.status) ? 'Joined': 'Join'
			}
		}
	}
</script>