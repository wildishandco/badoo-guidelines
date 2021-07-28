import Link from "next/link"
import Slices from "../components/slug-page/Slices"
import { request } from "../lib/datocms"

export default function ContentPages({ page }) {
  return (
    <>
      <Slices data={page[0]?.content} title={page[0]?.title} />
      <Link href="/">Go</Link>
    </>
  )
}

const SLUG_QUERY = `
query SlugQuery {
  allPages {
    slug
  }
}
`
const PAGE_QUERY = `
query PageQuery($slug: String!) {
  page: allPages(filter: {slug: {eq: $slug}}) {
    title
    content {
      ... on TextEditorPhraseRecord {
        _modelApiKey
        phrases
      }
      ... on HeroSectionRecord {
        _modelApiKey
        introduction
        colourScheme
      }
      ... on ColourHoverSectionRecord {
        _modelApiKey
        colourData
      }
      ... on BuildingImageTextSectionRecord {
        _modelApiKey
        content {
          value
          links {
            __typename
            ... on GalleryRecord {
              id
              gallery {
                responsiveImage(imgixParams: {auto: format, fit: crop}) {
                  src
                  title
                  alt
                  base64
                  bgColor
                  width
                  height
                  aspectRatio
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export async function getStaticProps({ params }) {
  const { slug } = params

  const data = await request({
    query: PAGE_QUERY,
    variables: { slug },
  })

  return {
    props: data,
  }
}

export async function getStaticPaths() {
  const results = await request({
    query: SLUG_QUERY,
  })

  const paths = results.allPages.map((slug) => ({
    params: {
      slug: slug.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
