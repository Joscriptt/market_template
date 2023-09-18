import Theming from "@/Theme/Theming";
import "./globals.css";
import Header from "@/app/Header/page";
import Footer from "@/app/Footer/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theming>
          <Header />
          <main>{children}</main>
          <Footer />
        </Theming>
      </body>
    </html>
  );
}
