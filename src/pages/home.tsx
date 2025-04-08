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
            <div className="flex bg-gray-200 overflow-hidden ">
                <div className="w-3/4 max-w-3/4 overflow-hidden  p-4 pl-12">
                    <h3 className="font-urb_bold text-[25px] text-background">Preview</h3>
                    <div className="flex gap-4 my-2">
                        <div className="w-2/6 ">
                            <CoursPreviewContainer />
                        </div>
                        <div className="w-1/6 ">
                            <TempsApprentissage />
                        </div>
                        <div className="w-3/6 ">
                            <MonActivite />
                        </div>
                    </div>
                    <MonApprentissage />
                    <NouveautesCours />

                </div>
                <div className="w-1/4 bg-white rounded-tl-[40px] px-10 py-6">
                    <ProchainesEcheances />
                    <Calendrier />
                    <Newsroom />
                </div>

            </div>


        </>
    )
}