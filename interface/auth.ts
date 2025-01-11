import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string({
        message: 'Email is required'
    }).email({
        message: 'Please enter a valid email'
    }),
    password: z.string({
        message: 'Password is required'
    })
})

export const signUpSchema = z.object({
    email: z.string({
        message: 'Email is required'
    }).email(),
    password: z.string({
        message: 'Password is required'
    }).min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string({
        message: 'Confirm password is required'
    })
}).refine((data: any) => data.password === data?.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword']
})

export type LoginSchema = z.infer<typeof loginSchema>
export type SignUpSchema = z.infer<typeof signUpSchema>