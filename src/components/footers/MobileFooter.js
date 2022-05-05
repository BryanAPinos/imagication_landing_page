import React from "react";
import { Container, Row } from "reactstrap";
import footerBackgroundColor from "assets/Colors";

// FontAwesome for social  icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' 

export default function MobileFooter() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  return (
    <>
      <footer
        className="footer footer-big text-white"
        style={{ backgroundColor: {footerBackgroundColor} }}
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
          <Row
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <h4 className="mb-4 text-white text-center">Gypsy, Inc. 2022</h4>
          </Row>
          <Row
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              <h6 className="text-center text-grey-highlight">
                <a
                  className="text-center text-grey-highlight"
                  href="mailto:hello@gypsy.city"
                >
                  Contact
                </a>
              </h6>
            </div>
            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              <h6
                onClick={() => window.open("https://docs.gypsy.city")}
                className="text-center text-grey-highlight"
              >
                Docs
              </h6>
            </div>
            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              <h6
                onClick={() => window.open("https://medium.com/gypsy")}
                className="text-center text-grey-highlight"
              >
                Blog
              </h6>
            </div>
          </Row>
          <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <FontAwesomeIcon icon={brands('linkedin')} />      
            </div>
            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <FontAwesomeIcon icon={brands('instagram')} />      
            </div>
            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <FontAwesomeIcon icon={brands('tiktok')} />      
            </div>
            
          </Row>
        </Container>
      </footer>
    </>
  );
}
