import BgDesktop from "./images/bg-intro-desktop.svg";

import ApiIcon from "./images/icon-api.svg";
import BudgetIcon from "./images/icon-budgeting.svg";
import CloseIcon from "./images/icon-close.svg";
import FacebookIcon from "./images/icon-facebook.svg";
import Hamburger from "./images/icon-hamburger.svg";
import Instagram from "./images/icon-instagram.svg";
import Onboarding from "./images/icon-onboarding.svg";
import Online from "./images/icon-online.svg";
import Pinterest from "./images/icon-pinterest.svg";
import Twitter from "./images/icon-twitter.svg";
import Youtube from "./images/icon-youtube.svg";
import Confetti from "./images/image-confetti.jpg";
import Currency from "./images/image-currency.jpg";
import MockUps from "./images/image-mockups.png";
import Plane from "./images/image-plane.jpg";
import Restaurant from "./images/image-restaurant.jpg";
import Logo from "./images/logo.svg";
import styled from "styled-components";
import { React, useState } from "react";
function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Wrapper>
      <nav>
        <div className="container">
          <img src={Logo} alt="logo" />
          <div className="nav-links">
            <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Contact</a>
            <a href="/#">Blog</a>
            <a href="/#">Careers</a>
          </div>
          <button className="btn logo-btn">Request invite</button>

          <button
            className="btn mobil"
            onClick={() => setOpenModal(!openModal)}
          >
            {openModal ? (
              <img src={CloseIcon} alt="close btn" />
            ) : (
              <img src={Hamburger} alt="open btn" />
            )}
          </button>
        </div>
      </nav>
      {openModal && (
        <section className="modal">
          <div className="modal-container">
            <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Contact</a>
            <a href="/#">Blog</a>
            <a href="/#">Careers</a>
          </div>
        </section>
      )}
      <section className="hero">
        <div className="hero-info">
          <h1>Next generation digital banking</h1>
          <p className="hero-desc">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.{" "}
          </p>
          <button className="btn">Request invite</button>
        </div>
        <div className="hero-img desktop">
          <img src={BgDesktop} alt="hero img" className="img" />
          <img src={MockUps} alt="hero mockUps" className="img mock-up" />
        </div>
      </section>
      <section className="features">
        <div className="features-container">
          <h3 className="topic">Why choose Easybank?</h3>
          <p className="features-desc">
            We leverage Open Banking to turn your bank account into your
            financial hub. <br /> Control your finances like never before.{" "}
          </p>
          <div className="features-detail">
            <div className="single-feature">
              <div className="feature-icon">
                <img src={Online} alt="online banking" />
              </div>
              <p className="feature-title">Online Banking</p>
              <p className="feature-desc">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.{" "}
              </p>
            </div>

            <div className="single-feature">
              <div className="feature-icon">
                <img src={BudgetIcon} alt="budgeting" />
              </div>
              <p className="feature-title">Simple Budgeting</p>
              <p className="feature-desc">
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>
            <div className="single-feature">
              <div className="feature-icon">
                <img src={Onboarding} alt="onboarding" />
              </div>
              <p className="feature-title">Fast Onboarding</p>
              <p className="feature-desc">
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div className="single-feature">
              <div className="feature-icon">
                <img src={ApiIcon} alt="open API" />
              </div>
              <p className="feature-title">Open API</p>
              <p className="feature-desc">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="articles">
        <div className="article-container">
          <h2 className="article-title">Latest articles</h2>
          <div className="articles-section">
            <div className="single-article">
              <div className="article-img">
                <img src={Currency} alt="money" className="img" />
              </div>
              <div className="article-info">
                <p className="author">By Claire Robinson</p>
                <p className="article-title">
                  Receive money in any currency with no fees
                </p>
                <p className="article-detail">
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …{" "}
                </p>
              </div>
            </div>

            <div className="single-article">
              <div className="article-img">
                <img src={Restaurant} alt="restaurant" className="img" />
              </div>
              <div className="article-info">
                <p className="author">By Wilson Hutton</p>
                <p className="article-title">
                  Treat yourself without worrying about money
                </p>
                <p className="article-detail">
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …{" "}
                </p>
              </div>
            </div>

            <div className="single-article">
              <div className="article-img">
                <img src={Plane} alt="plane" className="img" />
              </div>
              <div className="article-info">
                <p className="author">By Wilson Hutton</p>
                <p className="article-title">
                  Take your Easybank card wherever you go
                </p>
                <p className="article-detail">
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …{" "}
                </p>
              </div>
            </div>

            <div className="single-article">
              <div className="article-img">
                <img src={Confetti} alt="confetti" className="img" />
              </div>
              <div className="article-info">
                <p className="author">By Claire Robinson</p>
                <p className="article-title">
                  Our invite-only Beta accounts are now live!
                </p>
                <p className="article-detail">
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site ...{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-container">
          <div className="logos-links">
            <div className="logos">
              <img src={Logo} alt="logo" className="img footer-img" />
              <div className="links">
                <img src={FacebookIcon} alt="facebook" />
                <img src={Youtube} alt="youtube" />
                <img src={Twitter} alt="twitter" />
                <img src={Pinterest} alt="pinterest" />
                <img src={Instagram} alt="instagram" />
              </div>
            </div>
            <div className="footer-link">
              <a href="/#">About</a>
              <a href="/#">Contact</a>
              <a href="/#">Blog</a>
            </div>
            <div className="footer-support">
              <a href="/#">Careers</a>
              <a href="/#">Contact</a>
              <a href="/#">Private Policy</a>
            </div>
          </div>
          <div className="btn-copyright">
            <button className="btn">Request invite</button>
            <p className="copyright">© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}
const Wrapper = styled.main`
  nav {
    background: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    z-index: 5;
    width: 100%;
  }
  .modal {
    width: 100vw;
    height: 100vh;
    background: red;
    position: relative;
    background: linear-gradient(to top, transparent, hsl(233, 26%, 24%));
    position: absolute;
    top: 4rem;
    left: 0;
    z-index: 99;
  }
  .modal-container {
    margin-top: 5rem;
    width: 80vw;
    background: white;
    margin: 0 auto;
    padding: 3rem 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    position: absolute;
    top: 3rem;
    left: 10%;
    border-radius: 2rem;
    a {
      color: hsl(233, 26%, 24%);
    }
  }
  .container {
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-links {
    display: flex;
    gap: 1rem;
    align-items: center;
    a {
      color: hsl(233, 8%, 62%);
      margin-bottom: 1rem;
    }
  }
  .nav-links a:hover {
    text-decoration: underline;
    text-decoration-color: hsl(136, 65%, 51%);
    text-decoration-thickness: 5px;
  }
  .hero {
    width: 80vw;
    display: flex;
    margin: 0 auto;
    align-items: center;
    gap: 5rem;
    z-index: 1;

    position: relative;
  }
  .hero-img {
    position: relative;
    overflow: hidden;

    z-index: 1;
  }
  .mock-up {
    position: absolute;
    top: -20%;
    left: 20%;
  }
  .hero-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .hero-desc {
    color: hsl(233, 8%, 62%);
    line-height: 1.2rem;
  }
  .features {
    margin-top: 3rem;
    background: hsl(220, 16%, 96%);
  }
  .features-container {
    width: 80vw;
    margin: 0 auto;
    padding: 3rem 0;
  }
  .features-desc {
    margin-top: 1rem;
    margin-bottom: 2rem;
    color: hsl(233, 8%, 62%);
    line-height: 1.2rem;
  }
  .features-detail {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  .feature-title {
    margin-top: 2rem;
  }
  .feature-desc {
    margin-top: 2rem;
    line-height: 1.2rem;
    color: hsl(233, 8%, 62%);
  }
  .articles-section {
    padding: 3rem 0;
    width: 100%;
  }
  .article-container {
    width: 80vw;
    margin: 0 auto;
    padding: 3rem 0;
  }
  .article-title {
    font-weight: 500;
  }
  .article-img {
    height: 100%;
  }
  .articles-section {
    display: flex;
    gap: 1rem;
  }
  .single-article {
    display: grid;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    background: white;
  }
  .article-info {
    padding: 1.5rem 1rem;
  }
  .author {
    color: hsl(233, 8%, 62%);
    font-size: 10px;
    margin-bottom: 1rem;
  }
  .article-title {
    line-height: 1.2rem;
    margin-bottom: 1rem;
  }
  .article-title:hover {
    cursor: pointer;
    color: hsl(136, 65%, 51%);
  }
  .article-title {
    line-height: 1.2rem;
    margin-bottom: 1rem;
  }
  .article-detail {
    color: hsl(233, 8%, 62%);
    font-size: 12px;
    line-height: 1.2rem;
  }
  footer {
    background: hsl(233, 26%, 24%);
    color: white;
    padding: 3rem 0;
    a {
      color: white;
    }
  }
  .footer-container {
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logos-links {
    display: flex;
    gap: 6rem;
  }
  .logos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
  }
  .links {
    display: flex;
    gap: 0.5rem;
  }
  .links :hover {
    cursor: pointer;
    color: hsl(136, 65%, 51%);
    background: hsl(136, 65%, 51%);
  }
  .footer-link {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }
  .footer-link a:hover {
    cursor: pointer;
    color: hsl(136, 65%, 51%);
  }
  .footer-support a:hover {
    cursor: pointer;
    color: hsl(136, 65%, 51%);
  }

  .footer-support {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }
  .btn-copyright {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .btn {
    font-weight: 700;
    width: 8rem;
    font-size: 12px;
    cursor: pointer;
  }
  .copyright {
    color: hsl(233, 8%, 62%);
  }
  .footer-img {
    filter: opacity(0.5) drop-shadow(0 0 0 white);
  }

  .mobil {
    display: none;
    background: transparent;
    box-shadow: none;
  }
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    .logo-btn {
      display: none;
    }
    .mobil {
      display: block;
      z-index: 100;
    }
    .hero {
      flex-direction: column-reverse;
      gap: 10rem;
      text-align: center;
      align-items: center;
      justify-content: center;
      .btn {
        margin: 0 auto;
      }
      .hero-img {
        margin: 0 auto;
      }
      .mock-up {
        transform: translateX(-5rem);
      }
    }
    .features-container {
      text-align: center;
    }
    .features-detail {
      display: flex;
      flex-direction: column;
      gap: 5rem;
    }
    .article-title {
      text-align: center;
    }

    .articles-section {
      flex-direction: column;
      gap: 5rem;
    }
    .article-info {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
    .author {
      text-align: center;
      margin-top: 2rem;
    }
    .footer-container {
      display: flex;
      flex-direction: column;
    }
    .logos-links {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      align-items: center;
    }
    .footer-support {
      align-items: center;
    }
    .btn-copyright {
      align-items: center;
    }
    .logos-links {
      gap: 1rem;
    }
    .logos {
      margin-bottom: 2rem;
    }
  }
`;
export default App;
