import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Head>
        <title>SpacedOut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <section className="">
          <div className="">
            <div className="">
              <div className="">
                <h2 className="">
                  Notus React - A beautiful extension for Tailwind CSS.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Notus React is Free and Open Source. It does not change any of
                  the CSS from{" "}
                  <a
                    href="https://tailwindcss.com/?ref=creativetim"
                    className=""
                    target="_blank"
                  >
                    Tailwind CSS
                  </a>
                  . It features multiple HTML elements and it comes with dynamic
                  components for ReactJS, Vue and Angular.
                </p>
                <div className="mt-12">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                    target="_blank"
                    className=""
                  >
                    Get started
                  </a>
                  <a
                    href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                    className=""
                    target="_blank"
                  >
                    Github Star
                  </a>
                </div>
              </div>
            </div>
          </div>

          <img
            className=""
            src="so-example.png"
            alt="..."
          />
        </section>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <img src="/spacedout-logo.svg" alt="SpacedOut Logo" className="h-20 ml-2" />
      </footer>
    </div>
  )
}
