import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/Components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    const [showDevtools, setShowDevtools] = useState(false);
    const { session } = pageProps;

    useEffect(() => {
        // @ts-ignore
        window.toggleDevtools = () => setShowDevtools((old) => !old);
    }, []);

    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <SessionProvider session={session}>
                    <ReactQueryDevtools initialIsOpen={false} />
                    <Layout>
                        <Component {...pageProps} />
                        <ToastContainer />
                    </Layout>
                </SessionProvider>
            </QueryClientProvider>
        </RecoilRoot>
    );
}
