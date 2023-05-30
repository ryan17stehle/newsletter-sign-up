import { z } from 'zod'

// create the schema for the email
export const UserEmailSchema = z.object({
    email: z.string().email({message: "Oops, wrong format!"}).trim().toLowerCase()
})

export type UserEmail = z.infer<typeof UserEmailSchema>