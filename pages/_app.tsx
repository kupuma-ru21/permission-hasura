import "../styles/globals.css";
import { useState } from "react";
import { QueryClient } from "react-query";
import { AppProps } from "next/app";
import { useUserChanged } from "../hooks/useUserChanged";

function MyApp({ Component, pageProps }: AppProps) {
  useUserChanged();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );
  return <Component {...pageProps} />;
}

export default MyApp;
