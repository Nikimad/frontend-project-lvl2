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
basic:
	node gendiff ./__fixtures__/file1.json ./__fixtures__/file2.json