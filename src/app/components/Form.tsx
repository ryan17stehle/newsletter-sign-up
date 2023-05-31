'use client';

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserEmailSchema } from '../../../models/Email'
import type { UserEmail } from '../../../models/Email';
import { useRouter } from 'next/navigation';

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: {
            errors, 
        }
    } = useForm<UserEmail>({
        resolver: zodResolver(UserEmailSchema)
    })

    const router = useRouter()

    const onSubmit: SubmitHandler<UserEmail> = (data) => {
        console.log(data)
        router.push(`../confirm`)
    }

    return (
        <form 
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='flex justify-between'>
                <label htmlFor="email" className="text-sm font-bold mb-2">
                    Email address
                </label>
                {errors.email && 
                <p className='text-Tomato text-sm font-bold'>
                    {errors.email?.message}
                </p>}
            </div>
            <input 
                {...register('email')}
                type="email" 
                name="email" 
                id="email" 
                placeholder="email@company.com"
                className={`px-4 py-2 border-[1px] border-Grey rounded-lg mb-6
                ${errors.email ? 'bg-Error outline-Tomato outline-1' : ''}`}
            />
            <button 
                className="bg-Dark-Slate-Grey text-White py-2 rounded-lg"
                id="btn-submit"
            >
                Subscribe to the monthly newsletter
            </button> 
        </form>
    )
}
