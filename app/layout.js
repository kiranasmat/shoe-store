import "./globals.css";

import ClientProvider from "./ClientProvider";
export const metadata = {
  title: "Shoe Store",
  description: "Buy your favorite shoes online",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <ClientProvider>
          <div className="d-flex flex-column min-vh-100">
            <main className="flex-grow-1 d-flex flex-column">{children}</main>
          </div>
        </ClientProvider>
      </body>
    </html>
  );
}
