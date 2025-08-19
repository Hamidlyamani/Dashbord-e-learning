impo



import { useEffect, useState } from "react";
import { user } from "./conversation"
import { Message } from "./messages";



type user_and_messages = {
    user: number;
    messages: {
        text: string;
        date: string;
        isMe: boolean;
        user?: string;
        user_img?: string;
    }[];
}

export function ContainerChat(data: user) {


    const [userMessages, setUserMessages] = useState<user_and_messages | null>(null);


    const messages_of_users = [ {
        user: 2,
            messages: [
                {
                    text: "Hey, did you see the new Marvel movie? It was epic!",
                    date: "1:00 PM",
                    isMe: false,
                    user: "John Doe",
                    user_img: "https://randomuser.me/api/portraits/men/30.jpg"
                },
                {
                    text: "Yeah, it was awesome! I loved the action scenes.",
                    date: "1:02 PM",
                    isMe: true,
                },
                {
                    text: "Totally! And the plot twist at the end? Mind-blowing!",
                    date: "1:03 PM",
                    isMe: false,
                    user: "John Doe",
                    user_img: "https://randomuser.me/api/portraits/men/30.jpg"
                },
                {
                    text: "I know, right?! Can't wait for the next one.",
                    date: "1:05 PM",
                    isMe: true,
                }
            ]
    }, {
        user: 3,
            messages: [
                {
                    text: "I’m thinking of redecorating my apartment. Any ideas?",
                    date: "2:30 PM",
                    isMe: false,
                    user: "Sarah Green",
                    user_img: "https://randomuser.me/api/portraits/women/25.jpg"
                },
                {
                    text: "That sounds exciting! You could try a minimalist style.",
                    date: "2:32 PM",
                    isMe: true,
                },
                {
                    text: "Hmm, that sounds cool. I was also thinking about adding more plants.",
                    date: "2:34 PM",
                    isMe: false,
                    user: "Sarah Green",
                    user_img: "https://randomuser.me/api/portraits/women/25.jpg"
                },
                {
                    text: "Definitely, plants would add a fresh vibe. I’m all for it!",
                    date: "2:35 PM",
                    isMe: true,
                }
            ]
    }, {
        user: 4,
            messages: [
                {
                    text: "Have you tried that new cafe downtown? Their coffee is amazing!",
                    date: "5:00 PM",
                    isMe: false,
                    user: "Michael Lee",
                    user_img: "https://randomuser.me/api/portraits/men/50.jpg"
                },
                {
                    text: "Oh yeah, I went there last week! The cappuccino is a must-try.",
                    date: "5:02 PM",
                    isMe: true,
                },
                {
                    text: "I need to check it out again! Do they have good pastries too?",
                    date: "5:03 PM",
                    isMe: false,
                    user: "Michael Lee",
                    user_img: "https://randomuser.me/api/portraits/men/50.jpg"
                },
                {
                    text: "For sure! The croissants are to die for.",
                    date: "5:04 PM",
                    isMe: true,
                }
            ]
    }]

    useEffect(() => {
        let currentUserMessages = messages_of_users.find(item => item.user === data.id);

        if (currentUserMessages) {
            currentUserMessages.messages = currentUserMessages.messages.map(msg => {
                if (!msg.isMe) {
                    return {
                        ...msg,
                        user: data.name,
                        user_img: data.avatar
                    };
                }
                return msg;
            });
        }

        setUserMessages(currentUserMessages ?? null);
    
    }, [data]); 


    return (
        <>
            <div className="w-3/4 bg-white shadow-xl relative rounded-[15px] max-h-full overflow-auto ">
                <div className="flex justify-between py-2 px-8 items-start border-b border-[#DFDFDF] w-full ">
                    <div className="flex gap-2">
                        <img src={data.avatar} alt='' className=" object-cover w-[56px] h-[56px] rounded-full" />
                        <div >
                            <div className="flex gap-2 items-center"><p className="font-Urb_medium text-[20px] text-[##515151]">{data.name}</p> <p className="text-blue text-[14px] ">online</p></div>
                            <span className="text - [10px] px-2 py-0.75 relative -top-1 font-Urb_medium rounded bg-Light_green">
                            {data.role}
                        </span>
                    </div>
                </div>
            </div>
            <div className="containerMessages py-2 px-8 relative">
                    {userMessages?.messages?.map((message, index) => (
                    <Message key={index} {...message} />
                ))}
            </div>
            <div className="flex justify-end p-4 items-center border-t bottom-0 w-full absolute ">
                <div className=""><img src={emoji_button} alt="" /></div>  <input type="text" placeholder="Envoyer un message" className="outline-none w-full border-none px-4 py-2 text-[#717171]" />
                <div className=""><img src={attache_button} alt="" /></div> 
                <button className="bg-blue text-white px-4 py-2 flex items-center gap-2 rounded-md">Envoyer
                <span className=""><img src={sand_button} alt="" /></span></button>
            </div>
        </div >
        </>
    )
}