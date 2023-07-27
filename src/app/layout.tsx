"use client"

import Providers from "@modules/providers"
import "styles/globals.css"
import { MedusaProvider } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";


const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
     
        <Providers>
          <main className="relative">{children}</main>
        </Providers>

      </body>
    </html>
  )
}
