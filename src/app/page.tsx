import Logo from "./components/Logo"
import Cta from "./components/Cta"
import Info from "./components/Info"
import Form from "./components/Form"

export default function Home() {
  return (
    <main className="bg-White rounded-2xl max-w-[928px] md:flex">
      <Logo />
      <section className="mx-6 my-10 md:w-[40%]">
        <Cta />
        <Info />
        <Form />
      </section>
    </main>
  )
}
