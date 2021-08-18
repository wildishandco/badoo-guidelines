import Portal from "./Portal"
import Menu from "./menu/Menu"
import Footer from "./Footer"

export default function Layout({ menu, children }) {
  return (
    <>
      <Portal where="menu">{menu && <Menu menu={menu} />}</Portal>
      {children}
    </>
  )
}
