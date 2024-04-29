import Image from "next/image";
import Herosection from "./components/Herosection";

export default function Home() {
  const img="/images.png";
  return (
    <main className="flex flex-col items-center justify-between">
    <Herosection title='Buy Wholesale' heading="Fish and Seafood Online Worldwide"
 des='we aim at creating a market place with one stop solutions for the Seafood and Aquaculture industry.' img={img}/>
    </main>
  );
}
