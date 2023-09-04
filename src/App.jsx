import React from 'react';
import DayTask from "./DayTask";
import { task, dates } from "./Task_Data";

//imported the data from the Take_Data file. 

//Changed the format of data in Task_Data file.

const App = () => (

  <div className="border rounded-lg m-1 max-w-[1440] bg-slate-50 relative pt-8 sm:pt-0">
    <div className="w-[0.5px]  h-[968px] sm:h-[870px] mt-[87px] sm:mt-[149px] sm:ml-[237px] ml-5 bg-gray-300 absolute  z-10"></div>
    <div className=" h-[0.5px] sm:w-[620px]  mt-[87px] sm:mt-[627px] sm:ml-[237.7px] ml-5 bg-gray-300 absolute z-10"></div>
    {/*
Here I used map function to render the component. With its help, I won't need to write the component more than once. And also removed an extra div.
*/}
    {
      task.map((items, index) => (
        <div key={index}>
          <DayTask
            data={items}
            date={dates[index]}
          />
        </div>
      ))
    }

  </div>


);


export default App;




