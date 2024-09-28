// import { Link as LinkScroll } from "react-scroll"
import { useEffect, useState } from "react"
import clsx from "clsx"

/**
 * The main header component.
 */
const Header = () => {
  /**
   * Whether the header has scrolled.
   */
  const [hasScrolled, setHasScrolled] = useState(false)

  /**
   * Whether the sidebar is open.
   */
  const [isOpen, setIsOpen] = useState(false)

  /**
   * Handles the scroll event.
   */
  const handleScroll = () => {
    setHasScrolled(window.scrollY > 32)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  /**
   * The NavLink component.
   */
  const NavLink = ({ title }) => {
    /**
     * Handles the click event.
     */
    const handleClick = () => {
      setIsOpen(false)
    }

    return (
      // <LinkScroll
      //   to={title}
      //   offset={-100}
      //   spy
      //   smooth
      //   activeClass="nav-active"
      //   className="base-bold max-lg:h5 cursor-pointer uppercase text-p4 transition-colors duration-500 hover:text-p1 max-lg:my-4"
      //   onClick={handleClick}
      // >
      //   {title}
      // </LinkScroll>
      <p  onClick={handleClick} className="base-bold max-lg:h5 cursor-pointer uppercase text-p4 transition-colors duration-500 hover:text-p1 max-lg:my-4">{title}</p>
    )
  }

  return (
    <header
      className={clsx(
        /**
         * The main header style.
         * The header is fixed at the top of the page.
         * The header is black with a glassy effect when scrolled.
         */
        "fixed left-0 top-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "bg-black-100 py-2 backdrop-blur-[8px]",
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="z-2 flex-1 cursor-pointer lg:hidden">
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>

        <div
          className={clsx(
            /**
             * The sidebar container.
             * The sidebar is fixed at the top of the page on mobile.
             * The sidebar has a transition effect.
             * The sidebar is hidden by default.
             */
            "w-full transition-all duration-500 max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="sidebar-before max-lg:relative max-lg:flex max-lg:min-h-screen max-lg:flex-col max-lg:overflow-hidden max-lg:p-6 max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>

                <li className="nav-logo">
                  {/* <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
           
                      "cursor-pointer transition-transform duration-500 max-lg:hidden",
                    )}
                  > 
                  
                     <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll> */}
                  <p>LINKSCROLL PLACEHOLDER</p>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
            <div className="absolute left-0 top-1/2 block h-[380px] w-[960px] -translate-y-1/2 translate-x-[-290px] rotate-90 lg:hidden">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>{" "}
          </div>
        </div>

        {/* The hamburger menu button for mobile devices. It toggles the navbar open and close state. */}
        <button
          className="z-2 flex size-10 items-center justify-center rounded-full border-2 border-s4/25 lg:hidden"
          onClick={() => setIsOpen((prevState) => !prevState)}
          title={isOpen ? "Close navbar" : "Open navbar"}
        >
          {/* The magic or close icon depending on the navbar state. */}
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt={isOpen ? "close" : "magic"}
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  )
}

export default Header
