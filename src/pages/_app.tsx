import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	const [showDevtools, setShowDevtools] = useState(false);
	const { session } = pageProps;

	useEffect(() => {
		// @ts-ignore
		window.toggleDevtools = () => setShowDevtools((old) => !old);
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<SessionProvider session={session}>
				<ReactQueryDevtools initialIsOpen={false} />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SessionProvider>
		</QueryClientProvider>
	);
}
