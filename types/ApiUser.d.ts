interface ApiUser {
    name: string,
    email: string,
    time_zone: string,
    color: string,
    avatar_url: string,
    billed: boolean,
    role: string,
    description: string | null,
    invitation_sent: boolean,
    job_title: string | null,
    teams: Array<ApiExtraInfo>,
    contact_methods: Array<ApiExtraInfo>,
    notification_rules: Array<ApiExtraInfo>,
    coordinated_incidents: string[],
    id: string,
    type: 'user',
    summary: string | null,
    self: string | null,
    html_url: string | null,
}

interface ApiExtraInfo {
    id: string,
    summary: string | null,
    type: string,
    self: string | null,
    html_url: string | null,
}