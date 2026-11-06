import { defineField, defineType } from 'sanity';

export const articleType = defineType({
  name: 'article',
  title: 'Articles & Insights (บทความ)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (หัวข้อบทความ)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL ประจำบทความ)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category (หมวดหมู่)',
      type: 'string',
      options: {
        list: [
          { title: 'Enterprise & ERP', value: 'Enterprise & ERP' },
          { title: 'Tech Architecture', value: 'Tech Architecture' },
          { title: 'Case Study & Insights', value: 'Case Study' },
          { title: 'Tutorials & Guides', value: 'Tutorials' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt (บทคัดย่อสั้นๆ)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Reading Time (เช่น 5 นาที)',
      type: 'string',
      initialValue: '5 นาที',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date (วันที่เผยแพร่)',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image (ภาพหน้าปก)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      title: 'Content (เนื้อหาบทความ)',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
});
