function past(h, m, s) {
	const milliseconds = 1000;
	let hourInSeconds = h * 3600 + m * 60 + s;

	return hourInSeconds * milliseconds;
}

console.log(past(0, 0, 0));
