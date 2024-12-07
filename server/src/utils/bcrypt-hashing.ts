import bcrypt from 'bcrypt';

// password hashing
export const password_to_hash = (password: string) => {
	const saltRound = 10;
	const salt = bcrypt.genSaltSync(saltRound);
	return bcrypt.hashSync(password, salt);
};

// verify password
export const compare_password = (password: string, hashedPassword: string) => {
	return bcrypt.compareSync(password, hashedPassword);
};
