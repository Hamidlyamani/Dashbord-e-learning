import newsroom from '@/assets/imgs/img_news.png'
import newsroom2 from '@/assets/imgs/img_news2.png'
import { News } from './news'




export function Newsroom() {

    const nows = [{
        title: 'Titre de news 2',
        img_nows: newsroom,
        desc: 'newsroo mnewsroom Titre de news Titre de news',
        url: '#',
    }, {
        title: 'Titre de news 4',
        img_nows: newsroom2,
        desc: 'newsroo mnewsroom Titre de news Titre de news',
        url: '#',
    }, {
        title: 'Titre de news 2245',
        img_nows: newsroom,
        desc: 'newsroo mnewsroom Titre de news Titre de news',
        url: '#',
       
    }, {
        title: 'Titre de news 2245',
        img_nows: newsroom,
        desc: 'newsroo mnewsroom Titre de news Titre de news',
        url: '#',
        }]

    return (
        <>
            <div className='bg-white p-4 lg:p-0 rounded-[15px]  lg:rounded-[0px] mt-4 lg:mt-0'>
                <div className='flex gap-6 items-center justify-between '>
                    <h3 className="font-urb_bold text-[22px] text-background">Newsroom</h3>
                </div>
                {
                    nows.map((now) => {
                        return <News key={now.title} {...now} />
                    })}
            </div>
        </>)
}