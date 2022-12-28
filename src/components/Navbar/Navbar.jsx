import React from "react";
import { List, X } from "phosphor-react";
import logo from "../../assets/dananzLogo.svg";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  return (
    <section className=" flex justify-center items-center text-[#333333] gap-10 w-full py-4 relative">
      <section className="w-2/3">
        <img src={logo} alt="logo" width={96} />
      </section>

      <section className="w-1/3 flex items-center justify-end">
        {isNavOpen ? (
          <section className="md:hidden bg-white  p-8 rounded-md min-w-max border z-50 top-1 absolute">
            <ul className="flex flex-col gap-4 mb-10">
              <li className="self-end">
                <a onClick={() => setIsNavOpen(false)}>
                  <X size={32} />
                </a>
              </li>
              <li className="border border-white border-b-[#2C3878]">Home</li>
              <li className="border border-white border-b-[#2C3878]">
                About Us
              </li>
              <li className="border border-white border-b-[#2C3878]">
                Services
              </li>
              <li className="font-bold">Our Teams</li>
            </ul>
            <a
              href="#"
              className="bg-[#2C3878] px-4 py-2 text-white border border-[#3C3C3C]"
            >
              Contact Us
            </a>
          </section>
        ) : null}
        <span className="md:hidden ">
          <a onClick={() => setIsNavOpen(true)}>
            <List size={32} />
          </a>
        </span>
        <section className="hidden md:flex ml-auto mr-10 min-w-max ">
          <ul className="flex gap-10">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li className=" font-bold ">Our Teams</li>
          </ul>
        </section>
        <span className="hidden md:flex min-w-max">
          <a
            href="#"
            className="bg-[#2C3878] px-4 py-2 text-white border border-[#3C3C3C]"
          >
            Contact Us
          </a>
        </span>
      </section>
    </section>
  );
}
