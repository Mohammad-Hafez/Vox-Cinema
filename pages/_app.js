import '@/styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Layout from '@/components/Layout';
import Script from "next/script"; 
import { FavoritesProvider } from '@/utils/favContext';
import PageLoader from '@/components/Loader';
export default function App({ Component, pageProps }) {
  return<>
  <FavoritesProvider>
    <Layout>
    <PageLoader />
    <Component {...pageProps} />
    <Script id="bootstrap-cdn" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
    </Layout>
    </FavoritesProvider>
  </>
  
}
