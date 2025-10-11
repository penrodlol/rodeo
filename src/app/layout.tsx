import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Geist, Geist_Mono } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import Header from './_header';
import './tailwind.css';

const sans = Geist({ variable: '--font-sans', subsets: ['latin'] });
const mono = Geist_Mono({ variable: '--font-mono', subsets: ['latin'] });

export const metadata: Metadata = { title: 'Rodeo', description: 'UI Component Library' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="[scrollbar-color:var(--gray-9)_transparent] [scrollbar-width:thin]"
    >
      <body
        className={twMerge(
          'bg-gray-1 text-gray-12 selection:bg-accent-5 flex min-h-svh flex-col text-base antialiased',
          sans.variable,
          mono.variable,
        )}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <footer></footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
