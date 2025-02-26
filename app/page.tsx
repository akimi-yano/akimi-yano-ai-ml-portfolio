import Content from "./components/content";
import { Press_Start_2P, Londrina_Shadow, Dela_Gothic_One } from "next/font/google";

const pressStart2PRegular = Press_Start_2P({
    subsets: ['latin'],
    weight: "400",
    style: "normal",
    variable: "--font-pressStart2P"
})

const delaGothicOne = Dela_Gothic_One({
  subsets: ['latin'],
  weight: "400",
  style: "normal",
  variable: "--font-delaGothicOne"
})

const londrinaShadow = Londrina_Shadow({
    subsets: ['latin'],
    weight: "400",
    style: "normal",
    variable: "--font-londrinaShadow"
})

export default function Home() {
  return (
    <div className={`${pressStart2PRegular.variable} ${londrinaShadow.variable} ${delaGothicOne.variable}`}>
    <Content/>
    </div>
  );
}
