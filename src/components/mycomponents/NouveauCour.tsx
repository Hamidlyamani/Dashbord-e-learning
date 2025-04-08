import icon_1 from '@/assets/imgs/icon_NouveauCours.png'
import icon_2 from '@/assets/imgs/timerNouveauCours.png'
import { Rating } from '../ui/rating'


type NouveauCour = {
    title: string
    img_cour: string
    prix: number
    prof: string
    duration: string
    rating: number
    totalReviews: number
    total_apprenants: number
    nouveau: boolean
}



export function NouveauCour(data: NouveauCour) {
    const avatars = [
        "https://randomuser.me/api/portraits/women/1.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg",
        "https://randomuser.me/api/portraits/women/3.jpg",
        "https://randomuser.me/api/portraits/women/4.jpg",
    ];


    return (
        <>
            <div className=" bg-white rounded-[15px] relative">
                {data.nouveau ? (<div className="absolute bg-[#FFCFCC] text-red top-4 left-4 px-2 py-0.5 rounded-[4px] text-[8px] font-Urb_medium uppercase ">NOUVEAU</div>) : ''}
                <div className="overflow-hidden ">
                    <img src={data.img_cour} alt="" className='w-full' />
                </div>
                <div className="px-5 py-4">
                    <div className="">
                        <div className="flex justify-between"><h5 className='font-urb_bold text-[20px]'>{data.title}</h5></div>
                    </div>

                    <div className="details flex flex-wrap gap-4 items-center justify-between ">
                        <div className="details gap-4  items-center  flex">
                            <div className="flex  items-center gap-1">
                                <div className='flex justify-center items-center'><img src={icon_1} alt="" /></div>
                                <p className='text-[12px] font-urb_bold text-[#556B83]'>{data.prof}</p>
                            </div>
                            <div className="flex   gap-1">
                                <div className='flex justify-center items-center'><img src={icon_2} alt="" /></div>
                                <p className='text-[12px] font-urb_bold text-[#556B83]'>{data.duration}</p>
                            </div>
                        </div>
                        <div className="prix text-background font-bold text-[24px] ">{data.prix} $</div>
                    </div>
                    <div className=" mt-2">
                        <div className=''><Rating rating={data.rating} totalReviews={data.totalReviews} /></div>
                        <div className="flex justify-between my-1">
                            <div className="charts flex gap-1 items-center">


                                <div className="flex items-center space-x-2">
                                    <div className="flex -space-x-2">
                                        {avatars.map((src, index) => (
                                            <img
                                                key={index}
                                                src={src}
                                                alt="User"
                                                className="w-[26px] h-[26px] rounded-full border-2 border-white shadow-lg"
                                            />
                                        ))}
                                    </div>
                                    <span className="text-gray-500 text-[11px] font-Urb_medium ">+{data.total_apprenants} apprenants</span>
                                </div>


                            </div>
                            <div className="butten bg-blue text-white flex items-center gap-2 rounded-[7px] px-6 py-1 text-[10px] font-urb_bold">S’inscrire</div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}