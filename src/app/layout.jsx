'use client'
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth'


export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body style={{margin:0}}>
        <SessionProvider session={Session}>
          {children}
        </SessionProvider>
        </body>
      </html>
   
  );
}
