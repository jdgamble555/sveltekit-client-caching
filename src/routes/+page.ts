import type { PageLoad } from "./$types";
import { cacheFetch } from "$lib/cache";

export const load = (async ({ fetch, url }) => {

    const { pathname } = url;

    return {
        posts: cacheFetch<Post[]>(pathname, () => fetch(`/data`))
    };

}) satisfies PageLoad;