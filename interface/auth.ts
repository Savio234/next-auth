import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string()
}).refine((data: any) => data.password === data?.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword']
})

export type LoginSchema = z.infer<typeof loginSchema>
export type SignUpSchema = z.infer<typeof signUpSchema>