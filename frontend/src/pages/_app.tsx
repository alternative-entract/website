import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import {Toaster} from "react-hot-toast";

import {QuantityProvider} from "@/contexts/quantityProvider";
import {CartProvider} from "@/contexts/cartProvider";
import {PageLayout} from "@/layouts/page.layout";
import {UserProvider} from "@auth0/nextjs-auth0/client";
import {AuthProvider, AuthWrapper} from "@/features/auth/auth";

export default function App({ Component, pageProps }: AppProps) {
    return (
      <AuthProvider>
          <QuantityProvider>
              <CartProvider>
                  <PageLayout>
                      <Toaster />
                      <Component {...pageProps} />
                  </PageLayout>
              </CartProvider>
          </QuantityProvider>
      </AuthProvider>
  )
}