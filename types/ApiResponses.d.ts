interface ApiListUsers {
    offset: number,
    limit: number,
    more: boolean,
    total: number | null,
    users: Array<ApiUser>,
}