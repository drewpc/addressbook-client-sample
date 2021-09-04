import parsePhoneNumber from 'libphonenumber-js';

function DisplayEmail(props: {contact: ApiEmailContactMethod}): JSX.Element {
    const {contact} = props;
    return <li>[email] {contact.label} - &nbsp;
        <a href={"mailto:" + contact.address}>{contact.address}</a>
    </li>
}

function DisplayPhone(props: {contact: ApiPhoneContactMethod}): JSX.Element {
    const {contact} = props;
    const phoneNumber = parsePhoneNumber(`+${contact.country_code}${contact.address}`);

    return <li>[phone] {contact.label} - &nbsp;
        <a href={phoneNumber.getURI()}>{phoneNumber.formatInternational()}</a>
    </li>
}

function DisplaySms(props: {contact: ApiSmsContactMethod}): JSX.Element {
    const {contact} = props;
    const phoneNumber = parsePhoneNumber(`+${contact.country_code}${contact.address}`);
    return <li>[sms] {contact.label} - {phoneNumber.formatInternational()}
    </li>
}

export default function UserContactMethod(props: {contact: ApiContactMethods}): JSX.Element {
    const {contact} = props;

    // Display phone, sms, or email contact information only.

    let displayValue;
    switch(contact.type) {
        case "phone_contact_method":
            displayValue = <DisplayPhone contact={contact} />
            break;

        case "sms_contact_method":
            displayValue = <DisplaySms contact={contact} />
            break;

        case "email_contact_method":
            displayValue = <DisplayEmail contact={contact} />
            break;

        default:
            displayValue = <></>;
    }

    return displayValue;
}