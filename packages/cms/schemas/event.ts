import { defineType, defineField } from 'sanity'

export const scheduleItem = defineType({
  name: 'scheduleItem',
  title: 'Schedule Item',
  type: 'object',
  fields: [
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'e.g., "9:00 AM" or "2:30 PM"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'activity',
      title: 'Activity',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      time: 'time',
      activity: 'activity',
    },
    prepare({ time, activity }) {
      return {
        title: `${time} - ${activity}`,
      }
    },
  },
})

export const speaker = defineType({
  name: 'speaker',
  title: 'Speaker',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'e.g., "Keynote Speaker", "Workshop Facilitator"',
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})

export const event = defineType({
  name: 'event',
  title: 'Event',
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
      description: 'URL-friendly identifier (auto-generated from title)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Brief description shown in event listings',
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detailed description shown on event detail page',
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Start Date & Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date & Time',
      type: 'datetime',
      description: 'Leave empty if single-day event',
    }),
    defineField({
      name: 'venue',
      title: 'Venue Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'Full address for Google Maps directions',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Event',
      type: 'boolean',
      description: 'Show this event prominently',
      initialValue: false,
    }),
    defineField({
      name: 'highlights',
      title: 'What to Expect',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key highlights or benefits of attending',
    }),
    defineField({
      name: 'schedule',
      title: 'Event Schedule',
      type: 'array',
      of: [{ type: 'scheduleItem' }],
    }),
    defineField({
      name: 'speakers',
      title: 'Speakers',
      type: 'array',
      of: [{ type: 'speaker' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'image',
      featured: 'featured',
    },
    prepare({ title, date, media, featured }) {
      const formattedDate = date
        ? new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })
        : 'No date'
      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle: formattedDate,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Event Date (Newest)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Event Date (Oldest)',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
})
