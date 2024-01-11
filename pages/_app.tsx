import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-[100vh]  max-w-screen-2xl  mx-auto ">
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <div className="sticky top-[100%]">
        <Footer />
      </div>
    </div>
  );
}
