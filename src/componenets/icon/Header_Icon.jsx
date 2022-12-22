import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

function Header_Icon() {
  return (
    <div className="absolute right-12 text-slate-600 iconClass md:right-16">
      <AiOutlineMenu className="absolute text-xl" />
      <FaRegUserCircle className="absolute left-6 text-xl"/>
    </div>
  );
}

export default Header_Icon;
