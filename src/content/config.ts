import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // El parámetro 'image' aquí es clave
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: image(), 
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };