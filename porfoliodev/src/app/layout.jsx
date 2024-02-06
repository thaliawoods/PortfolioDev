import Navbar from "@/Layout/NavBar/Navbar"
import "./globals.css"
import Footer from '@/Layout/Footer/footer'

// titre description
export const metadata = {
  title: "Portfolio",
  description: "Portfolio Dev",
};

// 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <div className={"MainContainer"}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
