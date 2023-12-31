import '../globals.css';

export const metadata = {
  title: 'Clay Music Admin',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-[100vh]">
          <div>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
