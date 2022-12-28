import React from "react";
import { DatePicker } from "antd";
import { TimePicker } from "antd";
import { Button } from 'antd';
import { FaSistrix } from "react-icons/fa";

function Datepeker() {
  return (
    <>
    {/* strat-xtml */}
    <div className="bg-white sm:hidden absolute top-32 rounded-lg left-2 fullWidth">
      <div>
        <p className="text-sm mt-2 ml-2">where</p>
        <input
          type="text"
          placeholder="City, airport, address or hotel"
          className="ml-2 w-11/12"
        />
        <hr className="mt-1 ml-2 w-11/12" />
      </div>
      <div>
        <p className="text-sm mt-2 ml-2">From</p>
        <DatePicker className="ml-2 border-none widt" />
        <TimePicker className="border-none widt" />
        <hr className="mt-1 ml-2 w-11/12" />
      </div>
      <div>
        <p className="text-sm mt-2 ml-2">Untill</p>
        <DatePicker className="ml-2 border-none widt" />
        <TimePicker className="border-none widt" />
        <hr className="mt-1 ml-2 w-11/12" />
      </div>
        <div>
        <Button className="black mt-2 ml-2 w-11/12 h-11" type="primary">Search for cars</Button>
        </div>
    </div>

    {/* mid-xtml */}
    <div className="bg-white hidden sm:block  md:hidden absolute top-32 rounded-lg left-2 sm:w-1/2 sm:h-60 sm:ml-36">
      <div>
        <p className="text-sm mt-2 ml-2">where</p>
        <input
          type="text"
          placeholder="City, airport, address or hotel"
          className="ml-2 w-11/12"
        />
        <hr className="mt-1 ml-2 w-11/12" />
      </div>
      <div>
        <p className="text-sm mt-2 ml-2">From</p>
        <DatePicker className="ml-2 border-none widt" />
        <TimePicker className="border-none widt" />
        <hr className="mt-1 ml-2 w-11/12" />
      </div>
      <div>
        <p className="text-sm mt-2 ml-2">Untill</p>
        <DatePicker className="ml-2 border-none widt" />
        <TimePicker className="border-none widt" />
        <hr className="mt-1 ml-2 w-11/12" />
      </div>
        <div>
        <Button className="black mt-2 ml-2 w-11/12 h-11" type="primary">Search for cars</Button>
        </div>
    </div>

    {/* mid-2-HTML */}
    <div className="bg-white hidden sm:hidden  md:block lg:hidden absolute top-32 rounded-lg left-20 sm:w-1/2 sm:h-60 sm:ml-36">
      <div>
        <p className="text-sm mt-2 ml-2">where</p>
        <input
          type="text"
          placeholder="City, airport, address or hotel"
          className="ml-2 w-11/12"
        />
        <hr className="mt-1 ml-2 w-11/12" />
      </div>
      <div>
        <p className="text-sm mt-2 ml-2">From</p>
        <DatePicker className="ml-2 border-none widt" />
        <TimePicker className="border-none widt" />
        <hr className="mt-1 ml-2 w-11/12" />
      </div>
      <div>
        <p className="text-sm mt-2 ml-2">Untill</p>
        <DatePicker className="ml-2 border-none widt" />
        <TimePicker className="border-none widt" />
        <hr className="mt-1 ml-2 w-11/12" />
      </div>
        <div>
        <Button className="black mt-2 ml-2 w-11/12 h-11" type="primary">Search for cars</Button>
        </div>
    </div>


    {/* End-HTML */}
    <div className="bg-white hidden xl:hidden sm:hidden  md:hidden lg:block lg:absolute top-36 left-44 widthEnd rounded-full">
    <div>
        <p className="text-sm mt-1 ml-3">where</p>
        <input
          type="text"
          placeholder="City, airport, address or hotel"
          className="ml-2 inputWidth"
        />
        <div className="vl absolute top-1"></div>
      </div>
      <div className="absolute -top-1 datePeker">
        <p className="text-sm mt-2 ml-2">From</p>
        <DatePicker className="w-28 border-none"/>
        <TimePicker className="w-28 border-none ml-2"/>
      </div>
      <div className="vla absolute top-1"></div>
    <div className="absolute top-0 timePeker">
        <p className="text-sm mt-1 ml-2">Untill</p>
        <DatePicker className="w-28 border-none"/>
        <TimePicker className="w-28 border-none ml-2"/>
      </div>
      <div className="radius">
        <FaSistrix className="iconSearch"/>
      </div>
    </div>

    {/* End2-html */}
    <div className="bg-white hidden lg:hidden sm:hidden xl:block 2xl:hidden  md:hidden lg:absolute top-36 left-44 widthEnd2 rounded-full">
    <div>
        <p className="text-sm mt-1 ml-3">where</p>
        <input
          type="text"
          placeholder="City, airport, address or hotel"
          className="ml-2 inputWidth"
        />
        <div className="vl absolute top-1"></div>
      </div>
      <div className="absolute -top-1 datePeker2">
        <p className="text-sm mt-2 ml-2">From</p>
        <DatePicker className="w-36 border-none"/>
        <TimePicker className="w-36 border-none ml-2"/>
      </div>
      <div className="vla absolute top-1"></div>
    <div className="absolute top-0 timePeker2">
        <p className="text-sm mt-1 ml-2">Untill</p>
        <DatePicker className="w-36 border-none"/>
        <TimePicker className="w-36 border-none ml-2"/>
      </div>
      <div className="radius">
        <FaSistrix className="iconSearch"/>
      </div>
    </div>


    {/* End3-html */}
    <div className="bg-white hidden lg:hidden sm:hidden xl:hidden 2xl:block  md:hidden lg:absolute top-36 left-44 widthEnd2 rounded-full">
    <div>
        <p className="text-sm mt-1 ml-3">where</p>
        <input
          type="text"
          placeholder="City, airport, address or hotel"
          className="ml-2 inputWidth"
        />
        <div className="vl absolute top-1"></div>
      </div>
      <div className="absolute -top-1 datePeker2">
        <p className="text-sm mt-2 ml-2">From</p>
        <DatePicker className="widthBda border-none"/>
        <TimePicker className="widthBda border-none ml-2"/>
      </div>
      <div className="vla absolute top-1"></div>
    <div className="absolute top-0 timePeker2">
        <p className="text-sm mt-1 ml-2">Untill</p>
        <DatePicker className="widthBda border-none"/>
        <TimePicker className="widthBda border-none ml-2"/>
      </div>
      <div className="radius">
        <FaSistrix className="iconSearch"/>
      </div>
    </div>
    </>
    
  );
}

export default Datepeker;
