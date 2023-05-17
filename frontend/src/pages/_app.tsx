import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import {Toaster} from "react-hot-toast";
import {QuantityProvider} from "@/contexts/quantityProvider";
import {CartProvider} from "@/contexts/cartProvider";
import {PageLayout} from "@/layouts/page.layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <QuantityProvider>
        <CartProvider>
          <PageLayout>
            <Toaster />
            <Component {...pageProps} />
          </PageLayout>
        </CartProvider>
      </QuantityProvider>
  )
}