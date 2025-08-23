import React from "react";

function StatCard({ children, number, title }) {
  return (
    <div className="bg-white rounded p-3 flex items-center gap-4">
      <div className="w-[72px] h-[72px] flex justify-center items-center bg-primary-50 rounded">
        {children}
      </div>
      <div className="">
        <h3 className="text-2xl font-medium">{number}</h3>
        <p className="text-base text-gray-500">{title}</p>
      </div>
    </div>
  );
}

export default StatCard;
