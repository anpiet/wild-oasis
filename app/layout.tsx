import Logo from './components/Logo';
import '@/app/styles/globals.css';
import { Josefin_Sans } from 'next/font/google';
import Navigation from './components/Navigation';
import Header from './components/Header';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  // title: 'Oasis website',
  title: {
    template: 'The Wild Oasis | %s',
    default: 'The Wild Oasis | Welcome',
  },
  description:
    'Luxurious cabin hotel, located in the hear of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`bg-primary-950 text-primary-100 min-h-screen ${josefin.className} antialiased flex flex-col`}
      >
        <Header />
        <div className='flex-1 px-8 py-12 grid'>
          <main className='max-w-7xl mx-auto w-full'>{children}</main>
        </div>

        {/* <footer>Copyright by the Wild Oasis</footer> */}
      </body>
    </html>
  );
}
