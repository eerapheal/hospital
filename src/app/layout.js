import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Pharmacy Research",
  description: "Pharmacy Research and products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-fontFamily">
        <Header />
        {children}
      </body>
      <Footer />
    </html>
  );
}
