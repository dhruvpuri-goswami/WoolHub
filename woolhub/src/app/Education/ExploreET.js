import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import etfront from "../../../public/Assets/Images/Education/bgimg.jpg"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import ScrollTo from "../components/globalComponents"

const ExploreET = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat bg-center p-12 text-center h-screen" style={{ backgroundImage: `url('${etfront.src}')` }}>
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-[rgba(0, 0, 0, 1)]">
        <div className="flex h-full items-center justify-center">
          <div className="text-slate-950 h-full w-full flex flex-col items-center justify-around">
            <h1 className="mb-4 text-4xl font-semibold bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-3xl py-5 px-20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">Discover the Art of Wool: <span className="mt-5 block">Ignite Your Creativity and Skills.</span></h1>
            {/* <p className="mb-6 text-lg mx-52 font-semibold">Welcome to our Wool Education and Training platform. Join a community of wool producers and artisans committed to excellence. Explore resources, listings, and data for skill enhancement. Improve production, quality, design, and marketing with our support. Weaving a brighter future for wool craftsmanship together!</p> */}
            <ScrollTo targetId="#services">
              <button
                href="#services"
                type="button"
                className="rounded-full text-sm font-medium uppercase leading-normal text-slate-950 transition duration-150 ease-in-out hover:text-slate-1000 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 h-20 relative" data-te-ripple-init
                data-te-ripple-color="light">
                <FontAwesomeIcon className="animate-scroll absolute" icon={faAngleDown} width={50} />
              </button>
            </ScrollTo>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreET
