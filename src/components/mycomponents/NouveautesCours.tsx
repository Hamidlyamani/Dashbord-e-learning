

import nouveau_cour from '@/assets/imgs/nouveau_cour.png'
import { NouveauCour } from './NouveauCour'
import { useRef, useState } from 'react';

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
    img_cour: nouveau_cour,
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
    }, {
        title: 'Cour_test 4',
        img_cour: nouveau_cour,
        prix: 950,
        prof: 'Prof. X de Y',
        duration: "22 Hours",
        rating: 1.4,
        totalReviews: 268,
        total_apprenants: 563,
        nouveau: true
    }]
export function NouveautesCours() {
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
        const maxIndex = NouveauCours.length - cardsPerView;
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
                <div className=" ">
                    <div className="flex justify-between items-center  ">
                        <div className='flex gap-6 items-center '>
                            <h3 className="font-urb_bold text-[25px] text-background">Mon apprentissage</h3>
                            <a href="" className='text-blue underline flex gap-1 items-center text-[15px] '>Voir plus <span className='block border-t w-[9px] h-[9px]  border-blue border-r rotate-45'></span></a>
                        </div>
                        <div className="flex gap-2">
                            <div className={`cursor-pointer  ${scrollIndex === 0 ? "opacity-55 " : ""}`} onClick={handlePrev} ><img src={backicon} alt="" /></div>
                            <div className={`cursor-pointer ${scrollIndex >= NouveauCours.length - cardsPerView ? "opacity-55" : ""}`} onClick={handleNext}><img src={nexticon} alt="" /></div>
                        </div>
                    </div>

                    <div
                        className="flex gap-4 overflow-hidden"
                        ref={scrollRef}
                    >
                        {NouveauCours.map((cour, index) => (
                            <div key={index} className="w-[calc(100%/3-1rem)] flex-shrink-0">
                                <NouveauCour key={cour.title} {...cour} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>)
}