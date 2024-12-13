import mongoose from 'mongoose';
import { config } from '../config';

export const DatabaseConnection = async () => {
	try {
		const connection = await mongoose.connect(config.MONGO_STRING!);

		if (connection) {
			console.info('connection established');
		}
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
};
