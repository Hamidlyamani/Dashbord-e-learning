import icon_1 from '@/assets/imgs/icon_cours_det_1.png'
import icon_2 from '@/assets/imgs/icon_cours_det_2.png'
import icon_3 from '@/assets/imgs/icon_cours_det_3.png'
import { ChartSmallProps, Chart_Small } from './chartSmall'


type details_cour = {
    title: string
    img_cour: string
    chart_cours: ChartSmallProps
    prof: string
    duration: string
    date: string
    temps_rest: string
    chart_cour_details: ChartSmallProps[]
}



export function MonCour(details:details_cour) {

    return (
        <>
            <div className="w-1/3 bg-white rounded-[15px]">
                <div className="overflow-hidden ">
                    <img src={details.img_cour} alt="" className='w-full' />
                </div>
                <div className="px-5 py-4">
                    <div className="">
                        <div className="flex justify-between"><h5 className='font-urb_bold text-[20px]'>{details.title}</h5><div className="chart w-[35px]"> <Chart_Small {...details.chart_cours} /></div></div>
                    </div>

                    <div className="details flex flex-wrap ">
                        <div className="flex w-1/2 items-center gap-1">
                            <div className='flex justify-center items-center'><img src={icon_1} alt="" /></div>
                            <p className='text-[12px] font-urb_bold text-[#556B83]'>{details.prof}</p>
                        </div>
                        <div className="flex w-1/2  gap-1">
                            <div className='flex justify-center items-center'><img src={icon_3} alt="" /></div>
                            <p className='text-[12px] font-urb_bold text-[#556B83]'>{details.duration}</p>
                        </div>
                        <div className="flex w-1/2  gap-1">
                            <div className='flex justify-center items-center'> <img src={icon_2} alt="" /></div>
                            <p className='text-[12px] font-urb_bold text-[#556B83]'>{details.date}</p>
                        </div>
                        <div className="flex w-1/2  gap-1">
                            <div className='flex justify-center items-center'>  <img src={icon_3} alt="" /></div>
                            <p className='text-[12px] font-urb_bold text-[#556B83]'>{details.temps_rest}</p>
                        </div>
                    </div>
                    <div className="resultat mt-2">
                        <div className='text-[10px]'>Résultats</div>
                        <div className="flex justify-between my-1">
                            <div className="charts flex gap-1 items-center">
                                <div className="chart w-[35px]"> <Chart_Small {...details.chart_cour_details} /></div>
                                {
                                    details.chart_cour_details.map((chartinfo) => {
                                        return <MonCour key={cour.title} {...cour} />
                                    })
                                }
                               
                            </div>
                            <div className="butten bg-blue text-white flex items-center gap-2 rounded-[7px] px-6 py-1 text-[10px] font-urb_bold"> Continuer <span className='block border-t w-[5px] h-[5px]  border-white border-r rotate-45'></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}