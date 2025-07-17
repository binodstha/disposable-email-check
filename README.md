# Disposable Email Check

[![npm version](https://img.shields.io/npm/v/@the_binod/disposable-email-check.svg)](https://www.npmjs.com/package/@the_binod/disposable-email-check)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Test Status](https://img.shields.io/badge/tests-passing-brightgreen.svg)](#testing)

Detect disposable/temporary email addresses with a simple utility function.

## Features

- Fast lookup using a Map of blocked domains
- Easy integration in any Node.js or TypeScript project
- Includes a comprehensive list of disposable email domains

## Installation

Using pnpm:

```sh
pnpm add @the_binod/disposable-email-check
```

Using npm:

```sh
npm install @the_binod/disposable-email-check
```

Using yarn:

```sh
yarn add @the_binod/disposable-email-check
```

## Usage

### Basic Example

```ts
import { isDisposableEmail } from '@the_binod/disposable-email-check';

console.log(isDisposableEmail('test@10minutemail.com')); // true
console.log(isDisposableEmail('test@gmail.com')); // false
```

### API Integration Example

```ts
import { isDisposableEmail } from '@the_binod/disposable-email-check';

function handleRegistration(email: string) {
  if (isDisposableEmail(email)) {
    throw new Error('Disposable email addresses are not allowed.');
  }
  // Proceed with registration...
}
```

### Batch Checking Example

```ts
import { isDisposableEmail } from '@the_binod/disposable-email-check';

const emails = [
  'foo@10minutemail.com',
  'bar@gmail.com',
  'baz@mailinator.com',
];

const results = emails.map(email => ({
  email,
  isDisposable: isDisposableEmail(email),
}));

console.table(results);
```

## API

### `isDisposableEmail(email: string): boolean`

Checks if the given email address is from a known disposable domain.

- **email**: The email address to check.
- **Returns**: `true` if the domain is disposable, `false` otherwise.

## Blocklist

The blocklist of disposable domains is maintained in [`src/block_domains.json`](src/block_domains.json).

### Updating the Blocklist

1. Edit `src/block_domains.json` and add or remove domains as needed (one per line, as a JSON array).
2. Rebuild the package:

   ```sh
   pnpm run build
   ```

3. (Optional) Run tests to ensure everything works:

   ```sh
   pnpm exec vitest run
   ```

## Testing

To run the unit tests:

```sh
pnpm install
pnpm exec vitest run
```

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository
2. Create a new branch for your feature or fix
3. Make your changes (add tests if possible)
4. Run tests to verify
5. Submit a pull request with a clear description

For major changes, please open an issue first to discuss what you would like to change.

### Coding Standards

- Use TypeScript
- Write clear, concise commit messages
- Add or update tests for new features or bug fixes

## Changelog

### 1.0.1

- Initial release with Map-based lookup
- Comprehensive blocklist
- Unit tests with Vitest

## Contact & Support

For questions, issues, or feature requests:

- Open an issue on the [GitHub repository](https://github.com/thebinod/disposable-email-check)
- Or contact [Binod Shrestha](mailto:@gmail.com)

## License

MIT
