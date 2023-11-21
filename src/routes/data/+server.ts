import { error, json, type RequestHandler } from "@sveltejs/kit";

const posts = [
    {
        "id": 1,
        "title": "The Joy of Gardening",
        "content": "Discover the endless benefits of spending time in your garden. From growing your own food to the therapeutic aspects of gardening, this post explores why gardening is a hobby worth considering.",
        "author": "Alex Smith",
        "created_at": "2023-11-19T08:00:00Z"
    },
    {
        "id": 2,
        "title": "Tech Trends in 2023",
        "content": "In this post, we dive into the latest technology trends of 2023. We cover everything from AI advancements to sustainable tech solutions that are shaping our world.",
        "author": "Jordan Lee",
        "created_at": "2023-11-18T15:30:00Z"
    },
    {
        "id": 3,
        "title": "Exploring World Cuisines",
        "content": "Join us on a culinary journey as we explore different world cuisines. From the spicy dishes of Mexico to the intricate flavors of Japanese cuisine, get ready to expand your taste palette.",
        "author": "Maria Gonzalez",
        "created_at": "2023-11-17T19:45:00Z"
    }
];

export const GET = (async ({ url }) => {

    const id = Number(url.searchParams.get('id'));

    await new Promise((res) => setTimeout(res, 2000));

    if (id) {
        const post = posts.find(post => post.id === id);
        if (!post) {
            throw error(404, 'Post not found!');
        }
        return json(post);
    }

    return json(posts);

}) satisfies RequestHandler;