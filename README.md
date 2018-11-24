### Install

From your project `root` directory:

    curl --location --silent https://git.io/lsf-e2e | bash

### Configure

Add the following scripts to your `package.json`

    "scripts": {
        ...
        "start": "node server.js",
        "test:e2e": "cypress run"
    }
