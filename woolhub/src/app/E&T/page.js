import React from 'react'
import ExploreET from './ExploreET'
import Image from 'next/image'
import ETImage from './ETImage';
import roadMap from "../../../public/Assets/Images/roadMap.svg"
import schemesImg from "../../../public/Assets/Images/schemesImg.svg"
import vaccinationImg from "../../../public/Assets/Images/vaccinationImg.svg"

const page = () => {
    const services = [
        /* first section data */
        {
            img: roadMap.src,
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
                },
                {
                    key: 4,
                    title: "Wool Marketing and Sales : Raise sheeps proudly",
                    desc: "Find out how to sell your wool effectively, whether through trading, online markets, or marketing savvy."
                },
            ]
        },

        /* second section data */
        {
            img: vaccinationImg.src,
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
                },
                {
                    key: 4,
                    title: "Selling Wool Effectively",

                    desc: "Boost your wool's market value with branding, research, and direct buyer connections for successful selling."
                },
            ]
        },

        /* third section data */
        {
            img: schemesImg.src,
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
                },
                {
                    key: 4,
                    title: "Market access programs",
                    desc: "Connect with buyers and access direct market opportunities."
                },
            ]
        }
    ]


    return (
        <main className='min-h-screen overflow-y-scroll no-scrollbar'>
            <ExploreET />
            <section id='#services' className={`flex flex-col align-center justify-center text-gray-600 body-font `}>
                <div className="text-center mt-10 mb-2">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Learn & Grow with us</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Discover a world of knowledge and skill development opportunities with our dedicated education and training resources.</p>
                </div>
                {
                    services.map((service, index) => (
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
        <div className={`container px-3 py-20 mx-auto flex ${(index + 1) % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} flex-wrap justify-evenly`}>
            <ETImage img={service.img} />
            <div className="flex flex-col align-center justify-center lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                {
                    service.serviceDetails.map((item) => (
                        <RoadMapPoints
                            serviceDetails={item}
                            key={item.key}
                        />
                    ))
                }
            </div>
        </div>
    )
}


const RoadMapPoints = ({ serviceDetails }) => {
    return (
        <div className={`flex relative ${serviceDetails.key !== 4 ? 'pb-12' : ''}`}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            </div>
            <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">{serviceDetails.title}</h2>
                <p className="leading-relaxed">{serviceDetails.desc}</p>
            </div>
        </div>
    )
}