import './globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

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
      <div className='social-media-container'>
          <Link href="https://www.facebook.com/profile.php?id=100092061937416&mibextid=ZbWKwL" target='_blank'>
          <img src='/social-media/facebook.png' />
          </Link>
          <Link href="https://www.instagram.com/adarshfoundationvns?igsh=eGQybHc0dXpmbnN4" target='_blank'>
          <img src='/social-media/instagram.png' />
          </Link>
          <Link href="https://x.com/AdarshFoun53350?t=0LQZRo1QaD8yz7P4UapURQ&s=09" target='_blank'>
          <img src='/social-media/vercel.png' />
          </Link>
          <Link href="https://wa.me/message/QU64B5QD6PR2C1" target='_blank'>
          <img src='/social-media/whatsapp.png' />
          </Link>
      </div>
        {children}
        <Footer  />
        </body>
    </html>
  )
}
