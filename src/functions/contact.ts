"use server"

import { getPayload } from './connector'

import { Contact } from '@/types/payload-types'

export async function submitMessage(data: Omit<Contact, "id" | "createdAt" | "updatedAt">): Promise<boolean> {
    const payload = await getPayload()

    return Boolean(await payload.create({
        collection: 'contact',
        data
    }))
}
