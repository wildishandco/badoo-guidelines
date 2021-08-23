import SideNavigation from "../components/SideNavigation"
import Slices from "../components/slug-page/Slices"
import Portal from "../components/Portal"
import { request } from "../lib/datocms"
import { HOME_QUERY } from "../actions/queries"

export default function Home({ homepage, loader }) {
  return (
    <>
      <Slices data={homepage?.content} loader={loader} />
      <Portal where="side">
        <SideNavigation
          previous={homepage?.previousPage}
          next={homepage?.nextPage}
        />
      </Portal>
    </>
  )
}

export async function getStaticProps() {
  const data = await request({
    query: HOME_QUERY,
  })

  return {
    props: data,
  }
}
