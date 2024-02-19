import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Service from './Service'




const Services = () => {
    return (
        <div className='px-16'>
            <h1 className='text-center font-medium text-5xl my-8'>Our Services</h1>
            <Carousel>
                <CarouselContent>
                    <Service
                        imageName='/images/doortodoor.jpg'
                        title='Door to Door'
                        desc="Its a great service rendering"
                    />

                    <Service
                        imageName='/images/airportcargs.jpg'
                        title='Airport to Airport'
                        desc="Its a great service rendering"
                    />
                    <Service
                        imageName='/images/doortodoor.jpg'
                        title='Door to Door'
                        desc="Its a great service rendering"
                    />
                    <Service
                        imageName='/images/Warehousing.jpg'
                        title='Warehousing'
                        desc="Its a great service rendering"
                    />
                    <Service
                        imageName='/images/doortodoor.jpg'
                        title='Door to Door'
                        desc="Its a great service rendering"
                    />
                    <Service
                        imageName='/images/doortodoor.jpg'
                        title='Door to Door'
                        desc="Its a great service rendering"
                    />

                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}

export default Services