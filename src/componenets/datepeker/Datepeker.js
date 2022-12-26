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

    </>
    
  );
}

export default Datepeker;
