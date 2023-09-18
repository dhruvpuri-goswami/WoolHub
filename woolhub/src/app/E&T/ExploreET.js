import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import etfront from "./images/e&tfront.jpg"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import ScrollTo from "../components/globalComponents"
const ExploreET = () => {
  return (
    <div
      className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat bg-center p-12 text-center h-screen" style={{ backgroundImage: `url('${etfront.src}')` }}>
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-[rgba(0, 0, 0, 1)]">
        <div className="flex h-full items-center justify-center">
          <div className="text-gray-100">
            <h2 className="mb-4 text-4xl font-semibold">Discover the Art of Wool: <p className="mt-5">Ignite Your Creativity and Skills.</p></h2>
            <h4 className="mb-6 text-lg mx-52 font-semibold">Welcome to our Wool Education and Training platform. Join a community of wool producers and artisans committed to excellence. Explore resources, listings, and data for skill enhancement. Improve production, quality, design, and marketing with our support. Weaving a brighter future for wool craftsmanship together!</h4>
            <ScrollTo targetId="#services">
              <button
                href="#services"
                type="button"
                className="rounded-full text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:text-neutral-400 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 h-20 relative" data-te-ripple-init
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
