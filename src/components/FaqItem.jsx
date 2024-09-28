import clsx from "clsx"
import { useState } from "react"
import { SlideDown } from "react-slidedown"

/**
 * The FaqItem component renders an item in the FAQ section.
 * It displays the question and an expandable answer.
 * The component uses the react-slidedown library to animate the
 * expansion of the answer.
 */
const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null)

  /**
   * Checks whether the item is currently expanded.
   */
  const active = activeId === item.id

  return (
    <div className="relative z-2 mb-16">
      {/* The container for the question and answer */}
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => {
          setActiveId(activeId === item.id ? null : item.id)
        }}
      >
        {/* The question number and question */}
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {/* The question number */}
            {index < 10 ? "0" : ""}
            {index}
          </div>
          {/* The question */}
          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center",
              active && "max-lg:text-p1",
            )}
          >
            {item.question}
          </div>
        </div>

        {/* The expand icon */}
        <div
          className={clsx(
            "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
            active && "before:bg-p1 after:rotate-0 after:bg-p1",
          )}
        >
          <div className="g4 size-11/12 rounded-full shadow-300" />
        </div>
      </div>

      {/* The answer is only rendered when the item is expanded */}
      <SlideDown>
        {activeId === item.id && (
          <div className="body-3 px-7 py-3.5">{item.answer}</div>
        )}
      </SlideDown>

      {/* The background of the item */}
      <div
        className={clsx(
          "g5 absolute -bottom-7 -top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500",
          active && "opacity-100",
        )}
      >
        {/* The background color */}
        <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
        {/* The line above the item */}
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
      </div>
    </div>
  )
}
export default FaqItem
