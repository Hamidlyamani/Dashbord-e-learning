import arrow from '@/assets/imgs/arrow-right.png'

type echeance = {
    title: string,
    img_echeances: string,
    avatar_prof?: string,
    prof?: string,
    date: string,
    duration: string,
    type: 'test' | 'cour' | 'Devoir',
    url: string,
}


export function Echeance(data: echeance) {



    const bg = data.type === 'Devoir'
        ? 'bg-red'
        : data.type === 'cour'
            ? 'bg-blue'
            : 'bg-orange';
    return (
        <>

            <div className="flex items-center bg-white shadow-lg shadow-gray-300/50 rounded-[15px] my-1.5 p-1 w-full ">
                {/* Left Image */}
                <img
                    src={data.img_echeances}
                    alt="Event"
                    className="w-[53px] h-[53px] rounded-lg object-cover"
                />

                {/* Event Details */}
                <div className="flex-1 ml-4">
                    <h3 className="text-[14px] font-urb_bold">{data.title}</h3>
                    {data.prof ? (<div className="pr flex space-x-1 "><img src={data.avatar_prof} alt="" /> <span className='text-[9px]'>{data.prof}</span></div>) : ''}
                    <p className="text-[#7B8392] text-[10px]">{data.date}</p>
                </div>

                {/* Time Badge */}

                <div className={`${bg} text-white text-[14px] font-urb_bold h-[38px] flex justify-center aspect-square items-center p-1.5 rounded-[7px]`}>
                    {data.duration}
                </div>

                {/* Arrow Icon */}
                <div className="ml-2 text-gray-400">
                    <a href={data.url}>  <img src={arrow} alt="" /></a>
                </div>
            </div>

        </>)
}