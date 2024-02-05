import './globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Adarsh Foundation',
  description: 'Adarsh Foundation- De-Addiction Center',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div  className="bg-blue-800 flex items-center">
        <img src="/logo.png" alt="logo" className="w-[110px] h-[110px] ml-4" />
        <h2 className="font-bold text-[30px] text-white" >Adarsh Foundation</h2>
      </div>
      <hr/>
      <Navbar />
        {children}
        <Footer  />
        </body>
    </html>
  )
}
