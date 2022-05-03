import withRedux from "next-redux-wrapper";
import { initStore } from "../redux";
import { Provider } from "react-redux";
import "../styles/css/utils.css";

function MyApp({ Component, pageProps, store }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default withRedux(initStore, { debug: false })(MyApp);
