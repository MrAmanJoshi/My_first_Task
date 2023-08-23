import React from 'react';
import DayTask from "./DayTask";
import {priviousDayData} from "./Task_Data";
import { CurrentDayData } from "./Task_Data";

//Now I have deleted the currentDay and previousDay component, now I have created new component named Daytask and Profile and my DayTask component is reusable. By this I have reduced the repeating code.

function App() {
  
const currentDate = {
  date: 23, 
  day: "WED"
}
const PriviousDate = {
  date: 22, 
  day: "TUE"
}
  
  return (

    <div className="border rounded-lg m-1 max-w-[1440]  bg-slate-50 relative ">
      <div className="w-[0.5px]  h-[968px] sm:h-[870px] mt-[87px] sm:mt-[149px] sm:ml-[237px] ml-5 bg-gray-300 absolute  z-10"></div>
      <div className=" h-[0.5px] sm:w-[620px]  mt-[87px] sm:mt-[627px] sm:ml-[237.7px] ml-5 bg-gray-300 absolute z-10"></div>
     
        
      <div className="mt-4">
             
          <DayTask 
            data={CurrentDayData}
            date={currentDate}
            />
                  
          <DayTask 
            data={priviousDayData}
            date={PriviousDate}
           />
               
</div>
    </div>

  );
}

export default App;