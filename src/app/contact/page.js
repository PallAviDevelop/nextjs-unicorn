"use client";
import style from "@/app/styles/common.module.css";
import { useState } from "react";
import ContactCard from "../components/ContactCard";
import ContactCopy from "./contactCopy";

const Contact = () => {
  const [userdata, setUserdata] = useState({
    username: "",
    email: "",
    phone: "",
    msg: "",
  });
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserdata((prevUser) => ({ ...prevUser, [name]: value }));
  };
  const handlesubmit = (e) => {e.preventDefault();};
  return (
    <>
    <ContactCopy/>
      <ContactCard />

      <div div className={style["contactoutter"]}>
        <h3>
          Contact us <span>Now</span>
        </h3>

        <div className={style["contact-form"]}>
          <form onSubmit={handlesubmit}>
            <div className={style["form-grp"]}>
              <label htmlFor="username">Your Username</label>
              <input
                type="text"
                name="username"
                value={userdata.username}
                onChange={handlechange}
                required
                autoComplete="off"
                placeholder="enter your username"
              />
            </div>
            <div className={style["form-grp"]}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                value={userdata.email}
                onChange={handlechange}
                required
                autoComplete="off"
                placeholder="enter your email"
              />
            </div>
            <div className={style["form-grp"]}>
              <label htmlFor="phone">Your Phone</label>
              <input
                type="number"
                name="phone"
                value={userdata.phone}
                onChange={handlechange}
                required
                autoComplete="off"
                placeholder="enter your phone"
              />
            </div>
            <div className={style["form-grp"]}>
              <label htmlFor="username">Your Message</label>
              <textarea
                size={40}
                name="msg"
                value={userdata.msg}
                onChange={handlechange}
                required
                autoComplete="off"
                placeholder="enter your Message"
              />
            </div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
