
import { CustomSelect } from '../ui/costum_dropdown'
import { ChartXY } from './chartXY'


export function MonActivite() {
    const chartData = [
        { jour: "Lundi", Lecture: 20, Videos: 24, Tests: 8 },
        { jour: "mardi", Lecture: 21, Videos: 20, Tests: 4 },
        { jour: "mercredi", Lecture: 18, Videos: 22, Tests: 12 },
        { jour: "Jeudi", Lecture: 14, Videos: 26, Tests: 11 },
        { jour: "vendredi", Lecture: 16, Videos: 19, Tests: 9 },
        { jour: "Samedi", Lecture: 17, Videos: 18, Tests: 8 },
        { jour: "dimanche", Lecture: 11, Videos: 17, Tests: 16 },
    ]
    return (
        <>
            <div className="bg-white p-4 py-2 rounded-[10px]   ">
                <div className='flex justify-between'><h4 className="text-background text-[14px] font-urb_bold">Mon activité</h4> <div className=""><CustomSelect /></div></div>
                <div className="flex gap-4 mt-2">
                    <div className="w-2/3">
                        <ChartXY chartData={chartData} />
                    </div>
                    <div className="w-1/3 grid grid-cols-2 gap-x-2">
                        <div className="bg-green flex justify-center items-center h-[66px] rounded-[10px] text-white flex-col  "><div>20</div> <span className='text-[8px] block'>Lecture</span></div>
                        <div className="bg-orange flex justify-center items-center h-[66px] rounded-[10px] text-white flex-col  "><div>28</div> <span className='text-[8px] block'>Vidéos</span></div>
                        <div className="bg-blue flex justify-center items-center h-[66px] rounded-[10px] text-white flex-col  "><div>10</div> <span className='text-[8px] block'>Tests</span></div>
                        <div className="bg-yallow flex justify-center items-center h-[66px] rounded-[10px] text-white flex-col  "><div>32</div> <span className='text-[8px] block'>Devoirs</span></div>

                    </div>

                </div>
            </div>
        </>
    )
}