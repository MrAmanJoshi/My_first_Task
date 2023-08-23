import React from "react";
import Profile from "./Profile"

const DayTask = ({data, date}) =>  (
    <div className=" sm:mt-[138px] sm:ml-[138px] mb-8">
      <div className="flex">

        <div className=" flex flex-col font-mono z-30 bg-slate-50">

          <h3 className="font-medium sm:text-2xl text-xl ">{date.day}</h3>
          <p className="text-slate-400 text-sm sm:text-lg font-medium ml-2 sm:ml-0">Aug</p>
        </div>

        <p className={`p-2 sm:p-4 rounded-lg text-xl sm:text-2xl font-bold text-center ml-5 sm:ml-[26px] text-white z-20 ${ date.date === 23 ? "bg-green-500"  : "bg-gray-500"}`}>
          {date.date}
        </p>
      </div>
      <div className="sm:mt-12">
        {
          data.map((data, index) => (
            <div key={data.icon} className="mt-4  sm:flex">
              <p className="text-slate-400 ml-[54px] sm:ml-0 mb-1 sm:mb-0">11:00 AM</p>
              <div className="flex ml-1 sm:ml-0">
                <img src={data.icon} className="w-8 h-8  rounded-full bg-black  mr-[18px] sm:mx-[15px] z-20" />
                <div>
                  <p className={`font-medium ${index === 0 && date.date === 23 ? "text-green-400" : "text-black "}`}> {data.message}</p>
          
                  <Profile/>

                </div>
              </div>
            </div>

          ))
        }

      </div>
    </div>
  );

export default DayTask;