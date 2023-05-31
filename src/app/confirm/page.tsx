'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"
import IconSuccess from '../../../public/icon-success.svg'

/* 
Trying to figure out a way to get email sent via params.
I could append the email on the end of confirm, but then
I would need another route with a dynamic route I think?
*/
type ConfirmParams = {
    params: {
        email: string
    }
}

export default function Confirm({params: { email }}: ConfirmParams) {
    console.log(email)
    const router = useRouter()
    const handleClick = () => {
        router.push('/')
    }

    return (
        <main className="bg-White rounded-2xl max-w-[504px] px-6 pt-40">
            <Image
                src={IconSuccess}
                alt="white checkmark with vermillion background"
                className="mb-10"
            />
            <hgroup className=" mb-40">
                <h1 className="text-lg font-bold mb-6">
                    Thanks for subscribing!
                </h1>
                <p className="">
                    A confirmation email has been sent to
                    <span className="font-bold"> ash@loremcompany.com</span>. 
                    Please open it and click the button inside to confirm 
                    your subscription.
                </p>
            </hgroup>
            <button 
                className="bg-Dark-Slate-Grey text-White py-2 rounded-lg mb-10 w-full"
                id="btn-submit"
                onClick={handleClick}
            >
                Dismiss Message
            </button> 
        </main>
    )
}
