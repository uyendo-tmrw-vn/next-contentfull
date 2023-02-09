import { createClient } from "contentful";

var client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export default function ProductPage(props) {
  console.log(props)
  if (props.error) {
    return (
      <div>
        <h1>An Error occurred: </h1>
        <h2>{props.error}</h2>
      </div>
    )
  }

  return (
    <div className="text-center mt-[30px]">
      <h1 className="text-[2.5rem]">{props.name}</h1>
      <h2 className="text-[1.5rem]">{props.description}</h2>
      <figure className="text-center">
        {
          props.picture && props.picture.map((item, index) => {
            return (
              <img className="mx-auto" key={index} src={item.fields.file.url} />
            )
          })
        }
      </figure>
    </div>
  )
}

export async function getStaticPaths() {
  const products = await client.getEntries({
    content_type: 'animal',
  })
  // console.log({ products });
  const paths = products.items.map(product => (console.log(11, product), {
    params: { slug: product.fields.id.toString() }
  }))

  console.log("paths: ", paths)

  return {
    fallback: false,
    paths,
  }
}

export async function getStaticProps({ params }) {
  // Get data from headless CMS
  const product = await client.getEntries({
    content_type: 'animal',
    limit: 1,
  })

  const post = product.items;

  return {
    props: {
      post,
      error: !product.items.length
        && `No product with id: ${params.slug}`,
      ...product?.items?.[0]?.fields
    },
  }
}
