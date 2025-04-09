
import notif from '@/assets/imgs/notif.png'
import { useState } from 'react';

export function Header() {
    
    const options = [
        { name: "Reyad OUAHI", subtitle: "Apprenti", value: "user" },
        { name: "Mon profile", subtitle: "", value: "me" },
        { name: "Logout", subtitle: "", value: "logout" },
    ];

    const [selected, setSelected] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);
return (
        <>
            <div className="flex  justify-between align-middle  p-3 text-white ">
                <div className="pl-9">
                    <h2 className=" text-[35px]/[42px] line-hight ">
                        <span className="font-urb_bold">Hello,</span> Reyad Ouahi
                    </h2>
                </div>
                <div className=" flex gap-4 items-center ">
                    <div className="notif h-auto   ">
                        <img src={notif} className='' alt="" />
                    </div>
                    <div className="user flex align-middle gap-2">
                        <div className="logo w-[38px] h-[38px] flex items-center justify-center rounded-full bg-orange font-urb_bold text-[14px] "><span>R</span></div>
                        <div className="">
                        <div className="relative w-32">
                            {/* Selected Option (Button) */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center justify-between w-full " >
                                <div className='text-left '>
                                    <span className="block text-[14px]/[14px] font-urb_bold ">{selected.name}</span>
                                    {selected.subtitle && (
                                        <span className="bg-[#FFFFFF] text-blue text-[7px] font-semibold px-2 py-1 rounded-[4px]">
                                            {selected.subtitle}
                                        </span>
                                    )}
                                </div>
                                <span className="ml-2">&#9662;</span> {/* Small dropdown arrow */}
                            </button>

                            {/* Dropdown Menu */}
                            {isOpen && (
                                <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg z-10">
                                    {options.map((option) => (
                                        <div
                                            key={option.value}
                                            onClick={() => {
                                                setSelected(option);
                                                setIsOpen(false);
                                            }}
                                            className="cursor-pointer p-1 hover:bg-blue-100"
                                        >
                                            <span className="block text-lg font-Urb text-gray-800">{option.name}</span>
                                            {option.subtitle && (
                                                <span className="text-xs text-gray-500">{option.subtitle}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}