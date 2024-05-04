import Image from "next/image";
import Herosection from "./components/Herosection";

export default function Home() {
  const img="/images.png";
  return (
    <main className="flex flex-col items-center justify-between">
    <Herosection title='Buy Wholesale' heading1="Fish and Seafood" heading2="Online Worldwide"
 des='We aim at creating a market place with one stop solutions for the Seafood and Aquaculture industry.' img={img}/>
    </main>
  );
}
