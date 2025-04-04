import chart_temps from '@/assets/imgs/chart_temps.png'
import { CustomSelect } from '../ui/costum_dropdown'
import chart_activite from '@/assets/imgs/chart_activite.png'


export function MonActivite() {

    return (
        <>
            <div className="bg-white p-4 py-2 rounded-[10px]   ">
                <div className='flex justify-between'><h4 className="text-background text-[14px] font-urb_bold">Mon activité</h4> <div className=""><CustomSelect /></div></div>
                <div className="flex gap-2 my-2">
<div className="w-2/3"><img src={chart_activite} alt="" /></div>
                    <div className="w-1/3 grid grid-cols-2 gap-2">
                        <div className="bg-green flex justify-center items-center h-[56px] rounded-[10px] text-white flex-col  "><div>20</div> <span className='text-[8px] block'>Lecture</span></div>
                        <div className="bg-orange flex justify-center items-center h-[56px] rounded-[10px] text-white flex-col  "><div>28</div> <span className='text-[8px] block'>Vidéos</span></div>
                        <div className="bg-blue flex justify-center items-center h-[56px] rounded-[10px] text-white flex-col  "><div>10</div> <span className='text-[8px] block'>Tests</span></div>
                        <div className="bg-yallow flex justify-center items-center h-[56px] rounded-[10px] text-white flex-col  "><div>32</div> <span className='text-[8px] block'>Devoirs</span></div>

                    </div>

                </div>
            </div>
        </>
    )
}