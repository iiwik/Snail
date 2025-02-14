import Header from "./components/Header";
import Footer from "./components/Footer";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";
import PageEight from "./components/PageEight";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageEight />
      <Footer />
    </div>
  );
}

export default App;
