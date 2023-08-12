import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Amazon 2.0",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
