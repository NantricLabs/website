import type { CollectionConfig } from 'payload'
import { isAdmin } from '../access/common'

export const Contact: CollectionConfig = {
  slug: 'contact',
  access: {
    read: isAdmin,
    create: () => true,
  },
  hooks: {
    afterOperation: [
      ({ result, req }) => {
        req.payload.sendEmail({
          to: "info@nantric.com",
          subject: 'New Contact Form Submission',
          text: `Name: ${result.name}\nEmail: ${result.email}\nCompany: ${result.company}\nPhone: ${result.phone}\nMessage: ${result.message}`
        })
      }
    ]
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    }
  ]
}
