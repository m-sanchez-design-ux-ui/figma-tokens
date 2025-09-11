// import Header from './components/header/header' 
// import Footer from './components/footer/footer' 
// import Card from './components/card/card'
// import CardProfile from "./components/card/card-profile"

function App() {
  return (
<main className="bg-body flex items-center justify-center min-h-screen">

<div className="bg-white rounded-card p-card shadow-md">
  <div className="w-full flex flex-col gap-md">
    <h1 className="text-title text-center">Figma Tokens Demo</h1>
    <p className="text-paragraph text-center">¡Los estilos se están aplicando correctamente!</p>
    
    <div className="flex gap-lg justify-center">
      <button className="bg-primary-button rounded-button py-button-base-y px-button-base-x font-bold text-white shadow-lg">
        Botón Primario
      </button>
      <button className="bg-bg-card rounded-button py-button-lg-y px-button-lg-x font-medium text-text-primary border border-line-button-secondary">
        Botón Secundario
      </button>
    </div>

    <div className="mt-footer flex justify-center">
      <div className="p-footer bg-bg-footer border-t border-line-footer">
        <p className="text-sm text-text-tertiary">
          Pie de página de ejemplo
        </p>
      </div>
    </div>
  </div>
</div>

</main>
  )
}
export default App