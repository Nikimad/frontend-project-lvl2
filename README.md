## Not finished

[![Actions Status](https://github.com/Nikimad/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Nikimad/frontend-project-lvl2/actions)
[![Lint/Tests](https://github.com/Nikimad/frontend-project-lvl2/actions/workflows/nodejs.yml/badge.svg)](https://github.com/Nikimad/frontend-project-lvl2/actions/workflows/nodejs.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/8206becf51ecd1fd9a9a/maintainability)](https://codeclimate.com/github/Nikimad/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8206becf51ecd1fd9a9a/test_coverage)](https://codeclimate.com/github/Nikimad/frontend-project-lvl2/test_coverage)

- difference calculator

input:

````json
{
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
}
````

````json
{
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}

output:
stylish

````javascript
'{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}'
````
