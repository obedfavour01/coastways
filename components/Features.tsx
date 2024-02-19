import { FeaturesData } from '@/lib/featuresData'
import React from 'react'



const Features = () => {
    return (
        <div className='my-36 '>
            <h1 className="text-5xl text-center">Features</h1>

            <div className='flex 
            xs:max-md:flex-col 
            gap-8 
            xs:max-lg:m-8 
            lg:m-16 
            md:max-lg:flex-wrap 
            md:max-lg:content-center 
            md:justify-center 
            '>
                {
                    FeaturesData.map((feature, ind) => (
                        <div key={ind}
                            className={`
                     border border-cw-black
                     xs:text-center 
                    
                     rounded-lg
                     md:w-[400px]
                     p-8 `}
                        >
                            <feature.Icon size="32" className='text-cw-black m-auto' />
                            <h1 className='text-4xl font-medium my-4'>{feature.title}</h1>
                            <h3> {feature.desc} </h3>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Features