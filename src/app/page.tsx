import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import VideoPlayerComponent from '../../player'
import Head from 'next/head'

export default function Home() {
  return (
    <>

      <Head>
        <title>Pastures</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-25 flex flex-col items-center justify-center text-center">
        <div className='max-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            MVP has been developed! Scroll down to watch a brief demo.
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Connect with your thoughts, experiences and <span className='text-blue-600'> the Word of God</span> as you graze life&apos;s <span className='text-green-700'>pastures.</span>
        </h1>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          Pastures will be a one-stop solution for journalling, learning, and growing. A super-app for your faith.
        </p>

      </MaxWidthWrapper>

      {/* value proposition section*/}
      <div>
        <div className='relative isolate'>
          <div
            aria-hidden="true"
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }} className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    src='/pastures-showcase.png'
                    alt='product preview'
                    width={1364}
                    height={866}
                    quality={100}
                    className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }} className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>

        </div>
      </div>

      {/* Feature section */}
      <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-35'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              A product that adds real, lasting value to lives.
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              Keeping track of your life in this digital age will never been easier than with Pastures.
              There is simply too much that Pastures will be doing, but here are just 3 features as a little sneak peak:
            </p>
          </div>
        </div>

        {/*steps*/}
        <ol className='my-8 space-y-4 pt-4 md:flex md:space-x-12 md:space-y-0'>

          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>Feature 1</span>
              <span className='text-xl font-semibold'>
                Seamless and AI-powered categorization...
              </span>
              <span className='mt-2 text-zinc-700'>
                of journal entries into various life aspects, without user having to manually do so. {' '}
                <Link href='/pricing' className='text-blue-700 underline underline-offset-2'>

                </Link>
              </span>
            </div>
          </li>

          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>Feature 2</span>
              <span className='text-xl font-semibold'>
                Daily, personalized and relevant devotional prompts...
              </span>
              <span className='mt-2 text-zinc-700'>
                that contextualises one's faith by linking user's personal experiences to theoretical learnings about the faith.
              </span>
            </div>
          </li>

          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>Feature 3</span>
              <span className='text-xl font-semibold'>
                Your personal spiritual help-buddy...
              </span>
              <span className='mt-2 text-zinc-700'>
                who does not seek to instruct. Pastures will point out areas in your life that you should be paying closer attention to.
              </span>
            </div>
          </li>
        </ol>

        <div className='mb-12 px-16 lg:px-8 mt-28'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              Demo.
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              An MVP (version 1) has been developed as of Aug 2023, and it offers a mere foretaste of what Pastures will be able to do.
            </p>
          </div>
        </div>

        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-10'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <VideoPlayerComponent />
            </div>
          </div>
        </div>

        <div className='mx-auto mb-32 mt-16 max-w-5xl sm:mt-36'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
                Contact.
              </h2>
              <p className='mt-4 text-lg text-gray-600'>
                Send an email over to find out how you can contribute, invest, or pray for this app.
              </p>
              

              <Link className={buttonVariants({
                size: 'lg',
                className: "mt-5",
              })} href='/dashboard' target='_blank'>
                Email to learn more <ArrowRight className='m1-2 h-5 w-5' />
              </Link>


              <p className='mt-8 text-lg text-gray-600'><em>
                Psalm 23:2 "He makes me lie down in green <span className='text-green-700'>pastures.</span>..."
                </em></p>
            </div>

            
          </div>
        </div>





      </div>
    </>
  )
}
