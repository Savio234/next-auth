import { z } from 'zod';
import * as yup from 'yup'

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Please enter a valid email",
    }).email({
        message: 'Please enter a valid email'
    }),
    password: z.string().min(1, 'Password is required')
})
export const validLoginSchema = loginSchema.required({
    email: true,
    password: true
})

export const signUpFormSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string().required('Confirm password is required').min(8, 'Password must be a minimum of 8 characters')
})

export const signUpSchema = z.object({
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Please enter a valid email",
    }).email({
        message: 'Please enter a valid email'
    }),
    password: z.string({
        message: 'Password is required'
    }).min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string({
        message: 'Confirm password is required',
    }).min(8, 'Passwords must match')
}).required({
    email: true,
    password: true,
    confirmPassword: true
}).refine((data: any) => data.password === data?.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword']
})

export type LoginSchema = z.infer<typeof validLoginSchema>
export type SignUpSchema = z.infer<typeof signUpSchema>