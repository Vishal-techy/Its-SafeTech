import { Inter } from "next/font/google";
import "../../styles/globals.css";
import '../../styles/navbar.css'
import '../../styles/page.css'
import "../../styles/emergencyPatientCard.css"
import '../../styles/appoinmentCard.css'
import '../../styles/appoinmentForm.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
