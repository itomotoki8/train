import { Provider } from 'react-redux'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../redux/store';
import Layout from '../components/train/Layouts';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </Layout>
);
}

export default MyApp
