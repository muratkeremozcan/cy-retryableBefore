# cy-retryable-before

A `before` hook alternative for Cypress that gets run when a failing test is retried.

By default cypress `before` hook isn't run when a test below it fails and is retried.
Because we use before() as a place to setup state before running assertions inside it() this means we can't make use of cypress retry functionality to make our suites more reliable.

`retryableBefore` is a workaround for this issue.

```ts
import { retryableBefore } from 'cy-retryable-before'

describe('CRUD movie', () => {
  retryableBefore(() => {
    // ...
  })

  it('should', () => {
    // ...
  })
})
```

## Demo

See [demo video](https://www.youtube.com/watch?v=g1oSBZ7vQTI).

## Setup for this repo

```bash
npm i
```

```bash
npm run lint
npm run typecheck
npm run fix:format
npm run validate # all the above in parallel

npm run test # unit tests
npm run test:watch # watch mode

npm run mock:server # starts the mock backend/provider server

npm run cy:open-local # open mode
npm run cy:run-local  # run mode
npm run cy:run-local-fast  # no video or screen shots
```

## Test the package locally

```bash
npm pack
# copy the tar file to the target repo root
npm install cy-retryable-before-1.0.0.tgz
```

## Release

```bash
# Switch to main branch and update

# Create an annotated tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push the annotated tag to GitHub
git push origin v1.0.10
# Alternatively, push all tags
git push --tags
```

## Publish (auto)

Done automatically via github actions on tag push.

> Publish manually
>
> ```bash
> npm login
> # enter creds
>
> npm publish
>
> # Note: If your package name is scoped
> #(e.g., @yourusername/retryable-before), you might need to publish it as public:
> npm publish --access public
> ```
