import { paths } from "../data/paths.js";
import { AddToFile } from "./ReadWriteFileHandler.js";
/**
 * @param {import('http').IncomingMessage} req 
 * @param {import('http').ServerResponse} res 
 */

export function handleFormSubmission(req, res) {
	const absolutePaths = paths;
	try {
		let body = '';
		req.on('data', chunk => {
			body += chunk.toString();
		});
		req.on('end', () => {
			AddToFile(absolutePaths.FormDataPath, body);
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ message: 'Form submitted successfully!' }));
		});

	} catch (error) {
		console.error('Error processing form submission:', error);
		res.writeHead(500, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ error: 'Failed to process form submission.' }));
	}
}
