import { Metadata } from "next";
import Header from "./pages/Header";
import Location from "./pages/Location";
import Skills from "./pages/Skills";

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio Victor Zarzar TS - NextJS',
};

export default function App() {

  return (
    <main>
      <link rel="shortcut icon" href="./favicon.ico"></link>
      <Header />
      <Skills />
      <Location />
    </main>
  )
}