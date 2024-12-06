# cy-retryable-before

A `before` hook alternative for Cypress that gets run when a failing test is retried.

By default cypress `before` hook isn't run when a test below it fails and is retried.
Because we use before() as a place to setup state before running assertions inside it() this means we can't make use of cypress retry functionality to make our suites more reliable.

`retryableBefore` is a workaround for this issue.

## Usage

Install, import and replace the default `before` hook with `retryableBefore` in your Cypress test file.

```bash
npm i -D cy-retryable-before
yarn add -D cy-retryable-before
pnpm i -D cy-retryable-before
```

```ts
import { retryableBefore } from 'cy-retryable-before'

describe('CRUD movie', () => {
  // just replace `before` with `retryableBefore`
  retryableBefore(() => {
    // ...
  })

  it('should', () => {
    // ...
  })
})
```

## Demo

See [demo video](https://www.youtube.com/watch?v=363okQDVNMs).
