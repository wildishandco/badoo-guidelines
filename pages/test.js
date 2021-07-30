import styled from "styled-components"

const GridStyles = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  .left-flex {
    display: flex;
    flex-direction: column;
    flex: 1;
    transition: 0.5s ease all;
    :hover {
      flex: 1.5;
    }
    .one {
      background: blue;
      width: 100%;
      flex: 1;
      transition: 0.5s ease all;
      :hover {
        flex: 1.5;
      }
    }
    .two {
      background: red;
      width: 100%;
      flex: 1;
      transition: 0.5s ease all;
      :hover {
        flex: 1.5;
      }
    }
  }
  .right-flex {
    flex: 1;
    transition: 0.5s ease all;
    :hover {
      flex: 1.5;
    }
    .three {
      background: green;
      width: 100%;
      height: 100%;
    }
  }
`

const GridStylesAlt = styled.div`

`

export default function TestPage() {
  return (
    <>
      <GridStyles>
        <div className="left-flex">
          <div className="one"></div>
          <div className="two"></div>
        </div>
        <div className="right-flex">
          <div className="three"></div>
        </div>
      </GridStyles>
    </>
  )
}
