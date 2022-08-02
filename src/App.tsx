import { useContext } from "react";
import AnimeListcard from "./components/AnimeListcard/AnimeListCard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AnimeContext } from "./store/contexts/AnimeContext";

function App() {
  const { animeInfo } = useContext(AnimeContext);
  const {
    pagination: { current_page },
  } = animeInfo;

  return (
    <>
      <Header />
      {current_page !== -1 && <AnimeListcard />}
      <Footer />
    </>
  );
}

export default App;
