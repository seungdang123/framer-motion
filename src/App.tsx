import { useEffect, useRef } from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  // useMotionValue isn't related in state of React
  // if x is changed, components won't be re-rendered
  const { scrollYProgress } = useViewportScroll();
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 190, 238), rgb(163, 0, 238)",
      "linear-gradient(135deg, rgb(0, 238, 151), rgb(231, 223, 68)",
    ]
  );

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 3]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        style={{ x, rotateZ: rotateZ, scale: scale }}
        drag="x"
        dragSnapToOrigin
      ></Box>
    </Wrapper>
  );
}

export default App;
