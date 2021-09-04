import UserContactMethod from "./UserContactMethod";

export default function UserDetail(props: {user: ApiUser}): JSX.Element {
    const {user} = props;

    return <div>
        <ul>
            <li>Billed: {user.billed}</li>
            <li>Contact Information
                <ul>
                    {user.contact_methods.map((contact: ApiContactMethods) => {
                        return <UserContactMethod key={contact.id} contact={contact} />;
                    })}
                </ul>
            </li>
            <li>Description: {user.description}</li>
            <li>Invitation Sent: {user.invitation_sent}</li>
            <li>Job Title: {user.job_title}</li>
            <li>Role: {user.role}</li>
            <li>Summary: {user.summary}</li>
            <li>Timezone: {user.time_zone}</li>
        </ul>
    </div>
}