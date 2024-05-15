import React from "react";
import Image from "next/image";
//import footerbg from "/images/footerunicorn.png";
import style from "@/app/styles/common.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerLink}>
        <div className="w-[100%] md:w-[100%] mt-[2rem] md:mt-[3rem] mb-[2rem] mx-auto  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-[3rem]">
        <ul>
          <li>
            <Image src="/images/footerunicorn.png" width={263} height={81} alt="logo" />
            {/* <Image src='/images/footerunicorn.png' width={100} height={50} alt='logo'/>*/}
          </li>
        </ul>
        <ul>
          <h3 className="xl:text-2xl font-bold mb-5 mt-2">Quick Links</h3>
          <li>
            <Link href="products">Products</Link>
          </li>
          <li>
            <Link href="Company">Company</Link>
          </li>
          <li>
            <Link href="#Mission">Mission</Link>
          </li>
          <li>
            <Link href="#Vission">Vission</Link>
          </li>
          <li>
            <Link href="/becomeseller">Become A Sellers</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
        </ul>
        <ul>
          <h3 className="xl:text-2xl font-bold mb-5 mt-2">Important Links</h3>
          <li>
            <Link href="/termscondition">Terms And Condition</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          </ul>
        <ul>
          
            <h3 className="xl:text-2xl font-bold mb-5 mt-2">Get in touch</h3>
            <li>
              <address>
                CommA1104 Kamdhenu Aura Plot No. 17/18, Sector 4Phase 1 Taloja-
                Navi Mumbai,Maharashtra 410208, INDIAunication
              </address>
          </li>
          <li>
            <Link href="#">
              <i>
                <FaFacebookF />{" "}
              </i>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i>
                {" "}
                <FaTwitter />{" "}
              </i>{" "}
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/thapatechnical/"
              target="_blank"
            >
              <i>
                {" "}
                <FaInstagram />{" "}
              </i>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="#">
              <i>
                {" "}
                <FaLinkedinIn />{" "}
              </i>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="#">
              <i>
                {" "}
                <FaYoutube />{" "}
              </i>
            </Link>
          </li>
        </ul>
      </div>
      </div>
      <p className={style.footerCopy}>Copyright © 2024 All rights reserved</p>
    </div>
  );
};

export default Footer;
