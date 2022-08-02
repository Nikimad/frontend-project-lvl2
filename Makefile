install:
	npm install
lint:
	npx eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8
fix:
	npx eslint . --fix
stylish:
	node gendiff ./__fixtures__/json/file1.json ./__fixtures__/json/file2.json
plain:
	node gendiff --format plain ./__fixtures__/json/file1.json ./__fixtures__/json/file2.json
json:
	node gendiff --format json ./__fixtures__/json/file1.json ./__fixtures__/json/file2.json