import Navbar from "./Navbar"
import Footer from "./Footer"

function App() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">

      <Navbar />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* tarjeta 1*/}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1SFuYuPzsO0mqGJyOP2bzNBccCYIcn5_jUiIyZJN0g&s=10" className="rounded-lg" />
          <h3 className="font-bold text-lg">Mouse Inalambrico</h3>
          <p className="text-texto-dim text-sm">Mouse ergonomico, conexion Bloutube</p>    
          <p className="text-verde font-extrabold">$89.900</p>
        </div>

        {/* tarjeta 2*/}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://exitocol.vtexassets.com/arquivos/ids/10150101/teclado-mecanico-razer-blackwidow-v3-rgb.jpg?v=637679415794200000" className="rounded-lg" />
          <h3 className="font-bold text-lg">Teclado Mecanico</h3>
          <p className="text-texto-dim text-sm">Teclado mecanico, iluminacion RGB</p>    
          <p className="text-verde font-extrabold">$149.900</p>
        </div>

                {/* tarjeta 3*/}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://carulla.vtexassets.com/arquivos/ids/12115441/monitor-gamer-acer-nitro-24-pulgadas-full-hd-75-hz-1-ms-vg240y.jpg?v=638183180733000000" className="rounded-lg" />
          <h3 className="font-bold text-lg">Monitor 24"</h3>
          <p className="text-texto-dim text-sm">Full HD, 75Hz, panel IPS</p>    
          <p className="text-verde font-extrabold">$899.900</p>
        </div>
                {/* tarjeta 4*/}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://luegopagocdn.azureedge.net/content-process/products-images/prod/2022/GEE-ABGIECLL-015-05-2024-15-27-38.webp" className="rounded-lg" />
          <h3 className="font-bold text-lg">Audifonos Bluetooth"</h3>
          <p className="text-texto-dim text-sm">Cancelacion de ruido, 20h de bateria</p>    
          <p className="text-verde font-extrabold">$199.900</p>
        </div>

      </section>
{/* Footer */}
      <Footer />

    </main>
  )
}

export default App