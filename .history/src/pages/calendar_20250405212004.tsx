
import { Search } from "lucide-react";
import pin from '@/assets/imgs/pin.png'
import message_icon from '@/assets/imgs/message_chat.png'
import {  User_chat } from "@/components/mycomponents/conversation";


import { ContainerChat } from "@/components/mycomponents/container_chat";
import { useState } from "react";


export function CalendarPage() {

   

    const [selectedUser, setSelectedUser] = useState(users[0])
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

    return (
        <>
            <div className=" p-4 pl-12 h-[96%] overflow-hidden">
                <h3 className="font-urb_bold text-[25px] text-background">Messagerie</h3>
                <div className="flex gap-4 my-2 max-h-full ">
                    <div className="w-1/4 bg-white shadow-xl p-4 rounded-[15px] max-h-full overflow-auto">
                        <div className="hed">
                            <h5 className="font-bold text-[17px] text-background ">Discussions</h5>

                            <div className="flex items-center gap-2 border  w-full rounded-md px-4 py-3 my-2  text-[#B7B7B7]">
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
                                {users
                                    .filter((chat) => chat.panned)
                                    .map((chat) => (
                                        <User_chat
                                            key={chat.id}
                                            {...chat}
                                            onClick={() => {
                                                setSelectedUserId(chat.id);
                                                setSelectedUser(chat); // if you also need full data
                                            }}
                                            isActive={selectedUserId === chat.id}
                                        />
                                    ))}
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="flex items-center gap-2 ">
                                <img src={message_icon} alt="" className="w-4 h-4" />
                                <span className="text-[12px] font-Urb_medium text-[#818181] ">Tous les messages</span>
                            </div>
                            <div className="mt-3">
                                {users
                                    .filter((chat) => !chat.panned)
                                    .map((chat) => (
                                        <User_chat
                                            key={chat.id}
                                            {...chat}
                                            onClick={() => {
                                                setSelectedUserId(chat.id);
                                                setSelectedUser(chat); // if you also need full data
                                            }}
                                            isActive={selectedUserId === chat.id}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                     <ContainerChat {...selectedUser} />
                </div>
            </div>
        </>
    )
}