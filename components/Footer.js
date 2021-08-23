import styled from "styled-components"
import logoLockup from "../assets/logo-lockup.svg"

const FooterStyles = styled.footer`
  min-height: 50px;
  display: flex;
  padding: 20px;
  justify-content: space-between;
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
`

export default function Footer({ footer }) {
  return (
    <>
      <FooterStyles className="badoo-purple">
        <div className="footer-logos">
          <img
            src={logoLockup}
            style={{ marginRight: 10, marginTop: -5, objectFit: "unset" }}
          />
          <span style={{ whiteSpace: "nowrap" }}>
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
          <p>
            © {new Date().getFullYear()} Bumble |{" "}
            <a
              href="https://www.wildishandco.co.uk"
              target="_blank"
              rel="noopener"
            >
              Site by Wildish & Co.
            </a>
          </p>
        </div>
      </FooterStyles>
    </>
  )
}
