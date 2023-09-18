import SideBar from "./components/SideBar"
import Header from "./components/Header"
import PageNotFound from "@/app/components/PageNotFound"

const page = ({ params }) => {

    return (
        <main>
            {
                params.servicename[0] !== "Vaccination" && params.servicename[0] !== "Roadmap" && params.servicename[0] !== "Schemes"?
                    <>
                        <PageNotFound />
                    </>
                    :
                    <>
                        <Header params={params} />
                        <SideBar params={params.servicename[0]} active={params.servicename[1]}/>
                    </>
            }
        </main>
    )
}

export default page