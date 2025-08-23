import React from "react";
import Container from "../UI/Container";
import { FiPhoneCall } from "react-icons/fi";
import { FaLanguage } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Button from "../UI/Button";

function Navbar() {
  return (
    <>
      <div>
        <div className="bg-gray-200">
          <Container className="py-2 ">
            <TopNavBar />
          </Container>
        </div>
        <div className="border-b border-gray-300">
          <Container className=" py-5">
            <div className=" flex justify-between">
              <div className="flex justify-between items-center gap-4">
                <div className="flex justify-between items-center gap-2">
                  <RiShoppingBagLine className="text-primary-500 w-[40px] h-[40px]" />
                  <span className="text-2xl font-semibold">JobPilot</span>
                </div>
                <div>
                  <div className="border border-gray-300 h-full flex items-center py-2 px-4 rounded-md gap-4">
                    <div className="flex justify-between items-center gap-3">
                      <FaLanguage />
                      <span className="text-sm">English</span>
                    </div>
                    <div className="h-full w-[1px] bg-gray-300"></div>
                    <div className="flex justify-between items-center gap-2">
                      <CiSearch className="text-primary-500 text-xl font-semibold" />
                      <input
                        type="text"
                        placeholder="Job title, keyword, company"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button filled={false} text={"Sing In"} url={"#"} />

                <Button filled={true} text={"Post A Job"} url={"#"} />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

function TopNavBar() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between">
        <div>
          <ul className="flex gap-6 ">
            <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[2px] after:bg-primary-500">
              <a className="text-sm font-normal text-primary-500" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-sm font-normal text-gray-600" href="#">
                Find Job
              </a>
            </li>
            <li>
              <a className="text-sm font-normal text-gray-600" href="#">
                Employers
              </a>
            </li>
            <li>
              <a className="text-sm font-normal text-gray-600" href="#">
                Candidates
              </a>
            </li>
            <li>
              <a className="text-sm font-normal text-gray-600" href="#">
                Pricing Plans
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between gap-6">
          <div className="flex justify-between items-center gap-3">
            <FiPhoneCall />
            <span className="text-sm">+1-202-555-0178</span>
          </div>
          <div className="flex justify-between items-center gap-3">
            <FaLanguage />
            <span className="text-sm">English</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
