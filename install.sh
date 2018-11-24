#!/usr/bin/env bash

git clone git@github.com:parlr/lsf-e2e-tests.git cypress

yarn add --dev cypress

cp cypress/.travis.yml ./
cp cypress/cypress.json ./