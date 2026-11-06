import { defineField, defineType } from 'sanity';

export const templateType = defineType({
  name: 'template',
  title: 'Web Templates & Apps',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'คำโปรยสั้นๆ สรุปจุดเด่นของแอปพลิเคชัน',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'detailedDescription',
      title: 'Detailed Description / Architecture',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Automotive & Rentals', value: 'automotive' },
          { title: 'Real Estate & Properties', value: 'real-estate' },
          { title: 'E-Commerce & Retail', value: 'ecommerce' },
          { title: 'SaaS & Booking', value: 'saas-booking' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryLabel',
      title: 'Category Display Label',
      type: 'string',
    }),
    defineField({
      name: 'priceStandardTHB',
      title: 'Standard License Price (THB)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'priceStandardUSD',
      title: 'Standard License Price (USD)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'priceExtendedTHB',
      title: 'Extended License Price (THB)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'priceExtendedUSD',
      title: 'Extended License Price (USD)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available Now', value: 'available' },
          { title: 'Coming Soon / In Development', value: 'coming_soon' },
        ],
      },
      initialValue: 'available',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Template',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isNew',
      title: 'New Release Badge',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'version',
      title: 'Version (e.g. 1.2.0)',
      type: 'string',
      initialValue: '1.0.0',
    }),
    defineField({
      name: 'framework',
      title: 'Framework & Core Stack (e.g. Next.js 15 + React 19)',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating (0 - 5.0)',
      type: 'number',
      initialValue: 5.0,
    }),
    defineField({
      name: 'reviewsCount',
      title: 'Reviews Count',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'salesCount',
      title: 'Sales Count',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'thumbnail',
      title: 'Main Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Screenshots & Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'demoUrl',
      title: 'Live Demo URL',
      type: 'url',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub Preview / Repo URL',
      type: 'url',
    }),
    defineField({
      name: 'keyFeatures',
      title: 'Key Features List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack Badges',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Tech Name (e.g. Next.js 15)', type: 'string' },
            { name: 'category', title: 'Category (Frontend, Database, Styling...)', type: 'string' },
            { name: 'badgeColor', title: 'Badge CSS Color (Optional)', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'includedItems',
      title: 'Package Deliverables (What you get)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'databaseSchemaInfo',
      title: 'Database Schema Tables & Notes',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'requirements',
      title: 'System Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated (Text e.g. มีนาคม 2026)',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'categoryLabel',
      media: 'thumbnail',
    },
  },
});
