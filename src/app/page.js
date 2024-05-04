import Image from "next/image";
import Herosection from "./components/Herosection";

export default function Home() {
  const img="/images.png";
  return (
    <main className="flex flex-col items-center justify-between">
    <Herosection title='Buy Wholesale' heading1="Fish and Seafood" heading2="Online Worldwide"
 des1='We aim at creating a market place with one' des2='stop solutions for the Seafood and' des3='Aquaculture industry.' img={img}/>
    </main>
  );
}
