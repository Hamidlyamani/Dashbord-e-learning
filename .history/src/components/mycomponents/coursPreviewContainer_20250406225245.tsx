
import { CoursPreview } from "./coursPreview";
import chart from '@/assets/imgs/chart1.png'


const data = [{
    title: "Test Course_1",
    quiz: "Quiz_1",
    moyenne: 12,
    classement: 13,
    chart:  {//+
        type: "cours",//+
        number: 10,//+
        text: "2",//+
        width: 20,//+
    },
    url:"#"
},
    {
        title: "Test Course_2",
        quiz: "Quiz_1",
        moyenne: 18,
        classement: 23,
      chart:  {//+
        type: "cours",//+
        number: 99,//+
        text: "19",//+
        width: 20,//+
    },
        url: "#"
    },
    {
        title: "Test Course_3",

        
        quiz: "Quiz_1",
        moyenne: 10,
        classement: 7,
        chart: {//+
            type: "cours",//+
            number: 70,//+
            text: "16",//+
            width: 20,//+
        },
        url: "#"
    },]
export function CoursPreviewContainer() {
  
  
    return (
        <>
            <div className="bg-compenent  p-4 py-1 rounded-[15px] ">
                {data.map((data) => {
                    return <CoursPreview key={data.title} {...data} />
                })
                }
            </div>
        </>
    )
}