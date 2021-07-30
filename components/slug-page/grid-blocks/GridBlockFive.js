import styled from "styled-components"
import { Image } from "react-datocms"

const GridFiveStyles = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  .left-flex-five {
    display: flex;
    flex-direction: column;
    flex: 1;
    transition: 0.5s ease all;
    :hover {
      flex: 1.2;
    }
    .left-flex-top-row,
    .left-flex-bottom-row {
      display: flex;
      height: 50%;
      flex: 1;
      transition: 0.5s ease all;
      :hover {
        flex: 1.2;
      }
      .one,
      .two,
      .three,
      .four {
        width: 50%;
        flex: 1;
        transition: 0.5s ease all;
        position: relative;
        overflow: hidden;
        :hover {
          flex: 1.2;
        }
      }
    }
  }
  .right-flex-five {
    flex: 1;
    transition: 0.5s ease all;
    :hover {
      flex: 1.2;
    }
    .five {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
  }
`

export default function GridBlockFive({ s }) {
  return (
    <>
      <GridFiveStyles>
        <div className="left-flex-five">
          <div className="left-flex-top-row">
            <div className="one">
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
            <div className="two">
              {s?.content[1]?.image?.responsiveImage && (
                <Image
                  className="fill-image"
                  data={s?.content[1]?.image?.responsiveImage}
                  fadeInDuration={100}
                />
              )}
              {s?.content[1]?.text && (
                <p className="grid-block-text">{s?.content[1]?.text}</p>
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
          </div>
          <div className="left-flex-bottom-row">
            <div className="three">
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
            <div className="four">
              {s?.content[3]?.image?.responsiveImage && (
                <Image
                  className="fill-image"
                  data={s?.content[3]?.image?.responsiveImage}
                  fadeInDuration={100}
                />
              )}
              {s?.content[3]?.text && (
                <p className="grid-block-text">{s?.content[3]?.text}</p>
              )}
              {s?.content[3]?.video?.url && (
                <video
                  className="fill-video"
                  src={s?.content[3]?.video?.url}
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              )}
            </div>
          </div>
        </div>
        <div className="right-flex-five">
          <div className="five">
            {s?.content[4]?.image?.responsiveImage && (
              <Image
                className="fill-image"
                data={s?.content[4]?.image?.responsiveImage}
                fadeInDuration={100}
              />
            )}
            {s?.content[4]?.text && (
              <p className="grid-block-text">{s?.content[4]?.text}</p>
            )}
            {s?.content[4]?.video?.url && (
              <video
                className="fill-video"
                src={s?.content[4]?.video?.url}
                muted
                loop
                autoPlay
                playsInline
              />
            )}
          </div>
        </div>
      </GridFiveStyles>
    </>
  )
}
