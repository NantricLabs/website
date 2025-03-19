import React from 'react'
import { render } from '@react-email/render'
import type { CollectionConfig } from 'payload'

import Reset from '@/emails/Reset'
import { isAdmin } from '../access/common'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: isAdmin,
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "firstname",
      type: "text",
      required: true,
    },
    {
      name: "lastname",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "user",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    }
  ],
  timestamps: true,
  auth: {
    forgotPassword: {
      generateEmailHTML: async ({ token }: { token?: string } = {}) => {
        return await render(React.createElement(
          Reset,
          { ACTION_URL: process.env.NEXT_PUBLIC_DOMAIN + "/reset/" + token }
        ))
      }
    }
  },
}
