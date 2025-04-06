
import back from '@/assets/imgs/arrow-left.png'

import { AppSidebar } from "@/components/app-sidebar"

import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
export default function CalendarPage() {
    return (
        <div className=" p-4 pl-12 bg-white">
           <div className="flex">
            <a href="#"><img src={back} alt="" /></a>
             <h3 className="font-urb_bold text-[25px] text-background">Messagerie</h3>
            </div><div className="relative">
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <div className="flex flex-1 flex-col gap-4 p-4">
                            <div className="grid auto-rows-min gap-4 md:grid-cols-5">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div key={i} className="aspect-square rounded-xl bg-muted/50" />
                                ))}
                            </div>
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </div>
        </div>
    )
}
