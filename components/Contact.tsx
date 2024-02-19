import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <div className='flex justify-center lg:px-48 py-16'>

            <div className='flex-1'>
                <div className='w-[100%] overflow-hidden rounded-2xl'>
                    <iframe
                        className="overflow-clip"
                        width="100%"
                        height="600"
                        sandbox='allow-scripts'
                        loading='lazy'
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=7%20Alhaji%20Rafiu%20off%20Murtarla%20Mohammed%20international%20Airport%20Road+(Coastways%20Logistics)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.gps.ie/">gps systems</a>
                    </iframe>
                </div>
            </div>
            <div className='flex-1'>

            </div>
        </div>
    )
}

export default Contact