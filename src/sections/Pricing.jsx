import { Element } from "react-scroll"
import { useState } from "react"
import clsx from "clsx"
import CountUp from "react-countup"
import { plans } from "../constants/index.jsx"
import Button from "../components/Button.jsx"
/**
 * The Pricing component renders the pricing section of the page.
 * It renders a section with a list of plans and a button to get started.
 * The plans are rendered as a list of PricingPlan components.
 */
const Pricing = () => {
  const [monthly, setMonthly] = useState(false)
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="pricing-head_before relative mx-auto max-w-960 border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>

            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              {/* The switch button */}
              <button
                className={clsx("pricing-head_btn", monthly && "text-p4")}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>

              {/* The background image */}
              <div className="pricing-bg">
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
              </div>
            </div>
          </div>
          {/*  pricing section*/}
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, index) => (
              <PricingPlan
                key={plan.id}
                plan={plan}
                index={index}
                monthly={monthly}
              />
            ))}
          </div>
        </div>
      </Element>
    </section>
  )
}

/**
 * The PricingPlan component renders a single pricing plan.
 * It renders a div with the plan details and a button to get started.
 * The plan details are rendered as a list of PricingPlanDetail components.
 */
const PricingPlan = ({ plan, index, monthly }) => {
  return (
    <div
      className={clsx(
        "pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]",
        index === 1 &&
          "g4 absolute left-0 right-0 top-0 z-1 h-330 rounded-tl-3xl rounded-tr-3xl",
      )}
    >
      {/* 
        The logo of the plan is rendered as an absolute element with a higher z-index than the other elements.
        This is to ensure that the logo is rendered on top of the other elements.
      */}
      {index === 1 && (
        <div className="g4 absolute left-0 right-0 z-2 flex items-center justify-center">
          {/* The logo of the plan */}
          <img
            src={plan.logo}
            alt={plan.title}
            className={clsx(
              "object-contain drop-shadow-2xl",
              // The size of the logo is different depending on whether it is the first plan or not.
              // The first plan has a larger logo.
              index === 1 ? "size-[120px]" : "size-[88px]",
            )}
          />
        </div>
      )}

      <div
        className={clsx(
          "relative flex flex-col items-center",
          index === 1 ? "pt-24" : "pt-12",
        )}
      >
        {/* The plan title */}
        <div
          className={clsx(
            "small-2 relative z-2 mx-auto mb-6 rounded-20 border-2 px-4 py-1.5 uppercase",
            index === 1 ? "border-p3 text-p3" : "border-p1 text-p1",
          )}
        >
          {plan.title}
        </div>

        {/* The plan price */}
        <div className="relative z-2 flex items-center justify-center">
          <div
            className={clsx(
              "h-num flex items-start",
              index === 1 ? "text-p3" : "text-p4",
            )}
          >
            {/* The currency symbol */}$ {/* The price of the plan */}
            <CountUp
              start={plan.priceMonthly}
              end={monthly ? plan.priceMonthly : plan.priceYearly}
              duration={0.5}
              useEasing={false}
              preserveValue
            />
          </div>
          {/* The per month text */}
          <div className="small-1 relative top-3 ml-1 uppercase">/ mo</div>
        </div>
      </div>

      {/* The caption of the current plan */}
      <div
        className={clsx(
          "body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4",
          index === 1 && "border-b",
        )}
      >
        {plan.caption}
      </div>

      <ul className="mx-auto space-y-4 xl:px-7">
        {/** The list of features for the current plan */}

        {plan.features.map((feature) => (
          <li key={feature} className="relative flex items-center gap-5">
            {/** The check icon */}
            <img
              src={"/images/check.png"}
              alt="check"
              className="size-10 object-contain"
            />
            {/** The feature text */}
            <p className="flex-1">{feature}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex w-full justify-center">
        <Button icon={plan.icon}>Get Started</Button>
      </div>

      {/* Add a limited time offer message only for the second plan */}
      {index === 1 && (
        <p className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
          Limited time offer
        </p>
      )}
    </div>
  )
}

export default Pricing
