import './globals.css';

export const metadata = {
  title: 'Developer Portfolio',
  description: 'Showcase of our development projects and skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-city bg-cover bg-center bg-no-repeat text-white">
        {children}
      </body>
    </html>
  );
}
