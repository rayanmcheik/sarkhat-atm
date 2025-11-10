import type { ReactNode } from 'react';
import './globals.css';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/" />
      </head>
      <body className="font-sans">
 
        <main className="relative min-h-screen">
   
          {children}
        </main>

    
      </body>
    </html>
  );
}
