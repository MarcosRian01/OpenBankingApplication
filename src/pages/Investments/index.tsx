import Navbar from "../../components/Navbar";
import ContentInvestments from "../../components/ContentInvestments";

export default function Investments() {
  return (
    <Navbar children={<ContentInvestments /> } />
  )
}