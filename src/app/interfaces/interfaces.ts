export interface ContactUs
{
    PhoneNumber: string,
    EmailAddress: string,
    Name: string,
    Subject: string,
    Message: string
}

export interface SubscribeToNewsletter
{
    //PhoneNumber: string;
    EmailAddress: string;
}

export interface CreateUser
{
    FirstName: string;
    LastName: string;
    CompanyName: string;
    EmailAddress: string;
    PhoneNumber: string;
    CountryId: number;
    StateId: number;
    Password: string;
}

export interface LoginObj
{
    Email: string;
    Password: string;
}

