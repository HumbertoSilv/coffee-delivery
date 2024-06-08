import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import stylesheet from "~/tailwind.css?url";

import { ChakraProvider } from '@chakra-ui/react';
import { withEmotionCache } from '@emotion/react';

import Header from './components/header';

import { useContext, useEffect } from "react";
import { ClientStyleContext, ServerStyleContext } from './context';
import { CartProvider } from "./hooks/cart";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous"},
  { rel: "preconnect", href: "https://fonts.googleapis.com", crossOrigin: "anonymous"},
  // eslint-disable-next-line max-len
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap", crossOrigin: "anonymous"},
];

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const {tags} = emotionCache.sheet;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en" className="antialiased">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(' ')}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          <div className="font-body text-zinc-700 bg-main">
            {children}
            <ScrollRestoration />
            <Scripts />
          </div>
          {/* <LiveReload /> */}
        </body>
      </html>
    );
  }
);

export default function App() {
  return (
    <Document>
      <ChakraProvider>
        <CartProvider>
          <Header />
          <div className="relative px-4 pt-20 sm:px-12 sm:pt-36 max-w-[85rem] m-auto shadow-xl min-h-screen">
            <Outlet />
          </div>
        </CartProvider>
      </ChakraProvider>
    </Document>

  )
}
