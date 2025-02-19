const httpConfig = () => ({
    // Success responses
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,

    // Client error responses
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,

    // Server error responses
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
});

export const HTTPSTATUS = httpConfig();
export type HttpStatusCodeType = (typeof HTTPSTATUS)[keyof typeof HTTPSTATUS];

// keyof typeof HTTPSTATUS output will be:- 
// "OK" | "CREATED" | "ACCEPTED" | "NO_CONTENT" | "BAD_REQUEST" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_ALLOWED" | "CONFLICT" | "UNPROCESSABLE_ENTITY" | "TOO_MANY_REQUESTS" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "BAD_GATEWAY" | "SERVICE_UNAVAILABLE" | "GATEWAY_TIMEOUT"
//
// (typeof HTTPSTATUS)[keyof typeof HTTPSTATUS] output will be :-
// 200 | 201 | 202 | 204 | 400 | 401 | 403 | 404 | 405 | 409 | 422 | 429 | 500 | 501 | 502 | 503 | 504
