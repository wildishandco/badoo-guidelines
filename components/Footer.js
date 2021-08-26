import React from "react"
import styled from "styled-components"
import logo from "../assets/badoo-full-logo-blush.svg"
import apple from "../assets/app-store.svg"
import google from "../assets/google-play-badge.svg"
import { ChevronDown } from "@styled-icons/fluentui-system-regular/ChevronDown"

const FooterStyles = styled.footer`
  width: 100%;
  .footer-inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1300px;
    margin: auto;
    min-height: 50px;
    padding: 20px;
    font-size: 0.8rem;
    @media (max-width: 768px) {
      padding: 20px 60px;
      flex-direction: column;
    }
    @media (max-width: 480px) {
      padding: 20px;
    }

    .footer-logos {
      flex: 1;
      img {
        max-width: 100px;
        margin-top: -5px;
        object-fit: unset;
      }
    }
    > *:not(:last-child) {
      margin-right: 20px;
      @media (max-width: 768px) {
        margin-right: 0px;
        margin-bottom: 20px;
      }
    }
    .footer-links {
      a:not(:last-child) {
        margin-right: 20px;
      }
    }
    a {
      text-decoration: none;
    }
  }
  .footer-divider {
    display: inline-block;
    width: 1px;
    height: 18px;
    background: var(--blush);
    margin: 0 10px -5px 10px;
  }
  .footer-nowrap {
    white-space: nowrap;
    @media (max-width: 400px) {
      white-space: unset;
    }
  }
`

const TopFooterStyles = styled.footer`
  width: 100%;
  background: var(--violet);
  color: #fff;
  .top-footer-inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1300px;
    margin: auto;
    min-height: 50px;
    padding: 50px 20px;
    font-size: 1rem;
    @media (max-width: 768px) {
      padding: 20px 60px;
      flex-direction: column;
    }
    .top-footer-div {
      flex: 1;
      &:not(:last-child) {
        @media (max-width: 768px) {
          margin-bottom: 20px;
        }
      }
      a {
        text-decoration: none;
        display: inline-block;
        margin-bottom: 5px;
      }
    }
    .top-footer-middle-links {
      display: flex;
      flex: 1.5;
    }
    .top-footer-account-buttons {
      a {
        padding: 15px 20px;
        border: #fff 1px solid;
        border-radius: 30px;
        width: 200px;
        transition: 0.3s ease;
        .down-chevron {
          width: 20px;
          float: right;
          fill: #fff;
        }
        :hover {
          background: #fff;
          color: var(--violet);
          .down-chevron {
            fill: var(--violet);
          }
        }
      }
      .top-footer-create-button {
        background: #fff;
        color: var(--violet);
        margin-bottom: 20px;
        text-align: center;
        :hover {
          background: var(--violet);
          color: #fff;
        }
      }
    }
    .top-footer-app-buttons-flex {
      display: flex;
      img {
        height: 38px;
        &:first-child {
          margin-right: 10px;
        }
      }
    }
  }
  .top-footer-title {
    font-variation-settings: "wght" 700;
    margin-bottom: 10px;
  }
`

export default function Footer({ footer, menu }) {
  const [langClick, setLangClick] = React.useState(false)

  return (
    <>
      <TopFooterStyles>
        <div className="top-footer-inner">
          <div className="top-footer-account-buttons top-footer-div">
            {footer?.createAccountButtonText && (
              <>
                <a
                  className="top-footer-create-button"
                  href={footer?.createAccountButtonLink}
                >
                  {footer?.createAccountButtonText}
                </a>
                <br />
              </>
            )}
            <div className="top-footer-language-select">
              {footer?.languageLinks?.map((l, i) => {
                return (
                  <React.Fragment key={i}>
                    <a href={l?.link} target="_blank" rel="noopener">
                      {l?.text}{" "}
                      <span className="down-chevron">
                        <svg viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M8.37 16.12a1.25 1.25 0 0 0 0 1.76l14.75 14.75c.48.5 1.28.5 1.76 0l14.75-14.75a1.25 1.25 0 0 0-1.76-1.76L24 29.98 10.13 16.12a1.25 1.25 0 0 0-1.76 0z"></path>
                        </svg>
                      </span>
                    </a>
                  </React.Fragment>
                )
              })}
            </div>
          </div>
          <div className="top-footer-middle-links">
            <div className="top-footer-general top-footer-div">
              <p className="top-footer-title">General</p>
              {footer?.generalLinks?.map((l, i) => {
                return (
                  <React.Fragment key={i}>
                    <a href={l?.link} target="_blank" rel="noopener">
                      {l?.text}
                    </a>
                    <br />
                  </React.Fragment>
                )
              })}
            </div>
            <div className="top-footer-social top-footer-div">
              <p className="top-footer-title">Follow</p>
              {footer?.socialLinks?.map((l, i) => {
                return (
                  <React.Fragment key={i}>
                    <a href={l?.link} target="_blank" rel="noopener">
                      {l?.text}
                    </a>
                    <br />
                  </React.Fragment>
                )
              })}
            </div>
          </div>
          <div className="top-footer-app-buttons top-footer-div">
            <p className="top-footer-title">Get the app</p>
            <div className="top-footer-app-buttons-flex">
              <a href={menu?.googleLink}>
                <img
                  style={{ objectFit: "unset" }}
                  src={google}
                  alt="google play store"
                />
              </a>
              <a href={menu?.appleLink}>
                <img
                  style={{ objectFit: "unset" }}
                  src={apple}
                  alt="apple app store"
                />
              </a>
            </div>
          </div>
        </div>
      </TopFooterStyles>

      <FooterStyles className="badoo-purple">
        <div className="footer-inner">
          <div className="footer-logos">
            <span className="footer-nowrap">
              <a href="https://badoo.com">
                <img src={logo} alt="badoo-logo" />
              </a>
              <span className="footer-divider" />
              Proudly part of Bumble Inc.
            </span>
          </div>
          <div className="footer-links">
            {footer?.links?.map((f, i) => {
              return (
                <a key={i} href={f?.link} target="_blank" rel="noopener">
                  {f?.text}
                </a>
              )
            })}
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Bumble All Rights Reserved
            <span className="footer-divider" />
            <a
              href="https://www.wildishandco.co.uk"
              target="_blank"
              rel="noopener"
            >
              Site by Wildish & Co.
            </a>
          </div>
        </div>
      </FooterStyles>
    </>
  )
}
