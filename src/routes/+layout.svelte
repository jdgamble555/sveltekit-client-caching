<script>
	import { navigating } from '$app/stores';
	import '../app.css';
</script>

<nav class="m-5">
	<h1 class="text-xl underline hover:no-underline"><a href={`/`}>Home</a></h1>
</nav>

{#if $navigating}
	<div
		class="m-5 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
		role="status"
	>
		<span
			class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
		>
			Loading...
		</span>
	</div>
{:else}
	<main class="m-5">
		<slot />
	</main>
{/if}
