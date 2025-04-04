import newsroom from '@/assets/imgs/img_news.png'
import arrow from '@/assets/imgs/arrow-right.png'

type nows = {
    title: string,
    img_nows: string,
    desc: string,
    url: string,
}


export function News(data: nows) {
    return (
        <>

            <div className="flex space-x-2  my-2 rounded-[15px] bg-white shadow-lg shadow-gray-300/50 ">
                <div className="news_img w-[30%]"><img className='rounded-[15px] object-cover h-full' src={data.img_nows} alt="" /></div>
                <div className="flex space-x-2 p-2 w-[70%]">
                    <div className='w-[90%]'>
                        <h6 className="title text-[15px] font-urb_bold ">{data.title}</h6>
                        <p className='text-[12px] font-Urb_medium text-[#BFC0C1] '>{data.desc}</p>
                    </div>
                    <a href={data.url} className='w-[10px] pt-2'>
                        <img src={arrow} alt="" />
                    </a>
                </div>
            </div>

        </>)
}