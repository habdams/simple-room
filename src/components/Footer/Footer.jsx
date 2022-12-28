import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  PaperPlaneTilt,
  YoutubeLogo,
} from "phosphor-react";

import logo from "../../assets/dananzLogo.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-10 max-w-screen pb-8">
      <section className="w-full md:w-2/3">
        <img src={logo} alt="logo" width={140} />
        <h3 className="text-2xl text-[#333333] font-semibold w-full md:w-3/5 ">
          One of the best furniture agency.
        </h3>
      </section>
      <section className="flex flex-col  gap-5 w-full md:w-1/3">
        <form action="#">
          <label htmlFor="email">Enter your email to get the latest news</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="border border-white border-b-gray-700 w-full mt-2 relative"
          />

          <span className="absolute right-10">
            <a href="#">
              <PaperPlaneTilt size={24} weight="duotone" />
            </a>
          </span>
        </form>
        <div className="self-start md:self-end">
          <p className="text-start my-2">Follow us On</p>
          <ul className="flex gap-2">
            <li>
              <FacebookLogo size={32} weight="duotone" />
            </li>
            <li>
              <TiktokLogo size={32} weight="duotone" />
            </li>
            <li>
              <InstagramLogo size={32} weight="duotone" />
            </li>
            <li>
              <YoutubeLogo size={32} weight="duotone" />
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
