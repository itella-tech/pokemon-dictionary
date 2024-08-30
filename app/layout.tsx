import Sidebar from '@/components/Sidebar'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen w-full bg-background">
          <Sidebar />
          <main className="flex-1 p-6 md:p-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
