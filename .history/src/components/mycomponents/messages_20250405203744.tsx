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
            <div className="message received group flex gap-2 relative w-fit">
                {data.isMe ? '' : <img src={data.user_img} alt='' className=" object-cover w-[50px] h-[50px] rounded-full" />
                }  <div >
                    <div className="flex gap-2 items-end "><p className="font-Urb_medium  text-[#515151]">{data.user}</p> <p className="text-[12px] text-[#A0A0A0] pb-0.25 ">10:30 AM</p></div>
                    <div className="my-2 border rounded-tl-[0] rounded-[14px] p-4 py-3 text-[18px] shadow-[0_1px_4px_rgba(0,0,0,0.15)] ">
                        <p>
                            {data.text}
                        </p>

                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className="absolute -right-16 top-14 -translate-y-1/2 bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <img src={chat_option} alt="" />
                    </button>
                    {isOpen && (
                        <div className="absolute left-8 top-0 bg-white shadow-md rounded-lg py-2 px-4 border">
                            <button className="block text-gray-700 hover:bg-gray-100 px-4 py-2 w-full text-left">Répondre</button>
                            <button className="block text-gray-700 hover:bg-gray-100 px-4 py-2 w-full text-left">Réagir</button>
                            <button className="block text-gray-700 hover:bg-gray-100 px-4 py-2 w-full text-left">Transférer</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="message sended flex flex-col justify-end items-end ">
                <div className=" ">
                    <div className=" text-right text-[12px] text-[#A0A0A0]">
                        <p className=" " >10:50 PM</p></div>
                    <div className="my-2  rounded-tr-[0] rounded-[14px] bg-blue text-white p-4 py-3 text-[18px] shadow-[0_1px_4px_rgba(0,0,0,0.15)] ">
                        <p className="">
                            Hi Jack! I'm doing well, thanks. Can't wait for the weekend!
                        </p>
                    </div>
                </div>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <img src={chat_edit} alt="" />
                </button>
            </div>
        </>
    )
}