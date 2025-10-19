import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import AppRouter from "./routes/AppRouter";

export default function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}
