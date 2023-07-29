import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { defaultTheme } from "./thems/DefaultThem";
import { Helmet } from "react-helmet";
import Form from "./components/Form";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container>
        <Wrapper1>
          <Title>Learn to code by watching others</Title>
          <Paragraph>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </Paragraph>
        </Wrapper1>
        <Wrapper2>
          <Button>
            <Free>
              Try it free 7 days
              <Span> then $20/mo. thereafter</Span>
            </Free>
          </Button>
          <Form />
        </Wrapper2>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 88px 24px 55px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1050px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 45px;
  }
`;

const Title = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.291667px;
  color: white;
  margin-bottom: 16px;
  @media screen and (min-width: 1050px) {
    font-size: 50px;
    line-height: 55px;
    letter-spacing: -0.520833px;
    text-align: start;
  }
`;

const Paragraph = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 64px;
  @media screen and (min-width: 1050px) {
    text-align: start;
  }
`;

const Button = styled.div`
  width: 100%;
  height: 88px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.Blue};
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
`;

const Span = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.267857px;
  color: #ffffff;
`;

const Free = styled.div`
  width: 100%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.267857px;
  color: #ffffff;
  padding: 18px 66px;
`;

const Wrapper1 = styled.div`
  @media screen and (min-width: 1050px) {
    margin-left: 80px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 165px;
  }
`;
const Wrapper2 = styled.div`
  @media screen and (min-width: 1050px) {
    margin-right: 80px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 165px;
  }
`;
