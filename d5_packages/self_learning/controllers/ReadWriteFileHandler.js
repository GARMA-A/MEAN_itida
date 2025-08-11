import fs from 'fs';
/**
 *@param {string} filaPath 
 *@param {string} data
 */
export function AddToFile(filaPath, data) {
	const formData = Object.fromEntries(new URLSearchParams(data));

	let existingData = [];
	if (fs.existsSync(filaPath)) {
		const fileContent = fs.readFileSync(filaPath, 'utf8');
		if (fileContent.trim()) {
			try {
				existingData = JSON.parse(fileContent);
			} catch (e) {
				console.error("Invalid JSON file format. Resetting file.");
				existingData = [];
			}
		}
	}

	existingData.push(formData);

	fs.writeFileSync(filaPath, JSON.stringify(existingData, null, 2));

	console.log('Form Data Saved:', formData);

}
