import React from "react"
// import { Element, Link as LinkScroll } from "react-scroll"
import Button from "../components/Button.jsx"
/**
 * The Hero component renders the hero section of the page.
 * The background image is rendered absolutely positioned at the top of the hero section.
 * The background image has a fixed height and width of 1230px.
 */
const Hero = () => {
  return (
    <section
      className="relative pb-40 pt-60 max-lg:pb-36 max-lg:pt-52 max-md:pb-32 max-md:pt-36"
      aria-labelledby="hero-title"
    >
      {/* <Element name="hero"> */}
        <div className="" id="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            {/* The title and subtitle */}
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
            <h1
              id="hero-title"
              className="h1 max-lg:h2 mb-6 uppercase text-p4 max-lg:mb-7 max-md:mb-4 max-md:text-5xl max-md:leading-12"
            >
              Amazingly simple
            </h1>
            <p className="body-1 mb-14 max-w-440 max-md:mb-10">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>

            {/* The button */}
            {/* <LinkScroll to="features" offset={-100} spy smooth> */}
              <Button icon="/images/zap.svg">Try it now</Button>
            {/* </LinkScroll> */}
          </div>

          {/* The background image */}
          <div className="hero-img_res pointer-events-none absolute -top-32 left-[calc(50%-340px)] w-[1230px]">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
        </div>
      {/* </Element> */}
    </section>
  )
}

export default Hero
