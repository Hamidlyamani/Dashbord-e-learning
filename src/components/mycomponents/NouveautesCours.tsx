

import nouveau_cour from '@/assets/imgs/nouveau_cour.png'
import nouveau_cour_2 from '@/assets/imgs/cours_3.png'
import { NouveauCour } from './NouveauCour'
import { useEffect, useState } from 'react';

import backicon from '@/assets/imgs/backicon.png'
import nexticon from '@/assets/imgs/nexticon.png'

const NouveauCours = [{
    title: 'Cour_test',
    img_cour: nouveau_cour,
    prix: 845,
    prof: 'Prof. X de Y',
    duration: "3 Hours",
    rating: 3.4,
    totalReviews: 7568,
    total_apprenants: 4563,
    nouveau: true
}, {
    title: 'Cour_hamid',
    img_cour: nouveau_cour_2,
    prix: 150,
    prof: 'Prof. hamid de Y',
    duration: "8 Hours",
    rating: 5,
    totalReviews: 1568,
    total_apprenants: 14563,
    nouveau: false
}, {
    title: 'Cour_test 3',
    img_cour: nouveau_cour,
    prix: 150,
    prof: 'Prof. X de Y',
    duration: "22 Hours",
    rating: 1.4,
    totalReviews: 268,
    total_apprenants: 563,
    nouveau: true
    },
    {
        title: 'Cour_test 4',
        img_cour: nouveau_cour_2,
        prix: 950,
        prof: 'Prof. X de Y',
        duration: "22 Hours",
        rating: 1.4,
        totalReviews: 268,
        total_apprenants: 563,
        nouveau: true
    }]
export function NouveautesCours() {
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
    
    const maxStartIndex = NouveauCours.length - cardsPerView;
    
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
    
    const visibleCourses = NouveauCours.slice(startIndex, startIndex + cardsPerView);
    return (
        <>
            <div>
                <div className=" mt-4 flex justify-between items-center">
                    <div className="flex gap-6 items-center">
                        <h3 className="font-urb_bold text-[25px] text-background">Mon apprentissage</h3>
                        <a href="#" className="text-blue underline flex gap-1 items-center text-[15px]">
                            Voir plus <span className="block border-t w-[9px] h-[9px] border-blue border-r rotate-45"></span>
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
                        <NouveauCour key={startIndex + index} {...cour} />
                    ))}
                </div>
            </div>
        </>)
}