import Head from 'next/head';
import useSWR from "swr";

import {customFetcher} from "../components/customFetcher";
import UserList from "../components/UserList";

const API = "https://api.pagerduty.com";
const apiEndpoint = API + "/users";

export async function getServerSideProps() {
    const userListResponse: ApiListUsers = await customFetcher(apiEndpoint);
    return {
        props: {
            fallback: {
                [apiEndpoint]: userListResponse,
            }
        }
    };
}

export default function Home() {
    const { data, error } = useSWR(apiEndpoint);

    return (
        <div className="container">
            <Head>
                <title>PagerDuty Address Book</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <h1>PagerDuty Address Book</h1>
                <UserList users={data.users} />
            </main>
        </div>
    )
}
