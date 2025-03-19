"use client"

import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { createUser } from '@/functions/users'
import { useRouter } from '@/locales/navigation'

type FormData = {
    email: string
    password: string
    confirmPassword: string
    firstname: string
    lastname: string
}

export default function Page() {
    const router = useRouter()

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>()
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const onSubmit = async ({ email, password, firstname, lastname }: FormData) => {
        try {
            const user = await createUser({
                email, password,
                firstname,
                lastname
            })

            if (!user) {
                setErrorMessage("Failed to create user. Please try again.")
                return
            }

            const req = await fetch(`/api/users/login`, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })

            if (req.ok) router.push("/dash")
            else router.push("/login")
        } catch (err) {
            console.error(err)
            setErrorMessage("An unexpected error occurred. Please try again.")
        }
    }

    const password = watch('password')

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <div>
                    <input
                        {...register('firstname', { required: "First name is required" })}
                        type="text"
                        placeholder="First Name"
                    />
                    {errors.firstname && <p style={{ color: 'red' }}>{errors.firstname.message}</p>}
                </div>
                <div>
                    <input
                        {...register('lastname', { required: "Last name is required" })}
                        type="text"
                        placeholder="Last Name"
                    />
                    {errors.lastname && <p style={{ color: 'red' }}>{errors.lastname.message}</p>}
                </div>
                <div>
                    <input
                        {...register('email', { required: "Email is required" })}
                        type="email"
                        placeholder="Email"
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                </div>
                <div>
                    <input
                        {...register('password', { required: "Password is required" })}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                </div>
                <div>
                    <input
                        {...register('confirmPassword', {
                            required: "Please confirm your password",
                            validate: value => value === password || "Passwords do not match"
                        })}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                    />
                    {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>}
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                    />
                    <label>Show Password</label>
                </div>
                <button type="submit">Register</button>
            </form>

            <Link href="/login">
                Login
            </Link>
        </>
    )
}
