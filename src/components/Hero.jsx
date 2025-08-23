import React from "react";
import Container from "./UI/Container";
import { IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Button from "./UI/Button";
import StatCard from "./UI/StatCard";
import { RiHandbagLine } from "react-icons/ri";
import { RiBuildingFill } from "react-icons/ri";
import { PiUsersDuotone } from "react-icons/pi";

function Hero() {
  return (
    <>
      <div className="bg-gray-200 ">
        <Container className="py-12">
          <div className="flex justify-between gap-[50px]">
            <div className="w-6/10">
              <h1 className="text-6xl max-w-[80%] ">
                Find a job that suits your interest & skills.
              </h1>
              <p className="text-gray-600 text-lg py-4 max-w-[70%]">
                Aliquam vitae turpis in diam convallis finibus in at risus.
                Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
              </p>
              <div className="flex justify-between bg-white p-8 rounded border-gray-300 shadow-sm h-[100px] gap-4">
                <div className="flex justify-between items-center gap-2">
                  <CiSearch className="text-primary-500 text-xl font-semibold" />
                  <input type="text" placeholder="Job title, keyword..." />
                </div>
                <div className="h-full w-[1px] bg-gray-200"></div>
                <div className="flex justify-between items-center gap-2">
                  <IoLocationOutline className="text-primary-500 text-xl font-semibold" />
                  <input type="text" placeholder="Your Location" />
                </div>
                <div className="h-full">
                  <Button
                    text="Find Job"
                    url="#"
                    filled={true}
                    className={"h-full"}
                  />
                </div>
              </div>
            </div>
            <div className="w-4/10">
              <img
                src="/images/Illustration.png"
                className="w-[500px]"
                alt=""
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-[40px]">
            <StatCard title={"Live Job"} number={"1,75,324"}>
              <RiHandbagLine className="w-10 h-10 text-primary-500" />
            </StatCard>
            <StatCard title={"Companies"} number={"97,354"}>
              <RiBuildingFill className="w-10 h-10 text-primary-500" />
            </StatCard>
            <StatCard title={"Live Job"} number={"38,47,154"}>
              <PiUsersDuotone className="w-10 h-10 text-primary-500" />
            </StatCard>
            <StatCard title={"Candidates"} number={"1,75,324"}>
              <RiHandbagLine className="w-10 h-10 text-primary-500" />
            </StatCard>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Hero;
