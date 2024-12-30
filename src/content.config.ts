import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string(),
        image: z.string().optional(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    posts: postsCollection,
};