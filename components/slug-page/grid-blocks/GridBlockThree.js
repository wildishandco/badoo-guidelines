import styled from "styled-components"
import { Image } from "react-datocms"

const GridThreeStyles = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  .left-flex {
    flex: 1;
    transition: 0.5s ease all;
    :hover {
      flex: 1.2;
    }
    .one {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
  }
  .right-flex {
    display: flex;
    flex-direction: column;
    flex: 1;
    transition: 0.5s ease all;
    :hover {
      flex: 1.2;
    }
    .two,
    .three {
      width: 100%;
      flex: 1;
      transition: 0.5s ease all;
      position: relative;
      overflow: hidden;
      :hover {
        flex: 1.2;
      }
    }
  }
`

export default function GridBlockThree({ s }) {
  return (
    <>
      <GridThreeStyles>
        <div className="left-flex">
          <div className="one badoo-purple">
            {s?.content[0]?.image?.responsiveImage && (
              <Image
                className="fill-image"
                data={s?.content[0]?.image?.responsiveImage}
                fadeInDuration={100}
              />
            )}
            {s?.content[0]?.text && (
              <p className="grid-block-text">{s?.content[0]?.text}</p>
            )}
            {s?.content[0]?.video?.url && (
              <video
                className="fill-video"
                src={s?.content[0]?.video?.url}
                muted
                loop
                autoPlay
                playsInline
              />
            )}
          </div>
        </div>
        <div className="right-flex">
          <div className="two hot-pink">
            {s?.content[1]?.image?.responsiveImage && (
              <Image
                className="fill-image"
                data={s?.content[1]?.image?.responsiveImage}
                fadeInDuration={100}
              />
            )}
            {s?.content[1]?.text && (
              <div className="grid-block-text-container">
                <p className="grid-block-text">{s?.content[1]?.text}</p>
              </div>
            )}
            {s?.content[1]?.video?.url && (
              <video
                className="fill-video"
                src={s?.content[1]?.video?.url}
                muted
                loop
                autoPlay
                playsInline
              />
            )}
          </div>
          <div className="three violet">
            {s?.content[2]?.image?.responsiveImage && (
              <Image
                className="fill-image"
                data={s?.content[2]?.image?.responsiveImage}
                fadeInDuration={100}
              />
            )}
            {s?.content[2]?.text && (
              <p className="grid-block-text">{s?.content[2]?.text}</p>
            )}
            {s?.content[2]?.video?.url && (
              <video
                className="fill-video"
                src={s?.content[2]?.video?.url}
                muted
                loop
                autoPlay
                playsInline
              />
            )}
          </div>
        </div>
      </GridThreeStyles>
    </>
  )
}
