import Content from "./components/content";
import NavBar from './components//navbar'
import { Press_Start_2P, Londrina_Shadow, Dela_Gothic_One, DotGothic16 } from "next/font/google";

const pressStart2PRegular = Press_Start_2P({
    subsets: ['latin'],
    weight: "400",
    style: "normal",
    variable: "--font-pressStart2P"
})

const londrinaShadow = Londrina_Shadow({
    subsets: ['latin'],
    weight: "400",
    style: "normal",
    variable: "--font-londrinaShadow"
})

const delaGothicOne = Dela_Gothic_One({
  subsets: ['latin'],
  weight: "400",
  style: "normal",
  variable: "--font-delaGothicOne"
})

const dotGothic16 = DotGothic16({
  subsets: ['latin'],
  weight: "400",
  style: "normal",
  variable: "--font-dotGothic16"
})

export default function Home() {
  return (
    <div className={`${pressStart2PRegular.variable} ${londrinaShadow.variable} ${delaGothicOne.variable} ${dotGothic16.variable}`}>
    <NavBar />
    <Content/>
    </div>
  );
}
