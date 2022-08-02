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
	node gendiff ./__fixtures__/yml/file1.yml ./__fixtures__/yml/file2.yml
plain:
	node gendiff --format plain ./__fixtures__/yml/file1.yml ./__fixtures__/yml/file2.yml
json:
	node gendiff --format json ./__fixtures__/yml/file1.yml ./__fixtures__/yml/file2.yml