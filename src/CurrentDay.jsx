import React from "react";
import { CurrentDayData } from "./Task_Data";

const CurrentDay = () =>  (
    <div className=" sm:mt-[138px] sm:ml-[138px]">
      <div className="flex">

        <div className=" flex flex-col font-mono ">

          <h3 className="font-medium sm:text-2xl text-xl ">WED</h3>
          <p className="text-slate-400 text-sm sm:text-lg font-medium ml-2 sm:ml-0 z-20">Jan</p>
        </div>

        <p className="p-2 sm:p-4 rounded-lg bg-green-500 text-xl sm:text-2xl font-bold text-center ml-5 sm:ml-[26px] text-white z-20">
          30
        </p>
      </div>
      <div className="sm:mt-12">
        {
          CurrentDayData.map((data, index) => (
            <div key={data.icon} className="mt-4  sm:flex">
              <p className="text-slate-400 ml-[54px] sm:ml-0 mb-1 sm:mb-0">11:00 AM</p>
              <div className="flex ml-1 sm:ml-0">
                <img src={data.icon} className="w-8 h-8  rounded-full bg-black  mr-[18px] sm:mx-[15px] z-20" />
                <div>
                  <p className={`font-medium ${index === 0 ? "text-green-400" : "text-black "}`}> {data.message}</p>
                  <div className="flex ml-1 sm:ml-0 z-20">
                    <img src="https://i.postimg.cc/DZhWJSyX/Photo.jpg" className="w-8 h-8 rounded-full bg-red-300 mr-3" />
                    <p className="text-slate-400 mt-2">Sheila O’Riley</p>
                  </div>

                </div>
              </div>
            </div>

          ))
        }

      </div>
    </div>
  );

export default CurrentDay;