import React from 'react';
import renderer from 'react-test-renderer';
import UserContactMethod from './UserContactMethod';

const emailContact = {
    id: "a",
    type: "email_contact_method",
    label: "Home",
    address: "user@email.com",
} as ApiEmailContactMethod;

const phoneContact = {
    id: "b",
    type: "phone_contact_method",
    label: "Mobile",
    country_code: 1,
    address: "7205551212",
} as ApiPhoneContactMethod;

const smsContact = {
    id: "c",
    type: "sms_contact_method",
    label: "Mobile",
    country_code: 1,
    address: "7205551212",
} as ApiSmsContactMethod;

const pushContact = {
    type: "push_notification_contact_method",
    id: "d",
} as ApiPushNotificationContactMethod;

describe('User Contact Method component', () => {
    it('renders a phone contact', () => {
        const tree = renderer
            .create(<UserContactMethod contact={phoneContact}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders an email contact', () => {
        const tree = renderer
            .create(<UserContactMethod contact={emailContact}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders an sms contact', () => {
        const tree = renderer
            .create(<UserContactMethod contact={smsContact}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('does not render a push notification contact', () => {
        const tree = renderer
            .create(<UserContactMethod contact={pushContact}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
