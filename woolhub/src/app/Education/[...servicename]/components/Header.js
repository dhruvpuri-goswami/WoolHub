import Link from "next/link"

const Header = ({params}) => {
    return (
        <nav className="flex m-10 justify-between" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link href="/" className="inline-flex items-center text-center text-sm font-medium text-gray-700 hover:text-blue-600">
                        <svg className="w-4 h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Home
                    </Link>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <Link href="/E&T" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 ">Education & Training</Link>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <div className="group">
                            <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-500 group-hover:text-gray-700  rounded-lg focus:outline-none group "> {params.servicename[0]}<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg></button>
                            <div id="dropdown" className="z-10 hidden absolute group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                <ul className="py-2 text-sm " aria-labelledby="dropdownDefault">
                                    <li>
                                        <Link href="/Education/Roadmap" className="block px-4 py-2 hover:bg-gray-100 ">Roadmap</Link>
                                    </li>
                                    <li>
                                        <Link href="/Education/Vaccination" className="block px-4 py-2 hover:bg-gray-100 ">Vaccination</Link>
                                    </li>
                                    <li>
                                        <Link href="/Education/Schemes" className="block px-4 py-2 hover:bg-gray-100 ">Government Schemes</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>

            <button className={`bg-primary px-8 py-2 rounded-lg text-white hover:scale-95 hover:bg-[#0089ff] duration-75 font-extralight`}>
                Set Reminder
            </button>
        </nav>
    )
}

export default Header