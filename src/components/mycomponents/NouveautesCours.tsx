

import nouveau_cour from '@/assets/imgs/nouveau_cour.png'
import { NouveauCour } from './NouveauCour'


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
        prix: 1050,
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
    }, ]
export function NouveautesCours() {

    return (
        <>
            <div>
                <div className=" ">
                    <div className='flex gap-6 items-center '>
                        <h3 className="font-urb_bold text-[25px] text-background">Mon apprentissage</h3>
                        <a href="" className='text-blue underline flex gap-1 items-center text-[15px] '>Voir plus <span className='block border-t w-[9px] h-[9px]  border-blue border-r rotate-45'></span></a>
                    </div>
                    <div className="flex gap-4 my-2">
                    {
                            NouveauCours.map((cour) => {
                                return <NouveauCour key={cour.title} {...cour} />
                         })} 
                    </div>
                </div>
            </div>
        </>)
}