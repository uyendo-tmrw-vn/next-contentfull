import Head from 'next/head'
import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const res = await client.getEntries({ content_type: "animal" })
  return {
    props: {
      animalList: res.items
    }
  }
}

export default function Home({ animalList }) {
  // const [animalList, setAnimalList] = useState([])

  useEffect(() => {


  }, [])

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <div className='container mx-auto'>

          <div>
            <header className="flex justify-start bg-[#fff]-dark py-4 items-center ">
              <a className="font-bold text-[#000] text-2xl " href="/"><span className="flex flex-col bg-[#fff] w-10 h-10 rounded-full justify-center items-center text-center cursor-pointer ">t</span></a>
              <form className="mr-32 w-1/4 xs:text-base xs:ml-2 xs:mr-1 xs:w-full sm:text-base sm:ml-3 sm:mr-2 sm:w-2/5  md:text-base md:ml-3 md:mr-2 md:w-2/5  lg:text-base lg:ml-4 md:mr-4 lg:w-1/4"><input className="  py-2 focus:shadow-outline font-helvetica outline-none rounded-full ml-5 px-5 font-medium placeholder-gray-400 tracking-wide w-full" type="search" name="search" placeholder="Search timber" aria-label="Search" aria-required="false" /></form>
              <div className="flex flex-grow items-center">
                <div className="xs:hidden sm:hidden md:hidden">
                  <div>
                    <nav>
                      <ul className="flex text-white font-helvetica tracking-wide text-base xs:text-xs sm:text-sm md:text-sm justify-between xs:px-6">
                        <div className="block">
                          <a className="xl:mr-6 sm:mr-8 md:mr-8 mr-4" href="/features">Features</a>
                          <div className="hidden absolute w-48">
                            <div className="mt-4 rounded-tr-base rounded-tl-base bg-gray-50 px-4 py-4 w-full">
                              <div>
                                <div className="block">
                                  <p className="text-gray-500 text-xs font-sans font-semibold false">CODE</p>
                                  <div className="mt-2">
                                    <div className="flex justify-start my-2">
                                      <a className="text-gray-700 text-base-14 hover:text-brand" href="/features/code-review"> Code Review</a>
                                      <span className="flex rounded-full align-baseline items-center justify-center bg-red-200 px-1 ml-auto rounded-sm">
                                        <p className="text-red-600 text-xs-10 font-sans font-bold px-1">NEW</p>
                                      </span>
                                    </div>
                                    <div className="flex justify-start my-2"><a className="text-gray-700 text-base-14 hover:text-brand" href="/features/project-management"> Project management</a></div>
                                    <div className="flex justify-start my-2"><a className="text-gray-700 text-base-14 hover:text-brand" href="/features/integration"> Integration</a></div>
                                    <div className="flex justify-start my-2"><a className="text-gray-700 text-base-14 hover:text-brand" href="/features/hosting"> Hosting</a></div>
                                  </div>
                                </div>
                                <div className="block">
                                  <p className="text-gray-500 text-xs font-sans font-semibold mt-6">TEAM</p>
                                  <div className="mt-2">
                                    <div className="flex justify-start my-2">
                                      <a className="text-gray-700 text-base-14 hover:text-brand" href="/features/discussion"> Discussion</a>
                                      <span className="flex rounded-full align-baseline items-center justify-center bg-red-200 px-1 ml-auto rounded-sm">
                                        <p className="text-red-600 text-xs-10 font-sans font-bold px-1">NEW</p>
                                      </span>
                                    </div>
                                    <div className="flex justify-start my-2"><a className="text-gray-700 text-base-14 hover:text-brand" href="/features/question-answer"> Q&amp;A</a></div>
                                    <div className="flex justify-start my-2"><a className="text-gray-700 text-base-14 hover:text-brand" href="/features/team-management"> Team management</a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <a href="/features/request-feature"><input className="w-26 py-2 text-base rounded-base mr-5 bg-brand outline-none font-helvetica text-white tracking-wider cursor-pointer focus:shadow-outline rounded-tr-none rounded-tl-none text-xs w-full" type="submit" defaultValue="Request" /></a>
                          </div>
                        </div>
                        <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4"><a href="/products"> Products</a></li>
                        <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4"><a href="/customers">Customers</a></li>
                        <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4"><a href="/sales">Sales</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="flex xs:hidden items-center ml-auto"><a className="mr-5" href="/signup"><input className="w-26 py-2 text-base rounded-base mr-5 bg-brand outline-none font-helvetica text-white tracking-wider cursor-pointer focus:shadow-outline" type="button" defaultValue="Sign up" /></a><a className="text-white font-helvetica text-base-14 font-medium tracking-wider" href="/login">Login</a></div>
              </div>
            </header>
          </div>


          <h1 className='text-center text-[3rem]'>Demo for call api from Contentful</h1>
          <ul className='flex mt-[2rem]'>
            {
              animalList && animalList.length > 0 ? animalList.map((item, index) => {
                return (
                  <li key={index} className="flex mb-[10px] bg-[grey] rounded-[10px] overflow-hidden mr-[10px]">
                    <figure className='max-w-[80px] bg-[#fff] rounded-[10px] overflow-hidden'>
                      {
                        item.fields.picture && item.fields.picture.map((itemPic, indexPic) => {
                          return (
                            <img className='h-full w-auto' key={indexPic} alt={itemPic.fields.file.title} src={itemPic.fields.file.url} />
                          )
                        })
                      }
                    </figure>
                    <div className='flex flex-col p-[10px] min-w-[150px]'>
                      <a className='underline' href={'animal/' + item.fields.slug}>{item.fields.name}</a>
                      <p>{item.fields.description}</p>
                    </div>
                  </li>
                )
              }) : ''
            }
          </ul>
        </div>
      </main>
    </>
  )
}
