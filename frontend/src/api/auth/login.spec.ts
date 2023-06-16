import {loginAPI} from "./login";

jest.mock('./login');

const mockLoginBS = jest.fn();
const mockPost = jest.fn();

const email = 'awesome@mail.com';
const password = 'password';
const token = 'access_token';

describe('Login', () => {

	it('should return token when login is a success', async () => {
		mockLoginBS.mockResolvedValueOnce({
			email,
			token,
		});

		const result = await loginAPI(email, password);

		expect(result).toEqual({
			email,
			token,
		});

	});

	it('should login user and get an access-token', async () => {
		const successResponse = {
			status: 200,
			data: {
				code: 'OK',
				access_token: 'my-awesome-access-token',
			},
		};

		mockPost.mockReturnValue(successResponse);

		const loginRequest = {
			'user.email': 'test@tes.com',
			'user.password': 'supersafepassword',
		};

		const result = await loginAPI(
			'test@tes.com',
			'supersafepassword'
		);

		expect(mockPost).toHaveBeenCalledWith(
			'user/_login',
			loginRequest,
		);
		expect(result).toBe(successResponse.data);
	});
})
