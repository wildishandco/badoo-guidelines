import styled from "styled-components"
import { classNameMaker } from "../../actions/actions"
import SanitisedHtml from "../SanitisedHtml"

const StyledHtml = styled(SanitisedHtml)`
  min-height: 100vh;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 50px;
  max-width: 1300px;
  @media (max-width: 768px) {
    display: block;
    padding: 50px 30px;
    min-height: unset;
  }
  * {
    grid-column: 2 / span 1;
  }
  *:nth-child(2) {
    grid-column: 1 / span 1;
  }
  *:first-child {
    grid-column: 1 / span 2;
    align-self: end;
  }
  *:not(:last-child) {
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }
`

export default function CopyBlock({ s }) {
  const colour = classNameMaker(s?.colourScheme)
  return (
    <>
      <div className={`${colour}`}>
        <StyledHtml html={s?.copy} />
      </div>
    </>
  )
}
