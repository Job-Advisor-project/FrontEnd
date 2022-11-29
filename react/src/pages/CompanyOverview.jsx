import Header from "../components/Header";
import Footer from "../components/Footer";
import BasicTabs from "../components/Tabs";

export default function CompanyOverview({ company }) {
  return (
    <>
      <Header></Header>
      <BasicTabs company={company}></BasicTabs>
      <Footer></Footer>
    </>
  );
}
