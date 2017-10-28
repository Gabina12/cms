export class User {
    UserId: number;
    Email: string;
    PasswordHash: string;
    LockoutEndDateUtc: Date;
    AccessFailedCount: number;
    UserName: string;
    FirstName: string;
    LastName: string;
}