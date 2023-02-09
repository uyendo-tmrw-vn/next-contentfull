import { createClient } from "contentful";
import Link from 'next/link';

var client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export default function ProductPage({ posts }) {
  return (
    <div className="flex flex-wrap">
      {
        posts?.map((item, index) => {
          return (
            <div key={index} className="flex-1 text-center mt-[30px] border-[1px] border-[#000] mx-[5px] flex flex-col mb-[10px] rounded-[10px] overflow-hidden mr-[10px]">
              <figure className="text-center h-[55%] flex items-center overflow-hidden">
                {
                  item.fields.picture && item.fields.picture.map((itemN, indexN) => {
                    return (
                      <img className="mx-auto" key={indexN} src={itemN.fields.file.url} />
                    )
                  })
                }
              </figure>
              <Link href={'/product/' + item.fields.id}>
                <h1 className="text-[2.5rem]">{item.fields.name}</h1>
                <h2 className="text-[1.5rem]">{item.fields.description}</h2>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export async function getStaticProps({ params }) {
  // Get data from headless CMS
  const product = await client.getEntries({
    content_type: 'animal',
  })

  const posts = product.items;

  return {
    props: {
      posts,
    },
  }
}
