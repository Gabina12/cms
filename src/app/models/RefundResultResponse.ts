export class RefundResultResponse {
    Status : RefundStatus;
    Result: string;
    ResultCode: string;
    Success: boolean;
}

export enum RefundStatus
{
    Ok = 1,
    Fail = 2
}

   