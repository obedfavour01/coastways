import { Airplane, Brodcast, Global, Icon } from 'iconsax-react'

type Feature = {
    Icon: Icon,
    title:string,
    desc: string
}    

export const FeaturesData: Feature[]  = [
    {
        Icon: Airplane,
        title: "Transportation",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        . Officiis, iste.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Officiis, isteLorem ipsum dolor sit amet
        consectetur adipisicing elit. Officiis, iste`
    },
    {
        Icon: Brodcast,
        title: "Live Monitoring ",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        . Officiis, iste.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Officiis, isteLorem ipsum dolor sit amet
        consectetur adipisicing elit. Officiis, iste`
    },
    {
        Icon: Global,
        title: "Worldwide Service",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        . Officiis, iste.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Officiis, isteLorem ipsum dolor sit amet
        consectetur adipisicing elit. Officiis, iste`
    }
]