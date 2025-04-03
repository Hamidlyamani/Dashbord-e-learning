
import { CoursPreview } from "./coursPreview";
import chart from '@/assets/imgs/chart1.png'


const data = [{
    title: "Test Course_1",
    quiz: "Quiz_1",
    moyenne: 12,
    classement: 13,
    chart: chart,
    url:"#"
},
    {
        title: "Test Course_2",
        quiz: "Quiz_1",
        moyenne: 18,
        classement: 23,
        chart: chart,
        url: "#"
    },
    {
        title: "Test Course_3",
        quiz: "Quiz_1",
        moyenne: 10,
        classement: 7,
        chart: chart,
        url: "#"
    },]
export function CoursPreviewContainer() {
  
  
    return (
        <>
            <div className="bg-compenent p-4 rounded-[15px] my-2">
                {data.map((data) => {
                    return <CoursPreview key={data.title} {...data} />
                })
                }
            </div>
        </>
    )
}