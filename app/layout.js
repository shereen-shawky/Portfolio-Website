import './globals.css';

export const metadata = {
  title: 'Shereen Shawky | Portfolio',
  description: 'Personal front-end portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
