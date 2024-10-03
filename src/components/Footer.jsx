import x from "../assets/x.svg";
import at from "../assets/@.svg";
import i from "../assets/in.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <img
            sizes="100vw"
            srcset="https://framerusercontent.com/images/zCr8XonI7K72G6goRgxdlu3H8k.png?scale-down-to=512 512w,https://framerusercontent.com/images/zCr8XonI7K72G6goRgxdlu3H8k.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/zCr8XonI7K72G6goRgxdlu3H8k.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/zCr8XonI7K72G6goRgxdlu3H8k.png 2456w"
            src="https://framerusercontent.com/images/zCr8XonI7K72G6goRgxdlu3H8k.png?scale-down-to=2048"
            alt=""
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
              objectPosition: "center",
              objectFit: "cover",
            }}
          />
        </div>
        <div>
          <div
            style={{ maxWidth: "1200px", width: "100%", textAlign: "center" }}
          >
            {window.innerWidth >= 800 ? (
              <>
                <h3 className="heading3">
                  I guess all I'm trying to say is you
                </h3>
                <h3 className="heading3">should smash the damn button.</h3>
              </>
            ) : (
              <h3 className="heading3">
                I guess all I'm trying to say is you should smash the damn
                button.
              </h3>
            )}
          </div>
        </div>

        <div className="smash-div">
          <div className="smash-container">
            <span className="smash-text">Smash the damn button</span>
            <div
              style={{
                // width: "100%",
                // height: "100%",
                aspectRatio: "inherit",
              }}
            >
              <svg
                viewBox="0 0 34 28"
                preserveAspectRatio="none"
                // width="100%"
                // height="100%"
              >
                <use href="#svg-1266080117_1709"></use>
              </svg>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: "none",
            height: "auto",
            width: "auto",
            position: "relative",
          }}
        >
          <div
            style={{
              fontFamily: '"Manrope", sans-serif',
              fontSize: "18px",
              fontWeight: "400",
              color: "#737373",
              marginTop: "-20px",
            }}
          >
            Be quick! Spots are almost gone for October
          </div>
        </div>

        <div className="supafast-footer">
          <div>
            <div className="logo">
              {/* <div className="svgContainer">
                <svg>
                  <use href="#svg9604681989"></use>
                </svg>
              </div> */}
            </div>
            <div>
              <p className="supafast-para">
                © Supafast 2024. All rights reserved.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="socials">
            <a className="social-media" href="https://x.com/namyakhann">
              <img height="50px" width="40px" src={x} alt="" />
            </a>
            <a
              className="social-media"
              href="https://www.linkedin.com/in/namyakhan/"
            >
              <img height="50px" width="40px" src={i} alt="" />
            </a>
            <a className="social-media" href="mailto:%20khannamya@gmail.com">
              <img height="50px" width="40px" src={at} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="sticky-navbar">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-container">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  aspectRatio: "inherit",
                }}
              >
                <svg
                  viewBox="0 0 34 28"
                  preserveAspectRatio="none"
                  width="100%"
                  height="100%"
                >
                  <use href="#svg-73944727_606"></use>
                </svg>
              </div>
            </div>
          </div>

          <div className="links">
            <a href="" className="link">
              How it Works
            </a>

            <a href="" className="link">
              Pricing
            </a>

            <a href="" className="link">
              Work
            </a>

            <a href="" className="link">
              FAQ
            </a>
          </div>

          <div className="contact-section">
            <div className="contact-pic">
              <div
                style={{
                  position: "absolute",
                  borderRadius: "inherit",
                  inset: "0px",
                }}
              >
                <img
                  src="https://framerusercontent.com/images/Oel3kyZZ6WT9S5V7bMa7TxlCP3U.png"
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                    borderRadius: "inherit",
                    display: "block",
                  }}
                />
              </div>
            </div>
            <div className="book-text">
              <p>Book a call with Namya</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
