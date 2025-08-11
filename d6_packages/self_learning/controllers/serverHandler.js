import { readFile } from "fs/promises";
import { handleFormSubmission } from "./formHandler.js";
import { paths } from "../data/paths.js";
/**
 * @param {import('http').IncomingMessage} req 
 * @param {import('http').ServerResponse} res 
 */
export async function ServerHandler(req, res) {
	const absolutePaths = paths;
	if (req.method === 'GET' && req.url === '/') {
		const html = await readFile(absolutePaths.FormHtmlPath, 'utf-8');
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(html);
	}
	else if (req.method === 'POST' && req.url === '/submit-form') {
		handleFormSubmission(req, res);
	}
	else {
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('Not Found');
	}
}
