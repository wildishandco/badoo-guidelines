import styled from "styled-components"
import { Image } from "react-datocms"

const GridFiveStyles = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .grid-block-five-left {
    position: relative;
    flex: 1;
    padding-top: 50vw;
    transition: 0.5s ease flex;
    order: ${(props) => (props.order ? "2" : "1")};
    :hover {
      flex: 1.15;
    }
    @media (max-width: 500px) {
      padding-top: 100vh;
    }
    .grid-block-five-left-inner {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;

      .grid-block-five-left-top,
      .grid-block-five-left-bottom {
        flex: 1;
        display: flex;
        transition: 0.5s ease flex;
        @media (max-width: 500px) {
          flex-direction: column;
        }
        :hover {
          flex: 1.15;
        }
        .grid-block-five-item {
          position: relative;
          overflow: hidden;
          flex: 1;
          transition: 0.5s ease flex;
          :hover {
            flex: 1.15;
          }
        }
      }
    }
  }
  .grid-block-five-right {
    position: relative;
    overflow: hidden;
    flex: 1;
    padding-top: 50vw;
    transition: 0.5s ease flex;
    order: ${(props) => (props.order ? "1" : "2")};
    :hover {
      flex: 1.15;
    }
    .grid-block-five-right-inner {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`

export default function GridBlockFive({ s }) {
  return (
    <>
      <GridFiveStyles>
        <div className="grid-block-five-left">
          <div className="grid-block-five-left-inner">
            <div className="grid-block-five-left-top">
              <div className="hot-pink grid-block-five-item">
                {s?.content[0]?.image?.responsiveImage && (
                  <Image
                    className="fill-image"
                    data={s?.content[0]?.image?.responsiveImage}
                    fadeInDuration={0}
                  />
                )}
                {s?.content[0]?.text && (
                  <div className="grid-block-text-container">
                    <p className="grid-block-text bold">
                      {s?.content[0]?.text}
                    </p>
                  </div>
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
              <div className="lilac grid-block-five-item">
                {s?.content[1]?.image?.responsiveImage && (
                  <Image
                    className="fill-image"
                    data={s?.content[1]?.image?.responsiveImage}
                    fadeInDuration={0}
                  />
                )}
                {s?.content[1]?.text && (
                  <div className="grid-block-text-container">
                    <p className="grid-block-text bold">
                      {s?.content[1]?.text}
                    </p>
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
            </div>
            <div className="grid-block-five-left-bottom">
              <div className="blush grid-block-five-item">
                {s?.content[2]?.image?.responsiveImage && (
                  <Image
                    className="fill-image"
                    data={s?.content[2]?.image?.responsiveImage}
                    fadeInDuration={0}
                  />
                )}
                {s?.content[2]?.text && (
                  <div className="grid-block-text-container">
                    <p className="grid-block-text bold">
                      {s?.content[2]?.text}
                    </p>
                  </div>
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
              <div className="champagne grid-block-five-item">
                {s?.content[3]?.image?.responsiveImage && (
                  <Image
                    className="fill-image"
                    data={s?.content[3]?.image?.responsiveImage}
                    fadeInDuration={2}
                  />
                )}
                {s?.content[3]?.text && (
                  <div className="grid-block-text-container">
                    <p className="grid-block-text bold">
                      {s?.content[3]?.text}
                    </p>
                  </div>
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
        </div>
        <div className="grid-block-five-right">
          <div className="grid-block-five-right-inner violet">
            {s?.content[4]?.image?.responsiveImage && (
              <Image
                className="fill-image"
                data={s?.content[4]?.image?.responsiveImage}
                fadeInDuration={0}
              />
            )}
            {s?.content[4]?.text && (
              <div className="grid-block-text-container">
                <p className="grid-block-text-big bold">{s?.content[4]?.text}</p>
              </div>
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
