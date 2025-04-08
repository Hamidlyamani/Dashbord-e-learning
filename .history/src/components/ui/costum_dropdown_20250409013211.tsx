import { useState } from "react";
import calender from '@/assets/imgs/calender_black.png'
import arrow from '@/assets/imgs/arrow-right.png'

export function CustomSelect() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Cette semaine");

    const options = ["Cette semaine", "La semaine dernière", "Ce mois-ci", "Cette année"];

    return (
        <div className="relative inline-block z-10 ">
            {/* Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1 text-[9px] border rounded-lg shadow-sm bg-white text-gray-800"
            >
                <span className="text-xl"><img src={calender} alt="" /></span> {/* Calendar Icon (can replace with SVG) */}
                <span>{selectedOption}</span>
                <span className="text-xl rotate-90"><img src={arrow} alt="" /></span> {/* Down Arrow Icon */}
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-full bg-white border shadow-lg rounded-md">
                    {options.map((option) => (
                        <div
                            key={option}
                            onClick={() => {
                                setSelectedOption(option);
                                setIsOpen(false);
                            }}
                            className="px-4 py-2 text-[9px] hover:bg-gray-100 cursor-pointer"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
