import {HomeIcon, TagIcon} from '@sanity/icons'
import { Ruler } from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const addressType = defineType({
  name: 'address',
  title: 'Addresses',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Address Name',
      type: 'string',
      description: 'A friendly name for this address (e.g Home, Work)',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'email',
      type: 'email',
      title: 'User Email',
    }),
    defineField({
      name: 'address',
      title: 'Street Address',
      type: 'string',
      description: 'Street address including apartment/unit number',
      validation: (Rule) => Rule.required().min(5).max(100),

    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      description: 'Two letters state code (e.g NY, CA)',
      validation: (Rule) => Rule.required().length(2).uppercase(),
    }),
    defineField({
      name: 'zip',
      title: ' Zip Code',
      type: 'string',
      description: 'Format: 12345 or 12345-6789',
      validation: (Rule) => 
        Rule.required()
        .regex(/^\d{5}(-\d{4})?$/, {
            name: 'zipCode',
            invert: false,
        })
        .custom((zip: string | undefined) => {
            if (!zip) {
                return "ZIP code is required";
            }
            if (!zip.match(/^\d{5}(-\d{4})?$/)) {
                return "Please enter a valid Zip code (e.g. 12345 or 12345-6789)";
            }
            return true;
        })
    }),
    defineField({
      name: 'default',
      type: 'boolean',
      title: 'Default Address',
      description: 'Is this the default shipping address?',
      initialValue: false,
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "address",
      city: "city",
      state: "state",
      isDefault: "default",
    },
    prepare({title, subtitle, city, state, isDefault}){
        return {
            title: `${title} ${isDefault ? "(Default)" : ""}`,
            subtitle: `${subtitle}, ${city}, ${state}`,
        };
    },
  },
});
