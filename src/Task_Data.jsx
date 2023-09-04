const currentDayData = [
 
    {
      message: "New task assigned to you",
        icon: "https://i.postimg.cc/Kc3Cg7mg/bx-bxs-user-account.png"
    },
    {
      message: "New feedback recieved for Task Name",
      icon: "https://i.postimg.cc/xjFHBHmg/fluent-person-feedback-16-filled.png"
    },
    {
      message: "Task marked completed by you",
      icon: "https://i.postimg.cc/Mp0nZjnC/akar-icons-check.png"
    },
    {
      message: "Task Name updated for journey Journey Name",
      icon: "https://i.postimg.cc/GhGFYtBQ/ic-outline-browser-updated.png"
        },
    {
      message: "Follow up on feedback for Task Name completed on Date XX/YY/ZZZZ",
      icon: "https://i.postimg.cc/G2f9MMsG/ri-chat-follow-up-line.png"
    }
     ];

 const priviousDayData = [
    {
      message: "Meeting with Bobby Charlie",
      icon: "https://i.postimg.cc/gktsddbP/7573334-1.png"
    },
    {
      message: "Chat about Design Mentorship",
      icon: "https://i.postimg.cc/44zjJYWR/clarity-chat-bubble-outline-badged.png"
    }, 
    {
      message: "Critical delay observed in time line adherence",
      icon: "https://i.postimg.cc/cJg5PCvj/fluent-important-12-filled.png"
    },
    {
      message: "Finish project documentation for review (1-1 checkin)",
      icon: "https://i.postimg.cc/3wsbhhpw/gg-sand-clock.png"
    }];

 const currentDate = {
  date: 23, 
  day: "WED"
}
 const priviousDate = {
  date: 22, 
  day: "TUE"
};

export const dates = [currentDate, priviousDate ]

//Created a new area named Task, inside which there are two arrays which will help in rendering the components separately.

export const  task = [
  currentDayData,
  priviousDayData 
        
   ]