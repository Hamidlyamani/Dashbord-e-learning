
import { ChartBig } from './charBig'



export function TempsApprentissage() {

    return (
        <>
            <div className="bg-white py-3 px-2 rounded-[10px]  ">
                <h4 className='text-center text-background text-[14px] font-urb_bold'>Temps d'apprentissage</h4>
                <div className="chart_temps_container flex justify-center text-center mt-1.5 ">
                    <ChartBig />
                </div>
                <div className="lebal_chart w-[80%] flex justify-between flex-wrap mx-auto">
                    <div className="flex flex-col items-start justify-start">
                        <div className='  flex justify-center'>  <div className='  flex gap-2  items-center'> <div className="color w-[8px] h-[8px] rounded-full bg-green "></div> <span className="desc text-[8px] ">Lecture</span></div></div>
                        <div className='  flex justify-center '><div className='  flex gap-2  items-center'> <div className="color w-[8px] h-[8px] rounded-full bg-orange "></div> <span className="desc text-[8px] ">Vidéos</span></div></div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className=' flex justify-center '><div className=' flex gap-2  items-center'> <div className="color w-[8px] h-[8px] rounded-full bg-blue "></div> <span className="desc text-[8px] ">Tests</span></div></div>
                        <div className=' flex justify-center '><div className='  flex gap-2  items-center'> <div className="color w-[8px] h-[8px] rounded-full bg-yallow "></div> <span className="desc text-[8px] ">Devoirs</span></div></div>
                    </div>
                </div>
            </div>
        </>
    )
}