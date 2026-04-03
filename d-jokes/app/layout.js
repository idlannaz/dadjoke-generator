import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Inter as InterFont } from "next/font/google";

const inter = InterFont({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dad Joke Generator",
  description: "A simple app to fetch and save dad jokes",
};

//RootLayout is a special component in Next.js that wraps all pages and components in the app. It is used to define the overall structure of the application, such as the HTML and body tags, and to include any global components like a navigation bar. In this case, we are using RootLayout to include the NavBar component on every page of the app.
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${    geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
