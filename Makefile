install:
	npm install
lint:
	npx eslint .
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
test-coverage:
	npm test -- --coverage --coverageProvider=v8
fix:
	npx eslint . --fix
stylish:
	node bin/gendiff ./__fixtures__/file1.yml ./__fixtures__/file2.yml
plain:
	node bin/gendiff --format plain ./__fixtures__/file1.yml ./__fixtures__/file2.yml
json:
	node bin/gendiff --format json ./__fixtures__/file1.yml ./__fixtures__/file2.yml