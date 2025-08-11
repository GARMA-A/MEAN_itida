import http from 'http';
import { ServerHandler } from './controllers/serverHandler.js';

const server = http.createServer((req, res) => ServerHandler(req, res));

server.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});

server.on('error', (err) => {
	console.error('Server error:', err);
});
