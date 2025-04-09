import small_image from '@/assets/imgs/small_cours.png'
import small_image2 from '@/assets/imgs/small_cours2.png'
import  Avatar   from '@/assets/imgs/small_Avatar.png'
import { Echeance } from './echeance'




export function ProchainesEcheances() {
    const echeances = [{
        title: 'Cour-2',
        img_echeances: small_image,
        avatar_prof: Avatar,
        prof: 'Prof Mr X d’anglais',
        date: '9 Janvier 2025, 9h00 - 11h00',
        duration: 'J-5',
        type: 'cour' as 'cour',
        url: '#',
    },{
        title: 'Test-44',
        img_echeances: small_image2,
        date: '9 Janvier 2025, 9h00 - 11h00',
        duration: '2min',
        type: 'test' as 'test',
        url: '#',
    },{
        title: 'Devoir à rendre',
        img_echeances: small_image,
        date: '9 Janvier 2025, 9h00 - 11h00',
        duration: 'Now',
        type: 'Devoir' as 'Devoir',
        url: '#',
    }]
    return (
        <>
            <div className='bg-white p-4 md:p-0 rounded-[15px]  md:rounded-[0px]  '>
                <div className='flex gap-6 items-center justify-between '>
                    <h3 className="font-urb_bold text-[22px] text-background">Prochaines échéances</h3>
                    <a href="" className='text-blue underline flex gap-1 items-center text-[15px] '>Voir plus <span className='block border-t w-[9px] h-[9px]  border-blue border-r rotate-45'></span></a>
                </div>
                <div className=" my-2">
                    {/* <Echeance {...echeance} /> */}


                     {
                        echeances.map((echeance) => {
                            return <Echeance key={echeance.title} {...echeance} />
                                             })} 
                </div>
            </div>
        </>)
}