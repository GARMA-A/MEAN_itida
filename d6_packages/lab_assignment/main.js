const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const path = require("path");
const filepath = path.join(__dirname, "products.json");

const htmlAddForm = `<form method="post" action="/add">
name:<input type="text" name="name" required><br>
price:<input type="number" name="price" required><br>
<button type="submit">add</button>
</form><hr>`;

const htmlUpdateForm = `<form method="post" action="/update">
old name:<input type="text" name="oldname" required/><br>
new name:<input type="text" name="newname" required/><br>
new price:<input type="number" name="price" required/><br>
<button type="submit">update</button>
</form><hr>`;

const deleteButton = (name) => `<form method="post" action="/delete">
<input type="hidden" name="name" value="${name}">
<button type="submit">delete</button></form>
`;

if (!fs.existsSync(filepath)) {
	fs.writeFileSync(filepath, "[]");
}

function loadProducts() {
	const data = fs.readFileSync(filepath, "utf-8");
	return JSON.parse(data);
}
function saveProducts(products) {
	fs.writeFileSync(filepath, JSON.stringify(products, null, 2));
}
function addProduct(name, price) {
	const products = loadProducts();
	if (!products.some(p => p.name === name)) {
		products.push({ name, price });
		saveProducts(products);
		return true;
	}
	return false;
}
function updateProduct(oldname, newname, price) {
	const products = loadProducts();
	const index = products.findIndex(p => p.name === oldname);
	if (index !== -1) {
		products[index] = { name: newname, price };
		saveProducts(products);
		return true;
	}
	return false;
}
function deleteProduct(name) {
	const products = loadProducts();
	const filteredProducts = products.filter(p => p.name !== name);
	console.log(filteredProducts);
	if (filteredProducts.length < products.length) {
		saveProducts(filteredProducts);
		return true;
	}
	return false;
}
const server = http.createServer((req, res) => {
	if (req.method === "GET" && req.url === "/") {
		const html = `
<html>
<div style="display: flex; flex-direction: column; align-items: center;">
<div>
<h1>Add Form</h1>
${htmlAddForm}
</div>
<div><h1>Update Form</h1>
          ${htmlUpdateForm}
</div>
</div>
<body>
	<h2>all products</h2>
	<ul>
	${loadProducts().map((p) => `<li>${p.name}-${p.price}
  
${deleteButton(p.name)}</li>`)}
	<ul>
</body>
</html>`;
		res.writeHead(200, { "content-type": "text/html" });
		res.end(html);
	} else if (req.method === "POST" && req.url === "/add") {
		let body = "";
		req.on("data", chunk => {

			console.log(body);
			body += chunk
		});

		req.on("end", () => {
			const formData = queryString.parse(body);
			const name = formData.name;
			const price = parseFloat(formData.price);
			const success = addProduct(name, price);
			if (success) {
				console.log(`Product "${name}" added successfully`);
			} else {
				console.log(`Product "${name}" already exists`);
			}
			res.writeHead(302, { Location: "/" });
			res.end();
		});

	} else if (req.method === "POST" && req.url === "/delete") {
		let body = "";
		req.on("data", chunk => body += chunk);

		req.on("end", () => {
			const formData = queryString.parse(body);
			const name = formData.name;

			const success = deleteProduct(name);
			if (success) {
				console.log(`Product "${name}" deleted successfully`);
			} else {
				console.log(`Product "${name}" not found for deletion`);
			}
			res.writeHead(302, { Location: "/" });
			res.end();
		});



	} else if (req.method === "POST" && req.url === "/update") {
		let body = "";
		req.on("data", chunk => body += chunk);
		req.on("end", () => {
			const formData = new URLSearchParams(body);
			const oldname = formData.get("oldname");
			const newname = formData.get("newname");
			const price = parseFloat(formData.get("price"));

			updateProduct(oldname, newname, price);

			res.writeHead(302, { Location: "/" });
			res.end();
		});
	}
	else {
		res.writeHead(404, { "content-type": "text/plain" })
		res.end("page not found")
	}
});

server.listen(3000, () => {
	console.log("hello from server");
})
