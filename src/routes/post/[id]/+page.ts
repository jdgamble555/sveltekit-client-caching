import type { PageLoad } from "./$types";
import { cacheFetch } from "$lib/cache";

export const load = (async ({ fetch, params, url }) => {

    const { id } = params;
    const { pathname } = url;

    return {
        post: cacheFetch<Post>(pathname, () => fetch(`/data?id=${id}`))
    };

}) satisfies PageLoad;