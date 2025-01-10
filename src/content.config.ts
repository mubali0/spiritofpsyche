import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string(),
        image: z.object({
            url: z.string().url(),
            alt: z.string(),
        }).optional(),
        tags: z.array(z.string()),
    }),
});


const service = defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
    }),
  });

  const teams = defineCollection({
    schema: z.object({
      name: z.string(),
      role: z.string(),
      bio: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string(),
      }),
      socials: z.object({
        linkedin: z.string().optional(),
        twitter: z.string().optional(),
        github: z.string().optional(),
        dribbble: z.string().optional(),
      }),
    }),
  });


export const collections = {
    blog,
    service,
    teams,
};