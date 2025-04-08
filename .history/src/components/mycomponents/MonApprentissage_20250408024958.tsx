

import cours_1 from '@/assets/imgs/cours_1.png'
import { MonCour } from './monCour'
import { useState } from 'react';
import backicon from '@/assets/imgs/backicon.png'
import nexticon from '@/assets/imgs/nexticon.png'


const chart_cours = [{
    type: "cours",
    number: 50,
    text: "11",
    width: 15,
}, {
    type: "cours",
    number: 70,
    text: "15",
    width: 15,
}, {
    type: "cours",
    number: 35,
    text: "7",
    width: 15,
}, {
    type: "cours",
    number: 25,
    text: "5",
    width: 15,
}, {
    type: "cours",
    number: 90,
    text: "18",
    width: 15,
}, {
    type: "cours",
    number: 99,
    text: "19",
    width: 15,
},
]
const cours = [{
    title: "Cours_1",
    img_cour: cours_1,
    chart_cours: {
        type: "cours",
        number: 20,
        text: "20%",
        width: 20,
    },
    prof: 'Prof. X de Y',
    duration: "3 Hours",
    date: "9 Janvier 2025, 9h00 - 11h00",
    temps_rest: "10 heurs restantes",
    chart_cour_details: chart_cours
}, {
    title: "Cours_2",
    img_cour: cours_1,
    chart_cours: {
        type: "cours",
        number: 90,
        text: "90%",
        width: 20,
    },
    prof: 'Prof. X de Y',
    duration: "3 Hours",
    date: "9 Janvier 2025, 9h00 - 11h00",
    temps_rest: "10 heurs restantes",
    chart_cour_details: chart_cours
}, {
    title: "Cours_3",
    img_cour: cours_1,
    chart_cours: {
        type: "cours",
        number: 70,
        text: "70%",
        width: 20,
    },
    prof: 'Prof. X de Y',
    duration: "3 Hours",
    date: "9 Janvier 2025, 9h00 - 11h00",
    temps_rest: "10 heurs restantes",
    chart_cour_details: chart_cours
}, {
    title: "Cours_4",
    img_cour: cours_1,
    chart_cours: {
        type: "cours",
        number: 70,
        text: "70%",
        width: 20,
    },
    prof: 'Prof. X de Y',
    duration: "3 Hours",
    date: "9 Janvier 2025, 9h00 - 11h00",
    temps_rest: "10 heurs restantes",
    chart_cour_details: chart_cours
},
 {
    title: "Cours_5",
    img_cour: cours_1,
    chart_cours: {
        type: "cours",
        number: 70,
        text: "70%",
        width: 20,
    },
    prof: 'Prof. X de Y',
    duration: "3 Hours",
    date: "9 Janvier 2025, 9h00 - 11h00",
    temps_rest: "10 heurs restantes",
    chart_cour_details: chart_cours
}]

export function MonApprentissage() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 3;
    const cardWidth = 300; // px
    const gap = 16; // px
    const totalWidth = (cardWidth + gap) * cours.length;

    const nextSlide = () => {
        if (currentIndex < cours.length - visibleCards) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };
    return (
        <>
            <div>
                <div className=" ">
                    <div className="flex justify-between items-center  ">
                        <div className='flex gap-6 items-center '>
                            <h3 className="font-urb_bold text-[25px] text-background">Mon apprentissage</h3>
                            <a href="" className='text-blue underline flex gap-1 items-center text-[15px] '>Voir plus <span className='block border-t w-[9px] h-[9px]  border-blue border-r rotate-45'></span></a>
                        </div>
                        <div className="flex gap-2">
                            <div className='cursor-pointer ' onClick={prevSlide} ><img src={backicon} alt="" /></div>
                            <div className='cursor-pointer ' onClick={nextSlide}><img src={nexticon} alt="" /></div>
                        </div>
                    </div>
                    <div className='relative overflow-hidden w-full'>
                        <div className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
                                width: `${totalWidth}px`,
                            }}>
                            {cours.map((cour, index) => {
                                return (
                                <div key={index} className="w-[33.33332%] flex-shrink-0 px-2">
                                    <MonCour key={cour.title} {...cour} />
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
            </div >
        </>)
}