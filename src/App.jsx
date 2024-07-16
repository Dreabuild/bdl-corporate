import Banner from './components/Banner'
import HelpingCompanies from './components/HelpingCompanies'
import HelpSection from './components/HelpSection'
import InfoSection from './components/InfoSection'

function App() {

  return (
    <div>
      <header className='max-w-[1500px] px-4 w-full mx-auto py-4'>
        <div className="container mx-auto flex justify-between items-center">
          <img
            src="https://i.ibb.co/S5cZpQr/Bloodlink-Assests-1.png"
          alt="logo"/>
          <div className="flex gap-x-4 items-center">
            <button className="bg-none text-[#000] lg:md:text-[20px] text-[18px]">হোম</button>
            <button className="bg-[#BF0000] text-[#fff] lg:md:text-[20px] text-[18px] px-4 py-2">রক্তের আবেদন</button>
          </div>
        </div>
      </header>
      <Banner />
      <HelpingCompanies />
      <InfoSection />
      <HelpSection/>
    </div>
  )
}

export default App
