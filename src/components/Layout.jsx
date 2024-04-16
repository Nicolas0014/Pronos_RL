import Footer from './Layout/Footer';
import Header from './Layout/Header';
import '@assets/css/layout/layout.scss';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
