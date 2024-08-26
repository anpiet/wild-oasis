import Logo from './components/Logo';
import { Navigation } from './components/Navigation';
import '@/app/styles/globals.css';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  // title: 'Oasis website',
  title: {
    template: 'The Wild Oasis | %s',
    default: 'The Wild Oasis',
  },
  description: 'Luxurious cabin hotel in the centre of Italian Alps',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`bg-blue-500 text-gray-50 min-h-screen ${josefin.className}`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>

        <footer>Copyright by the Wild Oasis</footer>
      </body>
    </html>
  );
}
