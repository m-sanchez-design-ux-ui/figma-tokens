import './App.css'
import { BuilderComponent } from '@builder.io/react';

const BUILDER_API_KEY = 'd2bcebe3696b4c9a9e77d2e6534a6972';

function App() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">
        Tailwind 3.4.14 Edited✅
      </h1>
      <BuilderComponent model="page" apiKey={BUILDER_API_KEY} />
    </div>
  )
}
export default App
