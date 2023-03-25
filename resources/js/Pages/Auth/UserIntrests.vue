<template>
    <Head title="User Intrests" />

    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-900 dark:bg-gray-900">

        <div>
            <Link href="/">
                <ApplicationLogo class="font-extrabold text-white uppercase border p-1 rounded-md" />
            </Link>
        </div>

        <div class="max-w-xl mx-auto border rounded-2xl p-2 text-white mt-10 ml-10 mr-10 overflow-y-scroll overflow-x-hidden no-scrollbar h-96">
            <div>
            	<h1 class="ml-2 mt-4 mb-2 font-semibold">Technology</h1>
            	<div class="grid grid-cols-2 md:grid-cols-4 gap-x-4">
	            	<div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Programming</div>
	            	<div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Php</div>
	            	<div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Python</div>
	            	<div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">AI</div>
	            	<div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Web3</div>
	            	<div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Hockey</div>
	            	<div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Football</div>
	            </div>
            </div>
            <div>
                <h1 class="ml-2 mt-4 mb-2 font-semibold">Entertainment</h1>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4">
                    <div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Programming</div>
                    <div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Php</div>
                    <div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Python</div>
                    <div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">AI</div>
                    <div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Web3</div>
                    <div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Hockey</div>
                    <div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Football</div>
                </div>
            </div>
            <div>
                <h1 class="ml-2 mt-4 mb-2 font-semibold">Sports</h1>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4">
                    <div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Programming</div>
                    <div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Php</div>
                    <div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Python</div>
                    <div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">AI</div>
                    <div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Web3</div>
                    <div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Hockey</div>
                    <div class="bg-gray-800 rounded-full flex justify-center items-center m-1 p-2 hover:bg-gray-700">Football</div>
                </div>
            </div>
        </div>

        <div class="text-white hover:bg-gray-700 p-2 mt-3 mb-10 rounded-full">
            <Link :href="route('home')">Next >></Link>
        </div>
    </div>   
</template>

<script>
    import { Head, Link } from '@inertiajs/vue3';
    import ApplicationLogo from '@/Components/ApplicationLogo.vue';

    export default {
        components: {
            Head,
            Link,
            ApplicationLogo
        }
    }
</script>
