import Content from "./components/content";
import { Press_Start_2P } from "next/font/google";

const pressStart2PRegular = Press_Start_2P({
    subsets: ['latin'],
    weight: "400",
    style: "normal",
    variable: "--font-pressStart2P"
})

export default function Home() {
  return (
    <div className={`${pressStart2PRegular.variable}`}>
    <Content/></div>
  );
}
