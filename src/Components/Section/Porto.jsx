import React from 'react'

const Porto = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-[#393E46] w-[350px]">Portofolio</h2>
            <div className="bg-[#393E46] py-[3px] w-[50px] mb-5"></div>

            <div
                id="porto"
                className="flex gap-3 overflow-x-auto flex-nowrap scrollbar-hide rounded-xl">
                <img src="/porto/porto-1.webp" alt="porto-1" loading='lazy' width="800" height="400" className="md:w-1/2 w-full rounded-lg flex-shrink-0" fetchpriority="high" />
                <img src="/porto/porto-2.webp" alt="porto-2" loading='lazy' width="800" height="400" className="md:w-1/2 w-full rounded-lg flex-shrink-0" fetchpriority="high" />
                <img src="/porto/porto-3.webp" alt="porto-3" loading='lazy' width="800" height="400" className="md:w-1/2 w-full rounded-lg flex-shrink-0" fetchpriority="high" />
                <img src="/porto/porto-4.webp" alt="porto-4" loading='lazy' width="800" height="400" className="md:w-1/2 w-full rounded-lg flex-shrink-0" fetchpriority="high" />
            </div>
        </div>
    )
}

export default Porto