// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	type Post = {
		id: string;
		title: string;
		content: string;
		author: string;
		created_at: string;
	};

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
