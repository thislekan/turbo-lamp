import { useEffect, useState } from "react";
import { useTransition, animated, useSpringRef } from "react-spring";
import { Screen } from "components/landing/screen";
import { StyledLandingPage } from "components/landing/styles";
import { HeroOptions } from "components/hero-options";
import { Dots } from "components/utils/dots";
import BgImage1 from "media/screen1.jpg";
import BgImage2 from "media/light-pinkish.jpg";

const pages = [
  ({ style }) => (
    <animated.div
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1,
        ...style,
      }}
    >
      <Screen
        discover="Discover fashion that suits to your style"
        percentage={80}
        bgImage={BgImage1}
        hashtag="FASHION DAY"
      />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1,
        ...style,
      }}
    >
      <Screen
        hero="Discover Our Beauty Selection"
        hashtag="BEAUTYSALE"
        bgImage={BgImage2}
      />
    </animated.div>
  ),
];

export const LandingPage = () => {
  const transRef = useSpringRef();
  const [index, set] = useState(0);
  const [transitions, api] = useTransition(index, () => ({
    ref: transRef,
    keys: null,
    from: { opacity: 1, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 1, transform: "translate3d(-100%,0,0)" },
    // config: { duration: 500 },
  }));
  const onClick = () => set((state) => (state + 1) % 2);
  const bgColor =
    index === 0 ? "rgb(232 235 234 / 80%)" : "rgb(178 153 156 / 35%)";

  useEffect(() => {
    transRef.start();
  }, [index, transRef]);

  return (
    <StyledLandingPage>
      <Dots isAbsolute />
      <div
        className="carousel"
        style={{
          backgroundColor: bgColor,
          paddingTop: "90px",
          marginTop: "-90px",
          position: "relative",
        }}
        onClick={onClick}
      >
        {transitions((style, i) => {
          const Page = pages[i];
          return <Page style={style} />;
        })}
      </div>
      <HeroOptions />
    </StyledLandingPage>
  );
};
