'use client';
import '../globals.css';
import { usePathname } from 'next/navigation';

// Import Global Components
import { TopNav } from '@/components/TopNav/TopNav';
import { Footer, FooterBottom } from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // console.log('Route', pathname);
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-[100vh]">
          <div className="pb-[743px] md:pb-[580px] lg:pb-[370px]">
            <TopNav />
            <main
              className={`${
                pathname === '/'
                  ? 'left-0 w-screen max-w-none'
                  : 'w-full max-w-[1280px] p-3'
              } mx-auto mt-10 md:mt-[65px]`}
            >
              {children}
            </main>
          </div>
          <footer className="absolute w-full bottom-0 -z-10">
            <Footer />
            <FooterBottom />
          </footer>
        </div>
      </body>
    </html>
  );
}
