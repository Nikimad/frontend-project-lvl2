install:
	npm install
lint:
	npx eslint .
test:
	npm test
test-coverage:
	npx jest --coverage
fix:
	npx eslint . --fix