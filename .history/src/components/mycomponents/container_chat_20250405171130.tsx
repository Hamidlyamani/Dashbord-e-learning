import { user } from "./conversation"

export function ContainerChat(data: user) {

    const messages = [{
        text: "Absolutely! I'm thinking of going for a hike on Saturday. How about you?",
        date: "10:30 AM",
        isMe: false,
        user: "Grace Miller",
        user_img: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        text: "Absolutely! I'm thinking of going for a hike on Saturday. How about you?",
        date: "10:30 AM",
        isMe: true,
    }]


    return (
        <>
            <div className="w-3/4 bg-white shadow-xl relative rounded-[15px] max-h-full overflow-auto ">
                <div className="flex justify-between py-2 px-8 items-start border-b border-[#DFDFDF] w-full ">
                    <div className="flex gap-2">
                        <img src={data.avatar} alt='' className=" object-cover w-[56px] h-[56px] rounded-full" />
                        <div >
                            <div className="flex gap-2 items-center"><p className="font-Urb_medium text-[20px] text-[##515151]">{data.name}</p> <p className="text-blue text-[14px] ">online</p></div>
                            <span className={text - [10px] px-2 py-0.75 relative -top-1 font-Urb_medium rounded bg-Light_green }>
                            {data.role}
                        </span>
                    </div>
                </div>
            </div>
            <div className="containerMessages py-2 px-8 relative">
                {messages.map((message) => {
                    return <Message key={message.text} {...message} />
                })}
            </div>
            <div className="flex justify-end p-4 items-center border-t bottom-0 w-full absolute ">
                <div className=""><img src={emoji_button} alt="" /></div>  <input type="text" placeholder="Envoyer un message" className="outline-none w-full border-none px-4 py-2 text-[#717171]" />
                <div className=""><img src={attache_button} alt="" /></div> <button className="bg-blue text-white px-4 py-2 flex items-center gap-2 rounded-md">Envoyer<span className=""><img src={sand_button} alt="" /></span></button>
            </div>
        </div >
        </>
    )
}