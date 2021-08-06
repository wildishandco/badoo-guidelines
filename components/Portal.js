import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const Portal = ({ where, children }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted
    ? createPortal(children, document.getElementById(`portal-${where}`))
    : null
}

export default Portal
