type ApiContactMethods = ApiPhoneContactMethod | ApiSmsContactMethod | ApiPushNotificationContactMethod | ApiEmailContactMethod;

interface ApiPhoneContactMethod extends ApiExtraInfo {
    type: "phone_contact_method",
    label: string,
    address: string,
    country_code: number,
    enabled: boolean,
    blacklisted: boolean,
}

interface ApiSmsContactMethod extends ApiPhoneContactMethod {
    type: "sms_contact_method",
}

interface ApiPushNotificationContactMethod extends ApiExtraInfo {
    type: "push_notification_contact_method",
    label: string,
    address: string,
    device_type: "android" | "ios",
    sounds: ApiSounds[],
    created_at: string,
    blacklisted: boolean,
}

interface ApiSounds {
    type: "alert_high_urgency" | "alert_low_urgency",
    file: string,
}

interface ApiEmailContactMethod extends ApiExtraInfo {
    type: "email_contact_method",
    label: string,
    address: string,
    send_short_email: boolean,
}
