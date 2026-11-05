import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    tagline: z.string(),              // one-liner under the title
    cover: image(),                   // the poster
    order: z.number(),                // position in the "magazine"
    year: z.number(),
    highlight: z.string().optional(), // headline result, e.g. "A grade · 10+ users"
    role: z.string(),
    team: z.string().optional(),
    duration: z.string().optional(),
    tools: z.array(z.string()),
  }),
});

export const collections = { projects };