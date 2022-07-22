import styled from "styled-components";
import { motion } from "framer-motion";

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

function App() {
  return (
    <Container>
      <SquareBox>
        <Square1
          style={{ originX: 1, originY: 1 }}
          whileHover={{ scale: 1.2 }}
        />
        <Square1 />
        <Square1 />
        <Square1
          style={{ originX: 0, originY: 0 }}
          whileHover={{ scale: 1.2 }}
        />
      </SquareBox>
    </Container>
  );
}

export default App;
