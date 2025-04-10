import { Calendrier } from "@/components/mycomponents/Calendrier";
import { MonApprentissage } from "@/components/mycomponents/MonApprentissage";
import { NouveautesCours } from "@/components/mycomponents/NouveautesCours";
import { ProchainesEcheances } from "@/components/mycomponents/ProchainesEcheances";
import { CoursPreviewContainer } from "@/components/mycomponents/coursPreviewContainer";
import { MonActivite } from "@/components/mycomponents/monActivite";
import { Newsroom } from "@/components/mycomponents/newsroom";
import { TempsApprentissage } from "@/components/mycomponents/temps";

export function Home() {


    return (
        <>
            <div className="flex bg-gray-200 overflow-hidden flex-col lg:flex-row">
                <div className="w-full lg:w-4/6 xl:w-3/4  overflow-hidden  p-4 lg:pl-6 xl:pl-12">
                    <h3 className="font-urb_bold text-[25px]/[32px] text-background">Preview</h3>
                    <div className="flex gap-4 flex-col flex-wrap 2xl:flex-nowrap lg:flex-row my-2">
                        <div className="flex gap-4  w-full flex-wrap lg:flex-nowrap    2xl:w-3/6">
                            <div className="w-full  lg:w-4/6 xl:w-4/6 ">
                                <CoursPreviewContainer />
                            </div>
                            <div className="w-full lg:w-2/6 xl:w-2/6 ">
                                <TempsApprentissage />
                            </div>
                        </div>
                        <div className="w-full  2xl:w-3/6 ">
                            <MonActivite />
                        </div>
                    </div>
                    <MonApprentissage />
                    <NouveautesCours />

                </div>
                <div className="w-full lg:w-2/6 xl:w-1/4  lg:bg-white lg:rounded-tl-[40px] p-4  lg:px-4 lx:px-10  lx:py-6">
                    <ProchainesEcheances />

                    <Calendrier />
                    <Newsroom />
                </div>

            </div>


        </>
    )
}