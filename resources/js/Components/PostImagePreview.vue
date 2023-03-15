<template>
	<div class="m-2 flex justify-center">
	   <img :src="image" class="rounded-lg">

	   {{ image }}
	 </div>
</template>

<script>
	export default {
		props: {
			image: Object
		}
	}
</script>