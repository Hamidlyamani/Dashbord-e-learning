
import back from '@/assets/imgs/arrow-left.png'

import { AppSidebar } from "@/components/app-sidebar"
import { Calendar } from '@/components/ui/calendar'

import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
export default function CalendarPage() {
    return (
        <div className=" p-4 pl-12 bg-white">
           <div className="flex item-center gap-2">
                <a href="#" className='self-center'><img src={back} alt="" /></a>
             <h3 className="font-urb_bold text-[25px] text-background">Messagerie</h3>
            </div><div className="relative">
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <div className="flex flex-1 flex-col gap-4 px-4">
                            <ullCalendar/>
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </div>
        </div>
    )
}
