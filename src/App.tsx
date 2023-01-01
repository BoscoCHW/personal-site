import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Footer from "./components/footer/Footer";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { IconDefinition, library } from '@fortawesome/fontawesome-svg-core'
import { faEye } from '@fortawesome/free-solid-svg-icons'

library.add(faEye  as IconDefinition)

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "white" : undefined
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
