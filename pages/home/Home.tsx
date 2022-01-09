import type { NextPage } from "next";

import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Header from "../../components/Header";
import BuySomethingElse from "./components/BuySomethingElse";
import Education from "./components/Education";
import InvestingTop from "./components/InvestingTop";
import Main from "./components/Main";
import MainNews from "./components/MainNews";
import NewsFeed from "./components/NewsFeed";
import Search from "./components/Search";
import SelectionNews from "./components/SelectionNews";
import Services from "./components/Services";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main />
      <Search />
      <InvestingTop />
      <BuySomethingElse />
      <Services />
      <Education />
      <Section>
        <MainNews />
        <SelectionNews />
        <NewsFeed />
      </Section>
      <Footer />
    </>
  );
};

export default Home;
