import { Box, BoxProps } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { FC } from "react";

interface ScrollContainerProps extends BoxProps {
  shadowColor?: string;
  topShadowOpacity?: number;
  bottomShadowOpacity?: number;
}

const ScrollContainer: FC<ScrollContainerProps> = ({
  children,
  shadowColor = "--chakra-colors-gray-800",
  topShadowOpacity = 0.75,
  bottomShadowOpacity = 1,
  ...otherProps
}) => {
  const shadowHeight = useBreakpointValue({ base: "50px", lg: "70px" });
  return (
    <Box pos="relative" {...otherProps}>
      <Box
        pos="absolute"
        top={0}
        w="100%"
        h={shadowHeight}
        background={`linear-gradient(180deg,var(${shadowColor}),transparent)`}
        pointerEvents="none"
        zIndex={1}
        opacity={topShadowOpacity}
      />
      <Box
        pos="absolute"
        bottom={0}
        w="100%"
        h={shadowHeight}
        background={`linear-gradient(180deg,transparent,var(${shadowColor}))`}
        pointerEvents="none"
        zIndex={1}
        opacity={bottomShadowOpacity}
      />
      <Box h="100%" overflowY="auto">
        {children}
      </Box>
    </Box>
  );
};

export default ScrollContainer;
