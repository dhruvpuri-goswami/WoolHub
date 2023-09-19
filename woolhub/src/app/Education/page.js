import React from 'react'
import ExploreET from './ExploreET'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import ETImage from './ETImage';
import farmImg1 from "../../../public/Assets/Images/Education/farmer1.jpg"
import farmImg2 from "../../../public/Assets/Images/Education/farmer2.jpg"
import farmImg3 from "../../../public/Assets/Images/Education/sheepfarming.jpg"
import fabricBg from "../../../public/Assets/Images/Education/fabric_bg.png"
import health from "../../../public/Assets/Images/Education/health.png"
import onlineEdu from "../../../public/Assets/Images/Education/online learning.png"
import scheme1 from "../../../public/Assets/Images/Education/scheme1.png"
import scheme2 from "../../../public/Assets/Images/Education/scheme2.png"
import scheme3 from "../../../public/Assets/Images/Education/scheme3.png"
import Link from 'next/link'


const page = () => {
    const services = [
        /* first section data */
        {
            img1: farmImg1.src,
            img2: farmImg2.src,
            img3: onlineEdu.src,
            type: "Roadmap",
            serviceDetails: [
                {
                    key: 1,
                    title: "Cultivating Quality Wool : Raise sheeps proudly",
                    desc: "Learn how to care for your sheep and create a thriving environment for high-quality wool."
                },
                {
                    key: 2,
                    title: "Wool Processing : Sorting and Dyeing",
                    desc: "Discover how to shear, sort, and color your wool, making it attractive for buyers."
                },
                {
                    key: 3,
                    title: "Quality Assurance : Top-Grade Wool",
                    desc: "Ensure your wool is top-notch with grading services and expert tips for the best quality."
                }
            ]
        },
        
        /* second section data */
        {
            img1: farmImg1.src,
            img2: farmImg2.src,
            img3: farmImg3.src,
            type: "Vaccination",
            serviceDetails: [
                {
                    key: 1,
                    title: "Enhancing Your Yield",
                    desc: "Elevate your wool yield through nutrition, breeding, and health management for thriving sheep."
                },
                {
                    key: 2,
                    title: "Elevating Your Wool's Worth",

                    desc: " Ensure premium prices by grooming, parasite control, and regular shearing for top-notch wool quality."
                },
                {
                    key: 3,
                    title: "Sheep Care Essentials",

                    desc: "Prioritize sheep health with vaccinations, shelter upkeep, and a comfortable environment for happy and healthy livestock."
                }
            ]
        },
        
        /* third section data */
        {
            img1: scheme1.src,
            img2: scheme2.src,
            img3: scheme3.src,
            type: "Schemes",
            serviceDetails: [
                {
                    key: 1,
                    title: "Wool sector grants",
                    desc: "Access grants and subsidies for improved wool production and quality."
                },
                {
                    key: 2,
                    title: "Skill development initiatives",
                    desc: "Enhance your skills with workshops in production, design, and marketing."
                },
                {
                    key: 3,
                    title: "Wool storage solutions",
                    desc: "Secure and manage your wool inventory with storage options."
                }
            ]
        }
    ]


    return (
        <main className='min-h-fit overflow-y-scroll no-scrollbar'>
            <ExploreET />
            <section id='#services' className={`flex flex-col align-center justify-center text-gray-600 body-font py-2`} style={{ backgroundImage: `url('${fabricBg.src}')` }}>
                <div className="text-center mt-10 mb-2">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4"><span className='text-primary'>Learn</span> & Grow with us</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Discover a world of knowledge and skill development opportunities with our dedicated education and training resources.</p>
                </div>
                {
                    services.map((service, index) => (
                        // <Card />
                        <ServiceComponents key={index} index={index} service={service} />
                    ))
                }
            </section>
        </main>
    )
}

export default page


const ServiceComponents = ({ service, index }) => {
    return (
        <div className={`container px-10 py-10 mx-auto flex ${(index + 1) % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} flex-wrap justify-between`}>
            <ETImage img1={service.img1} img2={service.img2} img3={service.img3} />
            <div className="flex flex-col align-center justify-center lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <h1 className='relative -top-10 text-xl text-primary'>Sheep Farming</h1>
                {
                    service.serviceDetails.map((item) => (
                        <RoadMapPoints
                            serviceDetails={item}
                            key={item.key}
                        />
                    ))
                }
            <div className='flex align-center justify-start w-full my-1 px-2'>
                <Link href={`/Education/${service.type}`} class="bg-slate-900 text-white hover:bg-gray-800 text-gray-800 font-bold py-2 px-6 rounded inline-flex items-center justify-between rounded-full w-40">
                    <span>Let's Start</span>
                    <FontAwesomeIcon width={20} icon={faArrowRightLong} />
                </Link>
            </div>
            </div>
        </div>
    )
}


const RoadMapPoints = ({ serviceDetails }) => {
    return (
        <div className={`flex relative ${serviceDetails.key !== 4 ? 'pb-12' : ''}`}>
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 inline-flex items-center justify-center text-white relative z-10">
                <FontAwesomeIcon className='text-white' width={20} icon={faStar} />
            </div>
            <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">{serviceDetails.title}</h2>
                <p className="leading-relaxed">{serviceDetails.desc}</p>
            </div>
        </div>
    )
}