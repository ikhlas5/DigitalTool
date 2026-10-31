
import { Suspense } from 'react'
import './App.css'
import CountSection from './Component/CountSection/CountSection'
import Hero from './Component/Hero/Hero'
import Navbar from './Component/Navbar/Navbar'
import PremiumDigit from './Component/PremiumDigit/PremiumDigit'

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
function App() {
  const digitalCardPromise = fetchPlayer();

  return (
     <div className="w-full">
      <div className="max-w-7xl mx-auto px-6">
        <Navbar />
        <Hero />
      </div>
      <CountSection></CountSection>
      <div className="max-w-7xl mx-auto px-6">
        <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
          <PremiumDigit digitalCardPromise={digitalCardPromise}></PremiumDigit>
        </Suspense>
      </div>
    </div>
  )
}

export default App
