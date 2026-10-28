import Provider from './providers';
import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}