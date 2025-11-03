import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Geist, Syne } from 'next/font/google';

const geist = Syne({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
