import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { topics } from './data/topics';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		topics: z.array(z.enum(topics)).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
