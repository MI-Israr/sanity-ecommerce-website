import { Layout } from "@/components";
import "./globals.css";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StateContext>
          <Layout>
            <Toaster />
            {children}
          </Layout>
        </StateContext>
      </body>
    </html>
  );
}
