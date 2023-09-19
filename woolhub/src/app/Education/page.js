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


const page = () => {
    const services = [
        /* first section data */
        {
            img1: farmImg1.src,
            img2: farmImg2.src,
            img3: onlineEdu.src,
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
            {/* <div className="w-full px-4 lg:w-6/12">
                <div className="flex items-center -mx-3 sm:-mx-4">
                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                        <div className="py-3 sm:py-4">
                            <Image
                                src={farmImg1}
                                alt="Social worker"
                                className="w-50 rounded-2xl shadow-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white"
                            />
                        </div>
                        <div className="py-3 sm:py-4">
                            <Image
                                src={health}
                                alt="Social Service"
                                className="w-50 rounded-2xl shadow-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white"
                            />
                        </div>
                    </div>
                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                        <div className="relative z-10 my-4">
                            <Image
                                src={onlineEdu}
                                alt="Connect"
                                className="w-50 rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white"
                            />
                            <span className="absolute -right-7 -bottom-7 z-[-2]">
                                <svg
                                    width={134}
                                    height={106}
                                    viewBox="0 0 134 106"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="1.66667"
                                        cy={104}
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 104)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy={104}
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 104)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={31}
                                        cy={104}
                                        r="1.66667"
                                        transform="rotate(-90 31 104)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy={104}
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 104)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="60.3334"
                                        cy={104}
                                        r="1.66667"
                                        transform="rotate(-90 60.3334 104)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy={104}
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 104)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy={104}
                                        r="1.66667"
                                        transform="rotate(-90 117.667 104)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy={104}
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 104)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={103}
                                        cy={104}
                                        r="1.66667"
                                        transform="rotate(-90 103 104)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={132}
                                        cy={104}
                                        r="1.66667"
                                        transform="rotate(-90 132 104)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="89.3333"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 89.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="89.3333"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 89.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={31}
                                        cy="89.3333"
                                        r="1.66667"
                                        transform="rotate(-90 31 89.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="89.3333"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 89.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 89.3338)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 89.3338)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 89.3338)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 89.3338)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={103}
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 103 89.3338)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={132}
                                        cy="89.3338"
                                        r="1.66667"
                                        transform="rotate(-90 132 89.3338)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="74.6673"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 74.6673)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="31.0003"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 31.0003)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 74.6668)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="31.0003"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 31.0003)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={31}
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 31 74.6668)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={31}
                                        cy="31.0003"
                                        r="1.66667"
                                        transform="rotate(-90 31 31.0003)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 74.6668)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="31.0003"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 31.0003)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 74.6668)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="30.9998"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 30.9998)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 74.6668)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="30.9998"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 30.9998)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 74.6668)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="30.9998"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 30.9998)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 74.6668)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="30.9998"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 30.9998)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={103}
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 103 74.6668)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={103}
                                        cy="30.9998"
                                        r="1.66667"
                                        transform="rotate(-90 103 30.9998)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={132}
                                        cy="74.6668"
                                        r="1.66667"
                                        transform="rotate(-90 132 74.6668)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={132}
                                        cy="30.9998"
                                        r="1.66667"
                                        transform="rotate(-90 132 30.9998)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 60.0003)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="16.3333"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 16.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 60.0003)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="16.3333"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 16.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={31}
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 31 60.0003)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={31}
                                        cy="16.3333"
                                        r="1.66667"
                                        transform="rotate(-90 31 16.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 60.0003)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="16.3333"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 16.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 60.0003)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="16.3333"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 16.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 60.0003)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="16.3333"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 16.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 60.0003)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="16.3333"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 16.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 60.0003)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="16.3333"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 16.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={103}
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 103 60.0003)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={103}
                                        cy="16.3333"
                                        r="1.66667"
                                        transform="rotate(-90 103 16.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={132}
                                        cy="60.0003"
                                        r="1.66667"
                                        transform="rotate(-90 132 60.0003)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={132}
                                        cy="16.3333"
                                        r="1.66667"
                                        transform="rotate(-90 132 16.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="45.3333"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 45.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="1.66667"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 1.66667 1.66683)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="45.3333"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 45.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="16.3333"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 16.3333 1.66683)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={31}
                                        cy="45.3333"
                                        r="1.66667"
                                        transform="rotate(-90 31 45.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={31}
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 31 1.66683)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="45.3333"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 45.3333)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="45.6667"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 45.6667 1.66683)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 45.3338)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="60.3333"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 60.3333 1.66683)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 45.3338)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="88.6667"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 88.6667 1.66683)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 45.3338)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="117.667"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 117.667 1.66683)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 45.3338)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx="74.6667"
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 74.6667 1.66683)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={103}
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 103 45.3338)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={103}
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 103 1.66683)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={132}
                                        cy="45.3338"
                                        r="1.66667"
                                        transform="rotate(-90 132 45.3338)"
                                        fill="#2098ff"
                                    />
                                    <circle
                                        cx={132}
                                        cy="1.66683"
                                        r="1.66667"
                                        transform="rotate(-90 132 1.66683)"
                                        fill="#2098ff"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}
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
                <button class="bg-slate-900 text-white hover:bg-gray-800 text-gray-800 font-bold py-2 px-6 rounded inline-flex items-center justify-between rounded-full w-40">
                    <span>Let's Start</span>
                    <FontAwesomeIcon width={20} icon={faArrowRightLong} />
                </button>
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