import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
import data from "./data";
import Container from "./components/styles/Container.styled";
import Card from "./components/Card";
import Footer from "./components/Footer";

// ThemeProvider Global değişken oluşturmaya yarar. Props metoduyla oluşturduğumuz objeleri ThemeProvider taglari arasında kalan componentlere uygulayabiliriz.
const style = {
  colors: {
    header: "#fff",
    body: "#fff",
    footer: "#8A1C4A",
  },
  margin: {},
  responsive: "768px",
};

const App = () => {
  return (
    // props key'i theme olmak zorunda ama value'si isteğe bağlı.
    <ThemeProvider theme={style}>
      <GlobalStyles />
      <Header />
      <Container>
        {data.map((item, index) => {
          return <Card {...item} key={index} />;
        })}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
