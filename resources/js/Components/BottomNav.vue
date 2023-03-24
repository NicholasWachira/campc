<template>
	<div class="bg-gray-800 p-5 fixed bottom-0 left-0 w-full h-14 md:hidden lg:hidden xl:hidden flex items-center justify-around">
		<div v-if="$page.props.auth.user">
			<Link :href="route('user.profile', $page.props.auth.user)">
				<img :src="$page.props.auth.user.avatar" @error="$event.target.src='/image/abc.png'" class="w-8 rounded-full">
			</Link>
		</div>
		<div>
			<Link :href="route('explore.users')">
				<svg width="22px" height="22px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
				  <path fill="#ffffff" fill-rule="evenodd" d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"/>
				</svg>
			</Link>
		</div>
		<div v-if="$page.props.auth.user">
			<Link :href="route('user.notifications')" class="flex">
				<svg fill="#ffffff" width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,23a2,2,0,0,1-2-2h4A2,2,0,0,1,12,23ZM20,6a2,2,0,1,0-2,2A2,2,0,0,0,20,6Zm.707,11.293L19,15.586V10H17v6a1,1,0,0,0,.293.707l.293.293H6.414l.293-.293A1,1,0,0,0,7,16V10a4.98,4.98,0,0,1,5.912-4.912L14.5,3.5a.913.913,0,0,0-.168-.1A7,7,0,0,0,13,3.084V2a1,1,0,0,0-2,0V3.08A7,7,0,0,0,5,10v5.586L3.293,17.293A1,1,0,0,0,4,19H20a1,1,0,0,0,.707-1.707Z"/></svg>
				<p class="text-xs flex justify-center text-center items-center bg-gray-300 rounded-full p-1 ml-1 h-4 w-4 text-gray-900 font-extrabold shrink-0" v-if="$page.props.notifications.count > 0">{{ $page.props.notifications.count }}</p>
			</Link>
		</div>
		<div>
			<Link :href="route('explore.groups')">
				<div class="flex">
					<svg fill="#ffffff" height="18px" width="18px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
					 viewBox="0 0 24 24" xml:space="preserve">
					<g id="group">
						<path d="M24,15.9c0-2.8-1.5-5-3.7-6.1C21.3,8.8,22,7.5,22,6c0-2.8-2.2-5-5-5c-2.1,0-3.8,1.2-4.6,3c0,0,0,0,0,0c-0.1,0-0.3,0-0.4,0
							c-0.1,0-0.3,0-0.4,0c0,0,0,0,0,0C10.8,2.2,9.1,1,7,1C4.2,1,2,3.2,2,6c0,1.5,0.7,2.8,1.7,3.8C1.5,10.9,0,13.2,0,15.9V20h5v3h14v-3h5
							V15.9z M17,3c1.7,0,3,1.3,3,3c0,1.6-1.3,3-3,3c0-1.9-1.1-3.5-2.7-4.4c0,0,0,0,0,0C14.8,3.6,15.8,3,17,3z M13.4,4.2
							C13.4,4.2,13.4,4.2,13.4,4.2C13.4,4.2,13.4,4.2,13.4,4.2z M15,9c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3S15,7.3,15,9z M10.6,4.2
							C10.6,4.2,10.6,4.2,10.6,4.2C10.6,4.2,10.6,4.2,10.6,4.2z M7,3c1.2,0,2.2,0.6,2.7,1.6C8.1,5.5,7,7.1,7,9C5.3,9,4,7.7,4,6S5.3,3,7,3
							z M5.1,18H2v-2.1C2,13.1,4.1,11,7,11v0c0,0,0,0,0,0c0.1,0,0.2,0,0.3,0c0,0,0,0,0,0c0.3,0.7,0.8,1.3,1.3,1.8
							C6.7,13.8,5.4,15.7,5.1,18z M17,21H7v-2.1c0-2.8,2.2-4.9,5-4.9c2.9,0,5,2.1,5,4.9V21z M22,18h-3.1c-0.3-2.3-1.7-4.2-3.7-5.2
							c0.6-0.5,1-1.1,1.3-1.8c0.1,0,0.2,0,0.4,0v0c2.9,0,5,2.1,5,4.9V18z"/>
					</g>
				</svg>
				</div>
			</Link>
		</div>
		<div v-if="!$page.props.auth.user">
			<Link :href="route('login')">
				<svg width="21px" height="21px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 6C8 3.79086 9.79086 2 12 2H17.5C19.9853 2 22 4.01472 22 6.5V17.5C22 19.9853 19.9853 22 17.5 22H12C9.79086 22 8 20.2091 8 18V17C8 16.4477 8.44772 16 9 16C9.55228 16 10 16.4477 10 17V18C10 19.1046 10.8954 20 12 20H17.5C18.8807 20 20 18.8807 20 17.5V6.5C20 5.11929 18.8807 4 17.5 4H12C10.8954 4 10 4.89543 10 6V7C10 7.55228 9.55228 8 9 8C8.44772 8 8 7.55228 8 7V6ZM12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L13.7071 15.7071C13.3166 16.0976 12.6834 16.0976 12.2929 15.7071C11.9024 15.3166 11.9024 14.6834 12.2929 14.2929L13.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L13.5858 11L12.2929 9.70711C11.9024 9.31658 11.9024 8.68342 12.2929 8.29289Z" fill="#ffffff"/>
                    </svg>
			</Link>
		</div>
		<div style="margin-top: 5px;">
			<Link v-if="$page.props.auth.user" :href="route('logout')" method="post" as="button">
				<svg width="21px" height="21px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 12H3.62" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
			</Link>
		</div>
	</div>
</template>

<script>
	import { Link } from '@inertiajs/vue3';

	export default {
		components: {
			Link
		}
	}
</script>