<script lang="ts">
	import type { PageData } from './$types';
	import Post from '@components/post.svelte';

	export let data: PageData;
</script>

<Post post={data.post} />

