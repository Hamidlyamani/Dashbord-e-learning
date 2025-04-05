import chat_option from "@/assets/imgs/chat_option.png"
import chat_edit from "@/assets/imgs/edit_message.png"


import { useState } from "react";

type message = {
    text: string;
    date: string;
    isMe: boolean;
    user?: string;
    user_img?: string;
}
export function Message(data: message) {


    const [isOpen, setIsOpen] = useState(false);





    return (
        <>
            <div className={`message received group flex gap-2 relative w-fit max-w-1/2 ${ data.isMe?" ml-auto flex flex-col justify-end items-end":""} `}>
                {data.isMe ? '' : <img src={data.user_img} alt='' className=" object-cover w-[50px] h-[50px] rounded-full" />}
                <div >
                    <div className="flex gap-2 items-end ">{!data.isMe ? <p className="font-Urb_medium  text-[#515151]">{data.user}</p> : ''}
                        <p className={`text-[12px] text-[#A0A0A0] pb-0.25 ${data.isMe ?"text-right":""}`}>10:30 AM</p></div>
                    <div className={`my-2 border  rounded-[14px] p-4 py-3 text-[18px] shadow-[0_1px_4px_rgba(0,0,0,0.15)] ${data.isMe ? " bg-blue text-white rounded-tr-[0]  " :"rounded-tl-[0]"}`}>
                        <p>
                            {data.text}
                        </p>

                    </div>
                    {!data.isMe ? <>  <button onClick={() => setIsOpen(!isOpen)} className="absolute -right-16 top-14 -translate-y-1/2 bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <img src={chat_option} alt="" />
                    </button>
                        {isOpen && (
                            <div className="absolute -right-54 top-8 z-3 bg-white shadow-md rounded-lg py-2 px-4 border">
                                <button className="block text-gray-700 hover:bg-gray-100 px-4 py-2 w-full text-left cursor-pointer ">Répondre</button>
                                <button className="block text-gray-700 hover:bg-gray-100 px-4 py-2 w-full text-leftcursor-pointer ">Réagir</button>
                                <button className="block text-gray-700 hover:bg-gray-100 px-4 py-2 w-full text-left">Transférer</button>
                            </div>
                        )}</> : 
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <img src={chat_edit} alt="" />
                        </button>}
                </div>
            </div>
           
        </>
    )
}