import { SxProps, Box } from "@mui/material";
import { FC, ReactNode, Children, useState, useEffect } from "react";
import { useMeasure } from "react-use";

export const SwitchFadingContainer: FC<{
  sx?: SxProps;
  showIndex: number;
  children: ReactNode;
  overrideHeight?: boolean;
  overrideWidth?: boolean;
  fixedWidth?: number;
  doWidthAnimation?: boolean;
  doHeightAnimation?: boolean;
  animationDelaySec?: number;
  overrideTransition?: boolean;
}> = ({
  showIndex,
  children,
  overrideHeight,
  overrideWidth,
  overrideTransition,
  doHeightAnimation,
  doWidthAnimation,
  animationDelaySec = 0,
  fixedWidth,
  sx,
}) => {
  const [ref, { width, height }] = useMeasure();

  return (
    <Box
      position={"relative"}
      top={0}
      sx={{
        ...sx,
        transition: `opacity 0.2s ease-in-out, ${
          doHeightAnimation
            ? `height 0.2s ease-in-out${
                animationDelaySec ? ` ${animationDelaySec}s` : ""
              }`
            : ""
        }${doHeightAnimation && doWidthAnimation ? ", " : ""}${
          doWidthAnimation
            ? `width 0.2s ease-in-out${
                animationDelaySec ? ` ${animationDelaySec}s` : ""
              }`
            : ""
        }`,
      }}
      minWidth={!overrideWidth ? width : fixedWidth}
      minHeight={!overrideHeight ? height : undefined}
    >
      {Children.map(children, (child, index) => {
        return (
          <Box
            ref={showIndex === index ? ref : undefined}
            position={"absolute"}
            sx={{
              top: showIndex === index ? 0 : 5,
              opacity: showIndex === index ? 1 : 0,
              transition: !overrideTransition
                ? `opacity 0.2s ease-in-out${
                    animationDelaySec ? ` ${animationDelaySec}s` : ""
                  }, top 0.2s ease-in-out${
                    animationDelaySec ? ` ${animationDelaySec}s` : ""
                  }`
                : undefined,
            }}
          >
            {child}
          </Box>
        );
      })}
    </Box>
  );
};
