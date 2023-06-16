/**
 * Generates a random UUID.
 * @returns randomly generated uuidv4
 */
export const uuidv4 = (): string =>
	URL.createObjectURL(new Blob())
		.substr(-36)
		.replace(/[^a-z0-9]/gi, "");
