import React from 'react';
import { FaUserDoctor } from 'react-icons/fa6';
import { FaRegFile } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { MdCalendarMonth } from "react-icons/md";
import { FiDroplet } from "react-icons/fi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";

const MobileAppLayout = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-95% bg-gray-200 h-full flex flex-col rounded-lg overflow-hidden">
        <div className=" bg-purple-600 h-80 py-4 px-6 flex justify-between">
          <h1 className="text-white text-lg font-semibold relative left-2 top-4">Profile</h1>
          <div className="w-15/16 relative right-8 align-item-centre" >
            <div className="bg-white relative top-20 mx-auto flex-grow p-5">
              <div className=" flex items-center space-x-4">
                <img src="https://via.placeholder.com/64" alt="Profile" className=" rounded-full" />
                <div>
                  <h2 className="text-lg font-semibold">Deveeprasad Acharya</h2>
                  <p className="text-gray-500">20 yrs old</p>
                  
                </div>
                
              </div>
              {/* Updated line */}
              <div className=" mt-4 flex justify-between">
                <div className="flex flex-col items-center">
                  <button className="bg-purple-600 text-white p-4 rounded-full flex items-center justify-center">
                    <FaUserDoctor />
                  </button>
                  <p className="text-center w-1/2 text-gray-500 mt-2">Saved Doctors</p>
                </div>
                <div className="flex flex-col items-center">
                  <button className="bg-blue-600 text-white p-4 rounded-full flex items-center justify-center">
                    <FaRegFile />
                  </button>
                  <p className="text-center w-1/2 text-gray-500 mt-2">Saved Articles</p>
                </div>
                <div className="flex flex-col items-center">
                  <button className="bg-green-600 text-white p-4 rounded-full flex items-center justify-center">
                    <FaRegHeart />
                  </button>
                  <p className="text-center w-1/2 text-gray-500 mt-2">Health Diary</p>
                </div>
              </div>
              <div className="mt-4 bg-blue-100 p-4 rounded-lg">
                <p className="text-blue-600 font-semibold">30%</p>
                <p className="text-gray-500">Refer a friend and get discount!</p>
              </div>
              <div className=" mt-4 space-y-2">
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
                  <MdCalendarMonth />
                  <p className="text-gray-500">Appointments</p>
                  <FaAngleRight />
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
                  <FiDroplet />
                  <p className="text-gray-500">Pills Reminder</p>
                  <FaAngleRight />
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
                  <RiAccountPinCircleLine />
                  <p className="text-gray-500">My Doctors</p>
                  <FaAngleRight />
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
                  <BsFillSuitcaseLgFill />
                  <p className="text-gray-500">Insurance Plans</p>
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppLayout;