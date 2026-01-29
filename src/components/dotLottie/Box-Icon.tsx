"use client";

import { DotLottieReact, DotLottie } from "@lottiefiles/dotlottie-react";

interface BoxIconProps {
  dotLottieRefCallback: (dotLottie: DotLottie) => void;
}

const BoxIcon = ({ dotLottieRefCallback }: BoxIconProps) => {
  return (
    <span className="inline-flex items-center justify-center shrink-0 overflow-hidden">
      <DotLottieReact
        src="/assets/Empty Box.lottie"
        className="w-10 h-10 -mt-3"
        dotLottieRefCallback={dotLottieRefCallback}
      />
    </span>
  );
};

export default BoxIcon;
