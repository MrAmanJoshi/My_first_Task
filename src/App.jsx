import React from 'react';
import CurrentDay from "./CurrentDay"
import PriviousDay from "./PriviousDay"


function App() {
  return (

    <div className="border rounded-lg m-1 max-w-[1440]  bg-slate-50 relative ">
      <div className="w-[0.5px]  h-[968px] sm:h-[870px] mt-[87px] sm:mt-[149px] sm:ml-[237px] ml-5 bg-gray-300 absolute  z-10"></div>
      <div className=" h-[0.5px] sm:w-[620px]  mt-[87px] sm:mt-[627px] sm:ml-[237.7px] ml-5 bg-gray-300 absolute z-10"></div>
     
      {
        //I have divided it into two components to make this page
      }
        
      <div className="mt-4">
        
        
        <CurrentDay />
        <div className="my-6">
          <PriviousDay />
        </div>
      </div>

    </div>

  );
}

export default App;