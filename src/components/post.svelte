<script lang="ts">
	export let post: Post;
</script>

<div class="border border-1 p-3 my-3">
	<h1 class="text-xl underline hover:no-underline">
		<a href={`/post/${post.id}`}>{post.title}</a>
	</h1>
	<small>By {post.author} - {new Date(post.created_at).toDateString()}</small>
	<article>
		{post.content}
	</article>
</div>
