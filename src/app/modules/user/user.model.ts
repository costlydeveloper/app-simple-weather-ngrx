export interface IUser {
	password: string;
	email: string;
}

export class User implements IUser {
	password: string = '';
	email: string  = '';
}
