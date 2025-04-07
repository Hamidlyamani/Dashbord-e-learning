import { AppSidebar } from "@/components/app-sidebar-dashboard"
import { Header } from "@/components/mycomponents/header"

import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar-dashboard"
import { ChartXY } from "@/components/mycomponents/chartXY"
import { Home } from "@/pages/home"
export default function Page() {
    const chartData = [
        { jour: "Lundi", Lecture: 26, Videos: 24, Tests: 8 },
        { jour: "mardi", Lecture: 20, Videos: 20, Tests: 4 },
        { jour: "mercredi", Lecture: 18, Videos: 22, Tests: 12 },
        { jour: "Jeudi", Lecture: 14, Videos: 26, Tests: 11 },
        { jour: "vendredi", Lecture: 16, Videos: 19, Tests: 9 },
        { jour: "Samedi", Lecture: 17, Videos: 17, Tests: 8 },
        { jour: "dimanche", Lecture: 11, Videos: 17, Tests: 16 },
    ]
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Header />
                <div className="flex flex-1 flex-col gap-4 relative overflow-hidden  rounded-tl-4xl ">
                    <Home />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
