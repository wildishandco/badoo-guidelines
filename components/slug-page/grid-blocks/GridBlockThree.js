import styled from "styled-components"
import { Image } from "react-datocms"

export const GridThreeStyles = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .grid-block-three-left {
    position: relative;
    flex: 1;
    padding-top: 50vw;
    transition: 0.5s ease flex;
    order: ${(props) => (props.order ? "2" : "1")};
    @media (max-width: 768px) {
      padding-top: 100vw;
    }
    :hover {
      flex: 1.15;
    }
    .grid-block-three-left-inner {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      .grid-block-three-flex {
        flex: 1;
        display: flex;
        transition: 0.5s ease flex;
        flex-direction: column;
        :hover {
          flex: 1.15;
        }
        .grid-block-three-item {
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
  .grid-block-three-right {
    position: relative;
    overflow: hidden;
    flex: 1;
    padding-top: 50vw;
    transition: 0.5s ease flex;
    order: ${(props) => (props.order ? "1" : "2")};
    :hover {
      flex: 1.15;
    }
    .grid-block-three-right-inner {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`

export default function GridBlockThree({ s, left }) {
  return (
    <>
      <GridThreeStyles order={left}>
        <div className="grid-block-three-left">
          <div className="grid-block-three-left-inner">
            <div className="grid-block-three-flex">
              <div className="cloud-nine grid-block-three-item">
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
              <div className="blue grid-block-three-item">
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
          </div>
        </div>
        <div className="grid-block-three-right">
          <div className="grid-block-three-right-inner badoo-purple">
            {s?.content[2]?.image?.responsiveImage && (
              <Image
                className="fill-image"
                data={s?.content[2]?.image?.responsiveImage}
                fadeInDuration={0}
              />
            )}
            {s?.content[2]?.text && (
              <div className="grid-block-text-container">
                <p className="grid-block-text-big bold">
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
        </div>
      </GridThreeStyles>
    </>
  )
}
