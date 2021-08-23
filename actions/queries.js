export const MENU_QUERY = `
   menu: menu {
      googleLink
      menuInfo
      appleLink
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

export const FOOTER_QUERY = `
  footer {
    links {
      link
      text
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

export const CONTENT_QUERY = `
content {
      ... on StickerClickSectionRecord {
        _modelApiKey
        copy
      }
      ... on CopyRecord {
        _modelApiKey
        copy
        colourScheme
      }
      ... on VocabularyConversationRecord {
        _modelApiKey
        conversations
        copy
      }
      ... on InterviewSectionRecord {
        _modelApiKey
        interviews {
          title
          introduction
          heroImage {
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
          content
        }
      }
      ... on TypographyGridSectionRecord {
        _modelApiKey
        rightImages {
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
          url
        }
      }
            ... on StickerGridSectionRecord {
        _modelApiKey
        stickers {
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
      ... on FullBleedImageRecord {
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
            ... on HompageHeroRecord {
        _modelApiKey
        colourScheme
        text
      }
      ... on ColourHoverSectionRecord {
        _modelApiKey
        colourData
      }
      ... on SlidingTextSectionRecord {
        _modelApiKey
        text
        colourScheme
      }
      ... on BuildingImageTextSectionRecord {
        _modelApiKey
        colourScheme
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
      ... on LogoColourScrollRecord {
        _modelApiKey
        show
      }
      ... on ColourLogoClickSectionRecord {
        _modelApiKey
        colourData
      }
      ... on GridBlockRecord {
        _modelApiKey
        bigImageOnTheLeft
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
    }`

export const SEO_QUERY = `
   seo: _seoMetaTags {
      tag
      content
      attributes
    }    
`

export const PAGE_QUERY = `
query PageQuery($slug: String!) {
  ${MENU_QUERY}
  ${FOOTER_QUERY}
  page: allPages(filter: {slug: {eq: $slug}}) {
    ${SEO_QUERY}
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
    ${CONTENT_QUERY}
  }
}
`

export const HOME_QUERY = `
query HomeQuery {
  ${MENU_QUERY}
  ${FOOTER_QUERY}
  homepage {
      ${SEO_QUERY}
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
    ${CONTENT_QUERY}
  }
}

`
