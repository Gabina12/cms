export class ReversalResultResponse {
    Status : ReversalStatus;
    Result: string;
    ResultCode: string;
    Success: boolean;
}

export enum ReversalStatus
{
    Ok = 1,
    Fail = 2
}