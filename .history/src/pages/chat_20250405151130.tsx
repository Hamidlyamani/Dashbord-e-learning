
import { Search } from "lucide-react";
import pin from '@/assets/imgs/pin.png'
import message_icon from '@/assets/imgs/message_chat.png'
import { Conversation } from "@/components/mycomponents/conversation";

import emoji_button from '@/assets/imgs/chat_emoji.png'
import attache_button from '@/assets/imgs/chat_attache.png'
import sand_button from '@/assets/imgs/chat_telegram.png'
import chat_option from '@/assets/imgs/chat_option.png'


export function Chat() {
    const conversations = [
        {
            id: 1,
            name: "Liam Anderson",
            role: "Formateur de X.highlight",
            roleColor: "bg-blue-200 text-blue-700",
            message: "En train d’écrire..",
            time: "04:50 PM",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
            panned: true,
        },

        {
            id: 2,
            name: "Lucas Williams",
            role: "Formateur de Y.highlight",
            roleColor: "bg-orange-200 text-orange-700",
            message: "Hey, how’s it going?",
            time: "10:30 AM",
            avatar: "https://randomuser.me/api/portraits/men/48.jpg",
            panned: false,
        },
        {
            id: 3,
            name: "Lucas Williams",
            role: "Formateur de Y.highlight",
            roleColor: "bg-orange-200 text-orange-700",
            message: "Hey, how’s it going?",
            time: "10:30 AM",
            avatar: "https://randomuser.me/api/portraits/women/49.jpg",
            panned: false,
        }, {
            id: 3,
            name: "Lucas Williams",
            role: "Formateur de Y.highlight",
            roleColor: "bg-orange-200 text-orange-700",
            message: "Hey, how’s it going?",
            time: "10:30 AM",
            avatar: "https://randomuser.me/api/portraits/women/49.jpg",
            panned: false,
        }, {
            id: 3,
            name: "Lucas Williams",
            role: "Formateur de Y.highlight",
            roleColor: "bg-orange-200 text-orange-700",
            message: "Hey, how’s it going?",
            time: "10:30 AM",
            avatar: "https://randomuser.me/api/portraits/women/49.jpg",
            panned: false,
        }, {
            id: 3,
            name: "Lucas Williams",
            role: "Formateur de Y.highlight",
            roleColor: "bg-orange-200 text-orange-700",
            message: "Hey, how’s it going?",
            time: "10:30 AM",
            avatar: "https://randomuser.me/api/portraits/women/49.jpg",
            panned: false,
        }, {
            id: 3,
            name: "Lucas Williams",
            role: "Formateur de Y.highlight",
            roleColor: "bg-orange-200 text-orange-700",
            message: "Hey, how’s it going?",
            time: "10:30 AM",
            avatar: "https://randomuser.me/api/portraits/women/49.jpg",
            panned: false,
        },


    ];

    return (
        <>
            <div className=" p-4 pl-12 h-[96%] overflow-hidden">
                <h3 className="font-urb_bold text-[25px] text-background">Messagerie</h3>
                <div className="flex gap-4 my-2 max-h-full ">
                    <div className="w-1/4 bg-white shadow-xl p-4 rounded-[15px] max-h-full overflow-auto">
                        <div className="hed">
                            <h5 className="font-bold text-[17px] text-background ">Discussions</h5>

                            <div classNam
                            e="flex items-center gap-2 border  w-full rounded-md px-4 py-3 my-2  text-[#B7B7B7]">
                                <Search className="w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Rechercher une discussion"
                                    className="outline-none bg-transparent w-full text-sm placeholder-[#B7B7B7]"
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-2 ">
                                <img src={pin} alt="" className="w-4 h-4" />
                                <span className="text-[12px] font-Urb_medium text-[#818181] ">Discussions épinglées</span>
                            </div>

                            <div className="mt-3">
                                {conversations
                                    .filter((chat) => chat.panned)
                                    .map((chat) => (
                                        <Conversation key={chat.id} {...chat} />
                                    ))}
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="flex items-center gap-2 ">
                                <img src={message_icon} alt="" className="w-4 h-4" />
                                <span className="text-[12px] font-Urb_medium text-[#818181] ">Tous les messages</span>
                            </div>
                            <div className="mt-3">
                                {conversations
                                    .filter((chat) => !chat.panned)
                                    .map((chat) => (
                                        <Conversation key={chat.id} {...chat} />
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 bg-white shadow-xl relative rounded-[15px] max-h-full overflow-auto ">
                        <div className="flex justify-between py-2 px-8 items-start border-b border-[#DFDFDF] w-full ">
                            <div className="flex gap-2">
                                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt='' className=" object-cover w-[56px] h-[56px] rounded-full" />
                                <div >
                                    <div className="flex gap-2 items-center"><p className="font-Urb_medium text-[20px] text-[##515151]">Grace Miller</p> <p className="text-blue text-[14px] ">online</p></div>
                                    <span className={`text-[10px] px-2 py-0.75 relative -top-1 font-Urb_medium rounded bg-Light_green `}>
                                        Apprenti
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="containerMessages py-2 px-8 relative">
                            <div className="message received flex gap-2">
                                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt='' className=" object-cover w-[50px] h-[50px] rounded-full" />
                                <div >
                                    <div className="flex gap-2 items-end "><p className="font-Urb_medium  text-[#515151]">Grace Miller</p> <p className="text-[12px] text-[#A0A0A0] pb-0.25 ">10:30 AM</p></div>
                                    <div className="my-2 border rounded-tl-[0] rounded-[14px] p-4 py-3 text-[18px] shadow-[0_1px_4px_rgba(0,0,0,0.15)] ">
                                        <p>
                                            Hi Jack! I'm doing well, thanks. Can't wait for the weekend!
                                        </p>
                                    </div>
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
                            </div>
                            <div className="message received group flex gap-2 relative w-fit">
                                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt='' className=" object-cover w-[50px] h-[50px] rounded-full" />
                                <div >
                                    <div className="flex gap-2 items-end "><p className="font-Urb_medium  text-[#515151]">Grace Miller</p> <p className="text-[12px] text-[#A0A0A0] pb-0.25 ">10:30 AM</p></div>
                                    <div className="my-2 border rounded-tl-[0] rounded-[14px] p-4 py-3 text-[18px] shadow-[0_1px_4px_rgba(0,0,0,0.15)] ">
                                        <p>
                                            Hi Jack! I'm doing well, thanks. Can't wait for the weekend!
                                        </p>
                                
                                    </div>
                                    <button className="absolute -right-16 top-14 -translate-y-1/2 bg-gray-200 text-gray-600 px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                        <img src={chat_option} alt="" />
                                    </button>
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
                            </div>
                        </div>
                        <div className="flex justify-end p-4 items-center border-t bottom-0 w-full absolute ">
                          <div className=""><img src={emoji_button} alt="" /></div>  <input type="text" placeholder="Envoyer un message" className="outline-none w-full border-none px-4 py-2 text-[#717171]" />
                            <div className=""><img src={attache_button} alt="" /></div> <button className="bg-blue text-white px-4 py-2 flex items-center gap-2 rounded-md">Envoyer<span className=""><img src={sand_button} alt="" /></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}