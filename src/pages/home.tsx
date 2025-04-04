import { MonApprentissage } from "@/components/mycomponents/MonApprentissage";
import { CoursPreviewContainer } from "@/components/mycomponents/coursPreviewContainer";
import { MonActivite } from "@/components/mycomponents/monActivite";
import { TempsApprentissage } from "@/components/mycomponents/temps";

export function Home() {
    

    return (
        <>
            <div className="flex ">
                <div className="w-3/4  p-4 pl-12">
                    <h3 className="font-urb_bold text-[25px] text-background">Preview</h3>
                    <div className="flex gap-4 my-2">
                        <div className="w-2/6 ">
                            <CoursPreviewContainer/>
                        </div>
                        <div className="w-1/6 ">
                            <TempsApprentissage/>
                        </div>
                        <div className="w-3/6 ">
                            <MonActivite/>
                        </div>
                    </div>
                    <MonApprentissage/>
                    <h3>Mon apprentissage</h3>
                    <div className="flex gap-4">
                        <div className="w-1/3 bg-red">gg</div>
                        <div className="w-1/3 bg-red">hhh</div>
                        <div className="w-1/3 bg-red">fdd</div>
                    </div>
                    <h3>Nouveautés de cours</h3>
                    <div className="flex gap-4">
                        <div className="w-1/3 bg-red">gg</div>
                        <div className="w-1/3 bg-red">hhh</div>
                        <div className="w-1/3 bg-red">fdd</div>
                    </div>
                </div>
                <div className="w-1/4 bg-white">gg</div>

        </div>
        
        
        </>
    )
}