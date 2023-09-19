'use client';
import { Sidebar } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

export default function SideBar({ params, active }) {
    const router = useRouter();
    const sections = {
        Roadmap: [
            'Production',
            'Sorting & Dyeing',
            'Quality Assurance',
            'Sales & Marketing',
        ],
        Vaccination: [
            'Sheep Feeding',
            'Wool enhancement',
            'Sheep vaccinations',
            'Enhance Reach'
        ],
        Schemes: [
            'Grants',
            'Initiatives',
            'Storage Solutions',
            'Market Programs'
        ]
    }


    let mapArr = Object.keys(sections).filter(item => item===params);
    mapArr = sections[mapArr[0]]

    if (active === undefined && typeof window !== 'undefined') {
        router.push(`/Education/${params}/${mapArr[0]}`)
    }
    return (
        <Sidebar className='mx-10 my-5 min-w-[270px] h-[]' aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    {
                        mapArr !== undefined ?
                            mapArr.map((item) => (
                                <Link key={item} href={`/Education/${params}/${item}`} className={`flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 ${decodeURIComponent(active) === item ? 'bg-primary text-white hover:text-white hover:bg-primary' : ''}`} >
                                    <span data-testid="flowbite-sidebar-item-content" id="flowbite-sidebar-item-:r4:" className="px-3 flex-1 whitespace-nowrap">
                                        <p>{item}</p>
                                    </span>
                                </Link>
                            ))
                            :
                            router.push(`/Education`)
                    }
                </Sidebar.ItemGroup>
            </Sidebar.Items>
            <Sidebar.CTA className='p-0 hover:bg-neutral-100'>
                <button
                    className="w-full h-12 text-center text-base flex items-center justify-center text-cyan-900 hover:text-cyan-800 hover:bg-[#eceef1] rounded-lg duration-100"
                >
                    FAQ
                </button>
            </Sidebar.CTA>
        </Sidebar>
    )
}
