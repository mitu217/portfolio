import { ReactNode } from 'react';
import Card from './assets/card';
import Footer from './assets/footer';

const Layout = ({ children }: Props) => {
  return (
    <main>
      {children}
      <Card />
      <Footer />
    </main>
  );
};

type Props = {
  children?: ReactNode;
};

export default Layout;
