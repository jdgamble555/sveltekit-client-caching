import type { PageLoad } from "./$types";
import { /*cache,*/ cacheFetch } from "$lib/cache";

export const load = (async ({ fetch, url }) => {

    const { pathname } = url;

    const posts = await cacheFetch<Post[]>(pathname, () => fetch(`/data`));

    // cache all posts immediately
    // posts.map(post => cache.set(`${pathname}post/${post.id}`, post));

    return {
        posts
    };

}) satisfies PageLoad;