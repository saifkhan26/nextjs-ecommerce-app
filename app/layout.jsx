import "@styles/global.css";
import ProductProvider from "@components/ProductProvider";
import Header from "@components/Header";
import Footer from "@components/Footer";

export const metadata = {
  title: "Ecommerce app",
  description: "Ecommerce app with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="bg-lavender-blush">
          <ProductProvider>{children}</ProductProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
