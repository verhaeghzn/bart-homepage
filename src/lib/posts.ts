import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export async function getPosts(): Promise<Post[]> {
	const posts = await getCollection('blog', ({ data }) => data.draft !== true);
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date): string {
	return new Intl.DateTimeFormat('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'Europe/Amsterdam',
	}).format(date);
}

export function readingMinutes(text: string | undefined): number {
	const words = (text ?? '').trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 230));
}
