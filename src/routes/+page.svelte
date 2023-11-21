<script lang="ts">
	import type { PageData } from './$types';
	import Post from '@components/post.svelte';

	export let data: PageData;
</script>

<h1 class="text-3xl font-bold underline">Posts</h1>

{#each data.posts as post}
	<Post {post} />
{/each}
