import { Element } from "react-scroll"
import { faq } from "../constants/index.jsx"
import FaqItem from "../components/FaqItem.jsx"

/**
 * The Faq component renders a section with a list of questions and answers.
 * The section is divided into two columns with a glowing line in the middle.
 * The questions are rendered as a list of FaqItem components.
 */
const Faq = () => {
  const halfLength = Math.floor(faq.length / 2)

  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative z-2 py-28">
          {/* The heading of the section */}
          <div>
            <h3 className="h3 max-md:h5 mb-7 max-w-640 text-p4 max-lg:max-w-md">
              Curiosity didn't kill the cat, it gave it answers.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              You've got questions, we've got answers.
            </p>
          </div>

          {/* The line after the heading */}
          <div className="faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2" />
        </div>

        {/* The container for the questions and answers */}
        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            {/* The logo of the section */}
            <div className="absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center rounded-half border-2 border-s2 bg-s1">
              <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>

            {/* The first column of questions */}
            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} />
              ))}
            </div>

            {/* The second column of questions */}
            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={halfLength + index} />
              ))}
            </div>
          </div>

          {/* The line after the questions */}
          <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  )
}

export default Faq
