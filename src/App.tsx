// import CustomCard from './components/CustomCard'
// import CustomCarTwo from './components/CustomCarTwo'


function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-token-spacing-large bg-token-primary">
      <h1 className="text-white text-4xl font-bold">
        Tailwind Token Test 
      </h1>
      {/* <CustomCard />
      <CustomCarTwo /> */}

      <p className="text-accent-500 font-bold">
        Importante: revisa los cambios antes de confirmar.
      </p>
      
      <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg shadow-md">
        Confirmar
      </button>

      <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg">
        Cancelar
      </button>

      <div className="bg-white p-card rounded-card shadow-xl max-w-sm mx-auto border border-line-card">
        <h2 className="text-primary-600 text-xl font-semibold mb-2">
          Título de la tarjeta
        </h2>
        <p className="text-gray-600 mb-4">
          Esta tarjeta utiliza **design tokens** para padding, border-radius y box-shadow.
        </p>
        <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors duration-200">
          Acción principal
        </button>
      </div>


    </div>
  )
}
export default App
