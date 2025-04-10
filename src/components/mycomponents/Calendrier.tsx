
import { CustomSelect } from '../ui/costum_dropdown'
import { Calendar } from "@/components/ui/calendar-dashboard"
import { useState } from 'react'




export function Calendrier() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <>
            <div className="bg-white  p-4 lg:p-0 rounded-[15px]  lg:rounded-[0px] mt-4 lg:mt-0">
                <div className='flex gap-6 items-center justify-between mt-4 '>
                    <h3 className="font-urb_bold text-[22px] text-background">Calendrier</h3>
                    <a href="" className='text-blue underline flex gap-1 items-center text-[15px] '>Voir plus <span className='block border-t w-[9px] h-[9px]  border-blue border-r rotate-45'></span></a>
                </div>
                <div className=" my-2">
                    <div className="flex justify-end">
                        
                        <CustomSelect/>
                    </div>

                    
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md relative -top-6.5 w-full"
                    />
                    
                </div>
            </div>
        </>)
}