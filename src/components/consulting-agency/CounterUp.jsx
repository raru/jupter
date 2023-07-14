import React from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const counterUpContent = [
  {
    id: 1,
    startCount: "0",
    endCount: "3",
    endPointText: "k",
    meta: "Job done successfully",
    animationDelay: "0",
  },
  {
    id: 2,
    startCount: "0",
    endCount: "20",
    endPointText: "million",
    meta: "3,280 avg rating",
    animationDelay: "100",
  },
  {
    id: 3,
    startCount: "0",
    endCount: "3000",
    endPointText: "+",
    meta: "Using vCamp",
    animationDelay: "200",
  },
];

const CounterUp = () => {
  const [focus, setFocus] = React.useState(false);

  return (
    <>
      {counterUpContent.map((val) => (
        <div
          className="col-md-4"
          data-aos="fade-up"
          data-aos-delay={val.animationDelay}
          key={val.id}
        >
          <div className="counter-block-three text-center mb-45">
            <div className="main-count font-recoleta">
              <span className="counter">
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={5}
                >
                  {({ countUpRef }) => (
                    <InView
                      as="span"
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </InView>
                  )}
                </CountUp>
              </span>
              {val.endPointText}
            </div>
            <p className="theme-mb-0">{val.meta}</p>
          </div>
          {/* <!-- /.counter-block-one --> */}
        </div>
      ))}
    </>
  );
};

export default CounterUp;
