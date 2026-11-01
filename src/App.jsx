
import { Suspense, useState } from 'react'
import './App.css'
import CountSection from './Component/CountSection/CountSection'
import Hero from './Component/Hero/Hero'
import Navbar from './Component/Navbar/Navbar'
import PremiumDigit from './Component/PremiumDigit/PremiumDigit'
import StepsSection from './Component/StepsSection/StepsSection'
import Pricing from './Component/Pricing/Pricing'
import CTA from './Component/CTA/CTA'
import Footer from './Component/Footer/Footer'

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const fetchSteps = async () => {
  const res = await fetch("/data2.json");
  return res.json();
}
function App() {
  const digitalCardPromise = fetchPlayer();
  const stepsPromise = fetchSteps();

  const [visitedCards, setVisitedCards] = useState([]);
  const handleVisitedCard = (card) => {
        //  console.log(card);
        const newVisitedCards = [...visitedCards, card];
        setVisitedCards(newVisitedCards);
    }

  return (
     <div className="w-full">
      <div className="max-w-7xl mx-auto px-6">
        <Navbar visitedCards={visitedCards} />
        <Hero />
      </div>
      <CountSection></CountSection>
      <div className="max-w-7xl mx-auto px-6">
        <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
          <PremiumDigit digitalCardPromise={digitalCardPromise} visitedCards={visitedCards} handleVisitedCard={handleVisitedCard} setVisitedCards={setVisitedCards}></PremiumDigit>
        </Suspense>
        <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
          
          <StepsSection stepsPromise={stepsPromise}></StepsSection>
          <Pricing digitalCardPromise={ digitalCardPromise}></Pricing>
          </Suspense>
      </div>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  )
}

export default App
