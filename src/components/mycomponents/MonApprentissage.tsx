

import cours_1 from '@/assets/imgs/cours_1.png'
import { MonCour } from './monCour'
import { useRef, useState } from 'react';
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
        number: 50,
        text: "49%",
        width: 20,
    },
    prof: 'Prof. X de Y',
    duration: "12 Hours",
    date: "9 Janvier 2025, 9h00 - 11h00",
    temps_rest: "10 heurs restantes",
    chart_cour_details: chart_cours
}, {
    title: "Cours_2",
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
    title: "Cours_3",
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
        title: "Cours_4",
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
    }, ]

export function MonApprentissage() {

    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollIndex, setScrollIndex] = useState(0);
    const cardsPerView = 3;

    const scrollToIndex = (index: number) => {
        if (scrollRef.current) {
            const scrollContainer = scrollRef.current;
            const cardWidth = scrollContainer.offsetWidth / cardsPerView;
            scrollContainer.scrollTo({
                left: cardWidth * index,
                behavior: "smooth",
            });
        }
        setScrollIndex(index);
    };

    const handleNext = () => {
        const maxIndex = cours.length - cardsPerView;
        if (scrollIndex < maxIndex) {
            scrollToIndex(scrollIndex + 1);
        }
    };

    const handlePrev = () => {
        if (scrollIndex > 0) {
            scrollToIndex(scrollIndex - 1);
        }
    };
    return (
        <>
            <div>
                <div className="w-full overflow-x-hidden ">
                    <div className="flex justify-between items-center  ">
                        <div className='flex gap-6 items-center '>
                            <h3 className="font-urb_bold text-[25px] text-background">Mon apprentissage</h3>
                            <a href="" className='text-blue underline flex gap-1 items-center text-[15px] '>Voir plus <span className='block border-t w-[9px] h-[9px]  border-blue border-r rotate-45'></span></a>
                        </div>
                        <div className="flex gap-2">
                            <div className={`cursor-pointer  ${scrollIndex === 0?"opacity-55 ":""}` } onClick={handlePrev} ><img src={backicon} alt="" /></div>
                            <div className={`cursor-pointer ${scrollIndex >= cours.length - cardsPerView ? "opacity-55" : ""}`} onClick={handleNext}><img src={nexticon} alt="" /></div>
                        </div>
                    </div>
                      
                        <div
                            className="flex gap-4 overflow-hidden"
                            ref={scrollRef}
                        >
                            {cours.map((cour, index) => (
                                <div key={index} className="w-[calc(100%/3-1rem)] flex-shrink-0">
                                    <MonCour key={cour.title} {...cour} />
                                </div>
                            ))}
                        </div>
                   
                </div>
            </div>
        </>)
}