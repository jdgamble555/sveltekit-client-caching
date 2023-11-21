import type { PageLoad } from "./$types";
import { cacheFetch } from "$lib/cache";

export const load = (async ({ fetch, params, url }) => {

    const { id } = params;
    const { pathname } = url;

    const post = cacheFetch<Post>(pathname, () => fetch(`/data?id=${id}`));

    return {
        post
    };

}) satisfies PageLoad;