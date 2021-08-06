export const MENU_QUERY = `
   menu: menu {
      menuItems {
        title
        slug
        menuMedia {
          ... on VideoRecord {
            _modelApiKey
            video {
              url
            }
          }
          ... on PhraseRecord {
            _modelApiKey
            phrases
          }
          ... on ImageRecord {
            _modelApiKey
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
        }
      }
    }
`

export const SLUG_QUERY = `
query SlugQuery {
  allPages {
    slug
  }
}
`
export const PAGE_QUERY = `
query PageQuery($slug: String!) {
  ${MENU_QUERY}
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
      ... on StickerClickSectionRecord {
        _modelApiKey
        copy
      }
      ... on TextEditorPhraseRecord {
        _modelApiKey
        phrases
      }
      ... on ColourHierarchySectionRecord {
        _modelApiKey
        copy
      }
      ... on HeroSectionRecord {
        _modelApiKey
        introduction
        colourScheme
          heroMedia {
          url
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
