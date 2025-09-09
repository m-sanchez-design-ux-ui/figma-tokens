import Header from './components/header/header' 
import Footer from './components/footer/footer' 
import Card from './components/card/card'

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-bg-body">
        
        {/* Header Tokens*/}
        <Header/>


        {/* Container Title & Card */}
        <section className='flex flex-col items-center gap-gap-lg'>

          {/* Title h2 Tokens */}
          <h1 className="text-text-title text-h2 font-600">
            Here put the title...
          </h1>

          {/* Card Tokens */}  
          <Card/>

        </section>

        {/* Footer Tokens*/}
        <Footer />
    </main>
  )
}
export default App
