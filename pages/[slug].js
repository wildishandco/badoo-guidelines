import SideNavigation from "../components/SideNavigation"
import Slices from "../components/slug-page/Slices"
import Portal from "../components/Portal"
import { request } from "../lib/datocms"

export default function ContentPages({ page }) {
  return (
    <>
      <Slices data={page[0]?.content} title={page[0]?.title} />
      <Portal>
        <SideNavigation
          previous={page[0]?.previousPage}
          next={page[0]?.nextPage}
        />
      </Portal>
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
    nextPage {
      title
      slug
      content {
        ... on HeroSectionRecord {
          colourScheme
        }
      }
    }
    previousPage {
      title
      slug
      content {
        ... on HeroSectionRecord {
          colourScheme
        }
      }
    }
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
      ... on GridBlockRecord {
        _modelApiKey
        gridBlock {
          ... on GridBlockFiveRecord {
            _modelApiKey
            content {
              ... on ImageRecord {
                image {
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
              ... on TextRecord {
                text
              }
              ... on VideoRecord {
                video {
                  url
                }
              }
            }
          }
          ... on GridBlockThreeRecord {
            _modelApiKey
            content {
              ... on ImageRecord {
                image {
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
              ... on TextRecord {
                text
              }
              ... on VideoRecord {
                video {
                  url
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
