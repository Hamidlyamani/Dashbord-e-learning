
import back from '@/assets/imgs/arrow-left.png'

import { AppSidebar } from "@/components/app-sidebar"
import { CustomSelect } from '@/components/ui/costum_dropdown'
import { FullCalendar } from '@/components/ui/fullCalender'

import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
export default function CalendarPage() {
    const customContentDays = {
        "2025-04-07": [
            { label: "Cours", color: "bg-orange", prof: "Mr X d'anglais" },
            { label: "Cours", color: "bg-green", prof: "Mr X d'anglais" },
        ],

        "2025-04-09": [
            { label: "Cours", color: "bg-red", prof: "Mr X d'anglais" },
        ],
        "2025-04-16": [
            { label: "Cours", color: "bg-green", prof: "Mr X d'anglais" },
        ],
        "2025-04-12": [
            { label: "Cours", color: "bg-red", prof: "Mr X d'anglais" },
        ],
        "2025-05-12": [
            { label: "test", color: "bg-red", prof: "just test" },
        ],

        "2025-04-04": [
            { label: "Cours", color: "bg-yallow", prof: "Mr X d'anglais" },
        ],
    }
    return (
        <div className=" p-4 pl-12 bg-white">
           <div className="flex item-center gap-2">
                <a href="#" className='self-center'><img src={back} alt="" /></a>
             <h3 className="font-urb_bold text-[25px] text-background">Messagerie</h3>
            </div><div className="relative">
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <div className="flex flex-1 flex-col relative gap-4 px-4">
                            <CustomSelect className=/>
                            <FullCalendar customContentDays={customContentDays} />
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </div>
        </div>
    )
}
