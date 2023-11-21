import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async () => {

    throw redirect(301, `/`);

}) satisfies RequestHandler;