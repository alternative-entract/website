import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import {Toaster} from "react-hot-toast";

import {QuantityProvider} from "@/contexts/quantityProvider";
import {CartProvider} from "@/contexts/cartProvider";
import {PageLayout} from "@/layouts/page.layout";
import {UserProvider} from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }: AppProps) {
    const { user } = pageProps

    return (
      <UserProvider user={user}>
          <QuantityProvider>
              <CartProvider>
                  <PageLayout>
                      <Toaster />
                      <Component {...pageProps} />
                  </PageLayout>
              </CartProvider>
          </QuantityProvider>
      </UserProvider>
  )
}