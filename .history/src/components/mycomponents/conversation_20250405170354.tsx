
import { Search } from "lucide-react";
import pin from '@/assets/imgs/pin.png'
import message_icon from '@/assets/imgs/message_chat.png'



type Conversation = {
    
    id: number
        name: string,
    role: string,
    roleColor: string,
    message: string,
    time: string,
    avatar: string
}

type UserChatProps = user & {
    onClick?: () => void
}

export function User_chat({ name, role, roleColor, message, time, avatar, onClick }: UserChatProps) {
    return (
        <div
            onClick={onClick} className="flex justify-between items-start mt-3 w-full ">
                                        <div className="flex gap-2 ">
                                            {/* Avatar */}
                                            <img src={chat.avatar} alt={chat.name} className=" object-cover w-[58px] h-[58px] rounded-full" />

                                            {/* Message Details */}
                                            <div >
                                                <p className="font-Urb_medium  text-[#717171]">{chat.name}</p>
                                                <span className={`text-[8px] px-1 py-0.5 relative -top-2.5 font-Urb_medium rounded ${chat.roleColor}`}>
                                                    {chat.role}
                                                </span>
                                                <p className="text-[12px] -top-2.5 relative text-gray-500">{chat.message}</p>
                                            </div>
                                        </div>

                                        {/* Time */}
                                        <p className="text-[14px] text-[#A0A0A0] pt-2">{chat.time}</p>
                                    </div>
                             
                        
                        
        </>
    )
}