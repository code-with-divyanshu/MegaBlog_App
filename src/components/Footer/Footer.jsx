import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden pt-20 pb-10 border-t-2 border-t-gray-500 rounded-b-sm">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex flex-col justify-between">
              <div className="mb-4 inline-flex justify-center items-center">
                <Logo className="w-[80px]" />
              </div>
              <div className="text-gray-300 text-sm">
                Mega Blog App is a dynamic and user-friendly platform designed
                for bloggers and content creators. Whether you're a seasoned
                writer or just starting, Mega Blog App offers an intuitive
                interface that makes it easy to publish and share your thoughts
                with the world. Built with the latest web technologies, it
                ensures a seamless and engaging experience for both creators and
                readers.
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-[14px] font-semibold uppercase text-gray-500">
                Other Profile
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="https://devloper-divyanshu.netlify.app/"
                    target="_blank"
                  >
                    Personal Portfolio
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="https://www.linkedin.com/in/divyanshu-bartwal-b7b058286/"
                    target="_blank"
                  >
                    Linkedin
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="https://github.com/code-with-divyanshu"
                    target="_blank"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="https://x.com/DivyanshuB21040"
                    target="_blank"
                  >
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-[14px] font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-[14px] font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-white hover:text-gray-500"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-gray-400  text-center">
            &copy; Copyright 2024. All Rights Reserved by @Developer_Divyanshu.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
