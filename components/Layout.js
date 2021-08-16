import Portal from "./Portal"
import Menu from "./menu/Menu"

export default function Layout({ menu, children }) {
  return (
    <>
      <Portal where="menu">{menu && <Menu menu={menu} />}</Portal>
      {children}
    </>
  )
}
