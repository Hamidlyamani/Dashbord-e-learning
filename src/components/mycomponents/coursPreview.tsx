import arrow from '@/assets/imgs/arrow-right.png'

type coursPreview = {
    title: string
    quiz: string
    moyenne:number
classement: number
    chart: string
    url:string
}

export function CoursPreview(details:coursPreview ) {

    return (
        <>
            <div className="bg-white p-2 rounded-[10px] flex items-center my-2 gap-4">

                <div className="w-1/2 flex gap-1 items-center">
                    <div className="chart_container w-[40px]">
                        <img src={details.chart} alt="" />
                    </div>
                    <div className="title text-background h-[30px]">
                        <div className='text-[13px] font-Urb_medium '>{details.title}</div>
                        <span className='text-[8px] -top-[10px] relative'>{details.quiz}</span>
                    </div>
                </div>
                <div className="w-1/2  flex  justify-between items-center">
                    <div className="right text-background opacity-[0.5]">
                        <div className="moyenne flex justify-between gap-8 text-[10px] "> <p>Moyenne de classe</p> <span className="number w-[20px] text-left font-Urb_Black">{details.moyenne}/32</span></div>
                        <div className="Classement flex justify-between gap-8 text-[10px]"> <p>Classement</p> <span className="number w-[20px] text-left font-Urb_Black">{details.classement}</span></div>
                    </div>
                    <a href={details.url}> <img src={arrow} alt="" /> </a>
                </div>
            </div>
        </>
    )
}