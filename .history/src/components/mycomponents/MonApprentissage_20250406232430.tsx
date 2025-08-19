

import cours_1 from '@/assets/imgs/cours_1.png'
import chart_cour_details from '@/assets/imgs/chart_cours_detials.png'
import { MonCour } from './monCour'

const chart_cours = [{
    type: "cours",
    number: 50,
    text: "11",
    width: 20,
}, {
    type: "cours",
    number: 70,
    text: "15",
    width: 20,
}, {
    type: "cours",
    number: 35,
    text: "7",
    width: 20,
}, {
    type: "cours",
    number: 25,
    text: "5",
    width: 20,
}, {
    type: "cours",
    number: 90,
    text: "18",
    width: 20,
}, {
    type: "cours",
    number: 99,
    text: "19",
    width: 20,
},
]
const cours = [{
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
    title: "Cours_2",
    img_cour: cours_1,
    chart_cours: {
        type: "cours",
        number: 9,
        text: "90%",
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
        number: 80,
        text: "80%",
        width: 20,
    },
    prof: 'Prof. X de Y',
    duration: "3 Hours",
    date: "9 Janvier 2025, 9h00 - 11h00",
    temps_rest: "10 heurs restantes",
    chart_cour_details: chart_cour_details
},]

export function MonApprentissage() {

    return (
        <>
            <div>
                <div className=" ">
                    <div className='flex gap-6 items-center '>
                        <h3 className="font-urb_bold text-[25px] text-background">Mon apprentissage</h3>
                        <a href="" className='text-blue underline flex gap-1 items-center text-[15px] '>Voir plus <span className='block border-t w-[9px] h-[9px]  border-blue border-r rotate-45'></span></a>
                    </div>
                    <div className="flex gap-4 my-2">
                        {cours.map((cour) => {
                            return <MonCour key={cour.title} {...cour} />
                        })}

                    </div>
                </div>
            </div>
        </>)
}