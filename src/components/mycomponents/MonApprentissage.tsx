

import cours_1 from '@/assets/imgs/cours_1.png'
import cours_2 from '@/assets/imgs/cours_2.png'
import { MonCour } from './monCour'
import { useEffect, useState } from 'react';
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
        width: 19,
    },
    prof: 'Prof. X de Y',
    duration: "12 Hours",
    date: "9 Janvier 2025, 9h00 - 11h00",
    temps_rest: "10 heurs restantes",
    chart_cour_details: chart_cours
}, {
    title: "Cours_2",
    img_cour: cours_2,
    chart_cours: {
        type: "cours",
        number: 20,
        text: "20%",
        width: 19,
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
        width: 19,
    },
    prof: 'Prof. X de Y',
    duration: "3 Hours",
    date: "9 Janvier 2025, 9h00 - 11h00",
    temps_rest: "10 heurs restantes",
    chart_cour_details: chart_cours
}, {
    title: "Cours_4",
    img_cour: cours_2,
    chart_cours: {
        type: "cours",
        number: 90,
        text: "90%",
        width: 19,
    },
    prof: 'Prof. X de Y',
    duration: "3 Hours",
    date: "9 Janvier 2025, 9h00 - 11h00",
    temps_rest: "10 heurs restantes",
    chart_cour_details: chart_cours
},]





export function MonApprentissage() {
    const [cardsPerView, setCardsPerView] = useState(3);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const updateCardsPerView = () => {
            const width = window.innerWidth;
            if (width < 640) {
                // mobile
                setCardsPerView(1);
            } else if (width < 1024) {
                // tablet
                setCardsPerView(2);
            } else {
                // desktop
                setCardsPerView(3);
            }
        };

        updateCardsPerView(); // run once on load
        window.addEventListener("resize", updateCardsPerView);
        return () => window.removeEventListener("resize", updateCardsPerView);
    }, []);

    const maxStartIndex = cours.length - cardsPerView;

    const handleNext = () => {
        if (startIndex < maxStartIndex) {
            setStartIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex((prev) => prev - 1);
        }
    };

    const visibleCourses = cours.slice(startIndex, startIndex + cardsPerView);

    return (
        <div className=" mt-4 w-full overflow-x-hidden">
            <div className="flex justify-between items-center">
                <div className="flex gap-6 items-center">
                    <h3 className="font-urb_bold text-[25px] text-background">Mon apprentissage</h3>
                    <a
                        href="#"
                        className="text-blue underline flex gap-1 items-center text-[15px]"
                    >
                        Voir plus{" "}
                        <span className="block border-t w-[9px] h-[9px] border-blue border-r rotate-45" />
                    </a>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                        className={`cursor-pointer ${startIndex === 0 ? "opacity-50 pointer-events-none" : ""}`}
                    >
                        <img src={backicon} alt="Prev" />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={startIndex >= maxStartIndex}
                        className={`cursor-pointer ${startIndex >= maxStartIndex ? "opacity-50 pointer-events-none" : ""}`}
                    >
                        <img src={nexticon} alt="Next" />
                    </button>
                </div>
            </div>

              <div className=" flex gap-4 transition-all duration-300">
                               {visibleCourses.map((cour, index) => (
                                   <MonCour key={startIndex + index} {...cour} />
                               ))}
                           </div>
        </div>
    );
}