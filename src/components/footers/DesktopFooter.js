import React from 'react'
import { Container, Row, Col } from 'reactstrap'

// FontAwesome for social  icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' 

export default function DesktopFooter() {
    return (
      <>
        <footer
          className="footer footer-big text-white"
          style={{ backgroundColor: "#000000" }}
        >
          <Container
            style={{
              marginRight: "0px",
              marginLeft: "0px",
              paddingLeft: "5vw",
              paddingRight: "5vw",
              width: "100%",
              position: "relative",
              maxWidth: "100%",
            }}
          >
            <Row>
              <Col>
                <h6 className="mb-4 text-grey">Gypsy, Inc. 2022</h6>
              </Col>
              <Col xs="6">
                <Row>
                  <Col>
                    <h6 className="text-center text-grey-highlight">
                      <a
                        className="text-center text-grey-highlight"
                        href="mailto:hello@gypsy.city"
                      >
                        Contact
                      </a>
                    </h6>
                  </Col>
                  <Col>
                    <h6
                      onClick={() => window.open("https://docs.gypsy.city")}
                      className="text-center text-grey-highlight"
                    >
                      Docs
                    </h6>
                  </Col>
                  <Col>
                    <h6
                      onClick={() => window.open("https://medium.com/gypsy")}
                      className="text-center text-grey-highlight"
                    >
                      Blog
                    </h6>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row style={{ justifyContent: "end" }}>
                  <div>
                    <FontAwesomeIcon icon={brands('linkedin')} />
                    <FontAwesomeIcon icon={brands('instagram')} />
                    <FontAwesomeIcon icon={brands('tiktok')} />
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
  