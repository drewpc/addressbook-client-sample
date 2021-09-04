import Head from 'next/head';
import {useState} from "react";
import useSWR from "swr";

import {customFetcher} from "../components/customFetcher";
import UserList from "../components/UserList";

const apiPageSize = 25;
const apiStartingOffset = 0;
const API = "https://api.pagerduty.com";
const apiEndpoint = `${API}/users?total=true&include[]=contact_methods&page=${apiPageSize}`;

export async function getServerSideProps() {
    // This function enables server side rendering so first page load is more complete and faster.
    // Using SWR, the initial result of this query is hydrated on the client side so the client doesn't make
    // the first request a second time.
    const paginatedApiEndpoint = `${apiEndpoint}&offset=${apiStartingOffset}`;
    const userListResponse: ApiListUsers = await customFetcher(paginatedApiEndpoint);
    return {
        props: {
            fallback: {
                [paginatedApiEndpoint]: userListResponse,
            }
        }
    };
}

export default function Home() {
    const [currentOffset, setCurrentOffset] = useState(apiStartingOffset);

    // Query the API every time currenOffset changes.
    const paginatedApiEndpoint = `${apiEndpoint}&offset=${currentOffset}`;
    const {data, error} = useSWR(paginatedApiEndpoint);

    if (error) {
        // No real error handling here, just dump it into the console.
        console.error('error: ', error);
    }

    let currentUsers = 0,
        prevUsers = 0,
        nextUsers = 0;

    if (data) {
        // Build some counters to let the user know how many users can be displayed in the prev/next pagination
        // feature.
        currentUsers = data.users.length;
        prevUsers = Math.min(data.offset, apiPageSize);
        nextUsers = Math.min(data.total - (data.offset + currentUsers), apiPageSize);
    }

    return (
        <div className="container">
            <Head>
                <title>PagerDuty Address Book</title>
            </Head>
            <main>
                <h1>PagerDuty Address Book</h1>
                {!data && <h2>Please hold; still loading...</h2>}
                {data && <UserList users={data.users} />}
                <button disabled={prevUsers === 0}
                    onClick={() => setCurrentOffset(currentOffset - apiPageSize)}>Prev {prevUsers} Users</button>
                <button disabled={nextUsers === 0}
                    onClick={() => setCurrentOffset(currentOffset + apiPageSize)}>Next {nextUsers} Users</button>
            </main>
        </div>
    )
}
