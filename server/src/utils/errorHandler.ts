import { Request, Response } from 'express';

export class customError extends Error {
	errorMessage: string;
	errorCode: number;

	constructor(errorMessage: string, errorCode: number) {
		super(errorMessage);
		this.name = 'error';
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
	}
}

export const errorHandler = (err: any, _req: Request, res: Response): void => {
	if (err instanceof customError) {
		res.status(err.errorCode).json({ error: err.errorMessage });
	}

	res.status(500).json({ error: 'Internal server error' });
};
