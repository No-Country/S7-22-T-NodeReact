import '@/styles/globals.css';

import { UserContextProvider } from '@/contexts/UserContext';
import { Roboto_Flex } from 'next/font/google';

const roboto = Roboto_Flex({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </UserContextProvider>
  );
}
