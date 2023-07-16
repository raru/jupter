import React from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const counterUpContent = [
  {
    id: 1,
    startCount: "0",
    endCount: "999",
    endPointText: "milhões",
    meta: "entre 2020 e 2022.",
    animationDelay: "0",
  },
  {
    id: 2,
    startCount: "0",
    endCount: "777",
    endPointText: "milhões",
    meta: "entre 2020 e 2022.",
    animationDelay: "100",
  },
  {
    id: 3,
    startCount: "0",
    endCount: "888",
    endPointText: "milhões",
    meta: "entre 2020 e 2022.",
    animationDelay: "200",
  },
];

const CounterUp = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      {counterUpContent.map((val, i) => (
        <div
        className="col-lg-4 col-sm-6"
        data-aos="fade-up"
          data-aos-delay={val.animationDelay}
          key={val.id}
        >
          <div className="counter-block-one mb-45">
            <div className="main-count roxo">
              <span className="counter">
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={5}
                  redraw={true}
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
