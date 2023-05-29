import Image from "next/image"
import SignUpMobile from '../../../public/illustration-sign-up-mobile.svg'
import SignUpDesktop from '../../../public/illustration-sign-up-mobile.svg'

export default function Logo() {
  return (
    <section className="md:order-2 md:p-6 md:w-[60%]">
        <Image
          src={SignUpMobile}
          alt="red-orange background with a chart and score displayed on top"
          className="max-w-full rounded-2xl md:hidden"
        />
        <Image
          src={SignUpDesktop}
          alt="red-orange background with a chart and score displayed on top"
          className="hidden min-w-full min-h-full rounded-2xl object-cover md:block"
        />
    </section>
  )
}
