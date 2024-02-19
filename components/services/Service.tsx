import { Card, CardContent, CardImage } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'



type ServiceProps = {
    imageName: string,
    title: string,
    desc: string
}

const Service = ({ imageName, title, desc }: ServiceProps) => {
    return (


        <CarouselItem className="sm:basis-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
                <Card>
                    <CardImage className="flex flex-col gap-3 aspect-square items-center ">
                        <Image
                            src={imageName}
                            height={300}
                            width={600}
                            alt='door to door'
                            className='basis-2/3'
                            style={{ width: "100%" }}
                        />

                        <h1 className='text-3xl font-medium'>{title}</h1>
                        <p>{desc}</p>
                    </CardImage>
                </Card>
            </div>
        </CarouselItem>



    )
}

export default Service