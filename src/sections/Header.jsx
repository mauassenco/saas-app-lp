import { Link as LinkScroll } from "react-scroll"

const Header = () => {
  const NavLink = ({ title }) => (
    <LinkScroll className="base-bold max-lg:h5 cursor-pointer uppercase text-p4 transition-colors duration-500 hover:text-p1 max-lg:my-4">
      {title}
    </LinkScroll>
  )

  return (
    <header className="fixed left-0 top-0 z-50 w-full py-10">
      <div className="">
        <div className="container flex h-14 items-center max-lg:p-5">
          <a className="z-2 flex-1 cursor-pointer lg:hidden" href="">
            <img
              src="/images/xora.svg"
              alt="Xora Logo"
              width={115}
              height={55}
            />
          </a>

          <div className="sidebar-before max-lg:relative max-lg:flex max-lg:min-h-screen max-lg:flex-col max-lg:overflow-hidden max-lg:p-6 max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll>
                    <img
                      src="/images/xora.svg"
                      alt="Xora Logo"
                      width={160}
                      height={55}
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
