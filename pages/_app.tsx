import type { AppProps /*, AppContext */ } from 'next/app'
import { SWRConfig } from "swr";

import {customFetcher} from "../components/customFetcher";

export default function App({Component, pageProps}: AppProps) {
    return (
        <SWRConfig value={{
            fetcher: customFetcher,
            fallback: pageProps.fallback,
        }}>
            <Component {...pageProps} />
        </SWRConfig>
    );
}