import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Container = styled.div`
  background-color: darkgray;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const SquareBox = styled(motion.div)`
  width: 800px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Square1 = styled(motion.div)`
  width: 300px;
  height: 220px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.6);
  margin: 10px;
`;

const Square2 = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 220px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.6);
  margin: 10px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(motion.button)`
  border: none;
  background: none;
  background-color: white;
  margin-top: 40px;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  color: blue;
  font-size: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const buttonVars = {
  start: {},
  end: {},
  click: {
    color: "red",
    scale: 1.3,
    transition: {
      duration: 0.3,
    },
  },
};
const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [id, setId] = useState<null | string>(null);
  const [move, setMove] = useState("2");

  return (
    <Container>
      <SquareBox>
        <Square1
          style={{ originX: 1, originY: 1 }}
          whileHover={{ scale: 1.2 }}
          onClick={() => setId("1")}
          layoutId={"1"}
          key={"1"}
        />
        <AnimatePresence>
          <Square2 layoutId={"2"} key={"2"}>
            <AnimatePresence>
              {move === "2" ? <Circle layoutId="circle" /> : null}
            </AnimatePresence>
          </Square2>
          <Square2 layoutId={"3"} key={"3"}>
            <AnimatePresence>
              {move === "3" ? <Circle layoutId="circle" /> : null}
            </AnimatePresence>
          </Square2>
        </AnimatePresence>
        <Square1
          style={{ originX: 0, originY: 0 }}
          whileHover={{ scale: 1.2 }}
          onClick={() => setId("4")}
          layoutId={"4"}
          key={"4"}
        />
      </SquareBox>
      <Button
        variants={buttonVars}
        onTapStart={() => setMove((prev) => (prev === "2" ? "3" : "2"))}
        onTap={() => setMove((prev) => (prev === "2" ? "3" : "2"))}
        whileTap="click"
      >
        Switch
      </Button>
      <AnimatePresence>
        {id ? (
          <Overlay
            initial={{ background: "rgba(0, 0, 0, 0)" }}
            animate={{ background: "rgba(0, 0, 0, 0.5)" }}
            exit={{ background: "rgba(0, 0, 0, 0)" }}
            onClick={() => setId(null)}
          >
            <Square1 style={{ backgroundColor: "white" }} layoutId={id} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Container>
  );
}

export default App;
