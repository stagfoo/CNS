import { Request, Response } from 'express';

export function errorMiddleware(expectedError: {
    status: number;
    error: unknown;
    message: string;
}, req: Request, res: Response, next: (e: Error) => void) {
    const networkError = {
        status: expectedError.status ?? 500,
        error: expectedError.error ?? undefined,
        message: expectedError.message ?? 'Internal Server Error'
    }
    res.status(networkError.status).send(networkError);
    
}
