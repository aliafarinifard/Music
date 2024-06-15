import "@/styles/globals.css";
import type { AppProps } from "next/app";

// ** Redux Provider
import { Provider } from "react-redux";

// ** Store
import { store } from "@/app/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
