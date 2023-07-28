import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Flexibble",
  description: "Showcase and discover remarkble developer projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        Footer
      </body>
    </html>
  );
}
