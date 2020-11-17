import styled from "styled-components";
import { Layout } from "../../containers";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

/**
 * Home component
 */
const Home = () => {
  return (
    <Layout>
      <Title>Homie new home</Title>
    </Layout>
  );
};

export default Home;
