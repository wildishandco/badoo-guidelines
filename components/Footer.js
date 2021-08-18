import styled from "styled-components"

const FooterStyles = styled.footer`
  min-height: 50px;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  font-size: 0.8rem;
  *:not(:last-child) {
    margin-right: 20px;
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
        <div className="footer-logos">Proudly part of Bumble Inc.</div>
        <div className="footer-links">
          {footer?.links?.map((f, i) => {
            return (
              <a href={f?.link} target="_blank" rel="noopener">
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
