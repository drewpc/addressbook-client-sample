import {useState} from "react";

import UserDetail from "./UserDetail";

function UserListItem(props: {user: ApiUser}): JSX.Element {
    const {user} = props;
    const [showDetails, setShowDetails] = useState(false);

    // Display user details in a simple, expandable list when clicking on the button.

    return <li>
        <img alt="user profile picture" src={user.avatar_url} width={20} /> &nbsp;{user.name}
        <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Hide": "Show"} Details</button>
        {showDetails && <UserDetail user={user} />}
    </li>;
}

export default function UserList(props: {users: Array<ApiUser>}): JSX.Element {
    const {users} = props;

    return <ul>
        {users.map((user) => <UserListItem key={user.id} user={user} />)}
    </ul>
}