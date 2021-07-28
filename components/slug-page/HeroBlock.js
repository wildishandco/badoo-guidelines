import styled from "styled-components"
import { classNameMaker } from "../../actions.js/actions"
import SanitisedHtml from "../SanitisedHtml"

const HeroStyles = styled.section``

export default function HeroBlock({ s, title }) {
  const colour = classNameMaker(s?.colourScheme)

  return (
    <>
      <HeroStyles className={`${colour}`}>
        <h1>{title}</h1>
        <SanitisedHtml html={s?.introduction} />
      </HeroStyles>
    </>
  )
}
