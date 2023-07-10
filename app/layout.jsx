import "@styles/global.css";

export const metadata = {
  title: "Ecommerce app",
  description: "Ecommerce app with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="bg-lavender-blush">{children}</main>
      </body>
    </html>
  );
}
