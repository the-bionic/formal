# Contributing guidelines

First of all, thanks for your interest on contributing to this project 🙌🏻.

Before you start working on your proposal, please browse open issues and PRs to ensure anyone else is working on the same thing. If no one is doing it, then open an issue first requesting for comments and validations from the project maintainers.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Setup](#setup)
- [Running web app](#running-web-app)
- [Running mobile app](#running-mobile-app)
- [Testing](#testing)
- [Sending your changes](#sending-your-changes)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Setup

1. Fork and clone this repo.
2. Run `yarn setup` to install dependencies and run validations.

## Running web app

To run the web storybook, run `yarn start:web`, this will start typescript in watch mode for all packages and the storybook dev server.

## Running mobile app

To run the mobile app, run `yarn native:start`, this will start typescript in watch mode for all packages and the expo bundler.

## Testing

To run the tests run `yarn test` or `yarn test --watch` to watch for changes. **Please write some tests if you are changing anything 🙏🏻**.

## Sending your changes

So you finished your new kick ass **feature**, life saving **bugfix**, confidence boost **test** or user engaging **documentation**. Now what?

First, ensure everything works by running `yarn validate`. Although this will be also validated on the CI system, it will anticipate any issue and avoid you further work to pass the CI.

Once you are sure there is no validation issues, go ahead and open a PR and wait for your awesome work to be included.
