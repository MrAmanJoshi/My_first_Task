import React from "react"

const TaskPage=()=>{
  return (
<>
  <div className="flex ">
    
    <div className=" flex flex-col font-mono">
      
<h3 className="font-medium text-2xl ">WED</h3>
  <p className="text-slate-400 text-lg font-medium ml-2">Jan</p>
</div>
  
    <p className="p-4 rounded-lg bg-green-500 text-xl font-bold text-center ml-8 text-white">
 30
</p>
  </div>
  
<div className=" mt-6 ">
<p className="text-slate-400 text-lg mb-1">11:00 AM</p> 
          <div className="flex">
<img src="https://i.postimg.cc/Kc3Cg7mg/bx-bxs-user-account.png" className="w-8 h-8 rounded-full bg-red-300 mr-3"/>
            <div>
         <p className="text-lg"> Task marked completed by you</p>
              <div className="flex">
<img src="https://i.postimg.cc/DZhWJSyX/Photo.jpg" className="w-8 h-8 rounded-full bg-red-300 mr-3"/>
                <p className="text-slate-400 text-lg">mericoes kian</p> 
</div>

              </div>
</div>
  </div>


</>
  )
}


export default TaskPage;