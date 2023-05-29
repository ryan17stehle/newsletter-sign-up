import Image from "next/image"
import SignUpMobile from '../../public/illustration-sign-up-mobile.svg'
import SignUpDesktop from '../../public/illustration-sign-up-mobile.svg'

export default function Home() {
  return (
    <main className="bg-White rounded-2xl max-w-[928px] md:flex">

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

      <section className="mx-6 my-10 md:w-[40%]">

        <hgroup>
          <h1 className="text-lg font-bold mb-6">
            Stay updated!
          </h1>
          <p className="mb-6">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
        </hgroup>

        <ul className="pl-7 mb-10">
          <li className=" list-image-check">Product discovery and building what matters</li>
          <li className=" list-image-check">Measuring to ensure updates are a success</li>
          <li className=" list-image-check">And much more!</li>
        </ul>

        <form className="flex flex-col">
          <label htmlFor="email" className="text-sm font-bold mb-2">Email address</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="email@company.com"
            className="px-4 py-2 border-[1px] border-Grey rounded-lg mb-6"
          />
          <button className="bg-Dark-Slate-Grey text-White py-2 rounded-lg">
            Subscribe to the monthly newsletter
          </button> 
        </form>

      </section>
    </main>
  )
}
