import './App.css'
import CustomCard from './components/CustomCard'
// import { BuilderComponent } from '@builder.io/react';

// const BUILDER_API_KEY = 'd2bcebe3696b4c9a9e77d2e6534a6972';

function App() {
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center gap-8">
      <h1 className="text-white text-4xl font-bold font-montserrat">
        Tailwind 3.4.14 Edited✅
      </h1>
      <CustomCard />
      {/* <BuilderComponent model="page" apiKey={BUILDER_API_KEY} /> */}
    </div>
  )
}
export default App
