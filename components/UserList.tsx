function UserListItem(props: {user: ApiUser}): JSX.Element {
    const {user} = props;

    return <li>{user.name}</li>;
}

export default function UserList(props: {users: Array<ApiUser>}): JSX.Element {
    const {users} = props;

    return <ul>
        {users.map((user) => <UserListItem key={user.id} user={user} />)}
    </ul>
}