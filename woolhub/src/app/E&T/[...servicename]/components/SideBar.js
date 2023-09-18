'use client';
import { Sidebar } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SideBar({ params ,active}) {
    const router = useRouter();
    const Roadmap = [
        'Production',
        'Sorting & Dyeing',
        'Quality Assurance',
        'Sales & Marketing',
    ];
    const Vaccination = [
        'Sheep Feeding',
        'Wool enhancement',
        'Sheep vaccinations',
        'Enhance Reach'
    ];
    const Schemes = [
        'Grants',
        'Initiatives',
        'Storage Solutions',
        'Market Programs'
    ]

    const mapArr = params === "Roadmap" ?
        Roadmap :
        (params === "Vaccination" ?
            Vaccination
            :
            (params === "Schemes") ?
                Schemes : undefined)
    return (
        <Sidebar className='m-10' aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    {
                        mapArr  !== undefined?
                            mapArr.map((item) => (
                                <Sidebar.Item className={decodeURI(active)===item?'bg-primary text-white hover:bg-primary hover:text-white':''} key={item}>
                                    <p>
                                        {item}
                                    </p>
                                </Sidebar.Item>
                            ))
                            :
                            router.push(`/E&T/${params}/${active}`)
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


