import SideNavigation from "../components/SideNavigation"
import Slices from "../components/slug-page/Slices"
import Portal from "../components/Portal"
import { request } from "../lib/datocms"
import { PAGE_QUERY, SLUG_QUERY } from "../actions.js/queries"

export default function ContentPages({ page, menu, menuOpen, setMenuOpen }) {
  return (
    <>
      <Slices data={page[0]?.content} title={page[0]?.title} />
      <Portal where="side">
        <SideNavigation
          previous={page[0]?.previousPage}
          next={page[0]?.nextPage}
        />
      </Portal>
    </>
  )
}

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
