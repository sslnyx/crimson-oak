import React from "react";
import logoW from "../assets/img/logos/logo-white.svg";
import devLogo from "../assets/img/logos/peace-park.svg";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container max-w-[800px] p-10">
        <div className="flex justify-center md:justify-start">
          <a href="/#">
            <img className="w-[250px] mb-5" src={logoW} alt="" />
          </a>
        </div>

        <div className="flex justify-between flex-wrap text-center md:text-left">
          <div className="flex basis-full md:basis-1/2 flex-col">
            <h6>Connect With Us</h6>
            <p className="mb-5">
              <a href="tel:604.807.243">604.807.243 </a>
              <br />
              <a href="mailto:info@CrimsonOakSurrey.com">
                info@CrimsonOakSurrey.com
              </a>
            </p>

            <div className="flex-1"></div>

            <div>
              <Link className="bg-primary px-5 py-1" to="/register#register">
                Register Now
              </Link>
            </div>
          </div>

          <div className="flex basis-full md:basis-1/2 justify-center md:justify-end">
            <div>
              <h6>Site Address</h6>
              <strong>Townhomes</strong>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/195+172+St,+Surrey,+BC+V3S+9R1/@49.0055959,-122.7488936,17z/data=!3m1!4b1!4m5!3m4!1s0x5485c40565e1ad57:0x35ba42594a9722fa!8m2!3d49.0055924!4d-122.7463187"
              >
                195 - 172 Street, Surrey
              </a>
              <br />
              <br />
              <strong>Condos & Retail</strong>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/175+172+St,+Surrey,+BC+V3S+9R2/@49.0052032,-122.7494909,17z/data=!3m1!4b1!4m5!3m4!1s0x5485c40509b550ed:0xef95bdc48b9ebd0!8m2!3d49.0051997!4d-122.746916"
              >
                175 - 172 Street, Surrey
              </a>
              <br />
              <br />
              <div className="flex flex-col items-center md:items-start">
                <strong>Develop By</strong>
                <img
                  className="object-none w-auto h-auto"
                  src={devLogo}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2e0812] text-center p-3">
        <small>
          This is not an offering for sale. Any such offerings may only be made
          with a Disclosure Statement. E.&O.E.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
