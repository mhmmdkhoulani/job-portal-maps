import React, { useEffect, useMemo, useState } from "react";
import Container from "./UI/Container";
import { GoArrowRight } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";

function Positions() {
  const [positions, setPositions] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:4000/api/positions");
      const result = await res.json();
      setPositions(result.data);
    }
    getData();
  }, []);
  const filterdPos = useMemo(() => {
    return positions.filter((position) => {
      console.log("Run");
      return position.jobType === "Full Time";
    });
  }, [positions]);
  console.log(filterdPos);
  return (
    <div className="py-[50px] ">
      <Container>
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-5xl font-medium">Featured Positions</h1>
          <a
            className="border-2 py-2 px-3 rounded border-primary-50 flex justify-between  items-center gap-2 text-primary-500"
            href="#"
          >
            View All <GoArrowRight className="" />
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {positions.map((position) => (
            <div
              key={position.id}
              className={`flex justify-between items-end p-6 rounded border border-gray-300 ${
                position.jobType === "Full Time"
                  ? "bg-linear-to-r from-[#FFF6E6] to-white"
                  : "bg-white"
              }`}
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium">{position.positionName}</h3>
                <div className="flex justify-between gap-3">
                  <span className="text-[12px] rounded font-semibold bg-green-100 py-1 px-2 text-green-700">
                    {position.jobType}
                  </span>
                  <p className="text-sm text-gray-500">
                    Salary {position.salaryRange}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className=" w-12 h-12 p-2 bg-gray-200 rounded">
                    <img
                      className="w-full"
                      src="/images/google.png"
                      alt={`${position.companyName} Logo`}
                    />
                  </div>
                  <div>
                    <p>{position.companyName}</p>
                    <p className="flex gap-2 items-center text-gray-500">
                      <IoLocationOutline /> {position.companyAddress.city},{" "}
                      {position.companyAddress.country}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <CiBookmark className="text-gray-500 w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Positions;
