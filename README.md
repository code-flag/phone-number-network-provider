

### **Nigerian Phone Number Network Provider Validator**

A Node.js package to **validate phone numbers** and **verify network provider** for Nigerian phone numbers. It supports both **sync** and **async** validation, ensuring that phone numbers are valid and belong to a recognized network provider.

## Features

- **Sync and Async Validation**: Easily validate phone numbers synchronously or asynchronously.
- **Automatic Removal of Country Code**: Handles both regular and international formats of Nigerian phone numbers.
- **Supports both CommonJS and ES Modules**: Works in both traditional Node.js (`require`) and modern JavaScript (`import`).

## Installation

You can install the package via npm:

```bash
npm i phone-number-network-provider
```
```bash
yarn add phone-number-network-provider
```

## Usage

You can use the package in both **JavaScript** and **TypeScript** applications.

### 1. Importing the Module

#### **CommonJS (Node.js)**

```javascript
const { verifyNetworkProviderSync, verifyNetworkProviderAsync } = require('phone-number-network-provider');

// Synchronous validation
const resultSync = verifyNetworkProviderSync('08031234567');
console.log(resultSync);

// Asynchronous validation
verifyNetworkProviderAsync('08031234567')
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

#### **ES Modules (ESM)**

```javascript
import { verifyNetworkProviderSync, verifyNetworkProviderAsync } from 'phone-number-network-provider';

// Synchronous validation
const resultSync = verifyNetworkProviderSync('08031234567');
console.log(resultSync);

// Asynchronous validation
verifyNetworkProviderAsync('08031234567')
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

### 2. Validating Phone Numbers

- **Synchronous Validation**:  
  This method checks if the phone number is valid, and whether it matches a known network provider (based on prefixes).

  ```javascript
  const result = verifyNetworkProviderSync('08031234567');
  console.log(result);
  ```

  **Returns**:  
  If the phone number is valid, it returns an object with the network provider's name and `isValid: true`.  
  Otherwise, it returns an object with an array of error messages and `isValid: false`.

  Example Result:
  ```javascript
  {
    telco: 'AIRTEL',
    isValid: true
  }
  ```

  Or an error result:
  ```javascript
  {
    errors: ["Phone number doesn't match a valid service provider", "Phone number should be 11 characters long"],
    isValid: false
  }
  ```

- **Asynchronous Validation**:  
  This method works similarly to the synchronous method, but returns a **Promise** for asynchronous handling.

  ```javascript
  verifyNetworkProviderAsync('08031234567')
    .then(result => console.log(result))
    .catch(error => console.log(error));
  ```

  **Returns**:  
  If the phone number is valid, it resolves with the validation result object. If invalid, it rejects with the error result.

### 3. Remove Country Code
The phone numbers in Nigeria often come with a country code `+234` or `234`. This package automatically removes it and transforms the number into a standard format (starting with `0`).

For example:
- `+2348031234567` → `08031234567`
- `2348031234567` → `08031234567`

### 4. Supported Providers
This package supports validation for several Nigerian network providers. It checks the phone number's prefix against a predefined list, including:

- AIRTEL
- MTN
- GLO
- 9MOBILE
- SMILE
- STARCOMMS
- ZOOMMOBILE
- MULTI-LINKS
- NTEL

## TypeScript Support

This package comes with TypeScript declaration files, so if you're using TypeScript, you can get full type safety and autocompletion.

```typescript
import { verifyNetworkProviderSync, verifyNetworkProviderAsync } from 'phone-number-network-provider';

const result = verifyNetworkProviderSync('08031234567');
console.log(result);
```

## Project Structure

```
/src
  index.ts        # Main logic for validating phone numbers
  telcos.ts       # List of network providers and their prefixes
/dist
  index.js        # Compiled JavaScript file for distribution
  index.d.ts      # TypeScript declaration file
tsconfig.json     # TypeScript configuration file
package.json      # Project metadata and dependencies
README.md         # Documentation for the package
```

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request. Before submitting, ensure that your code adheres to the following guidelines:

- Write unit tests for any new functionality.
- Follow the code style and formatting conventions used in the project.
- Make sure all tests pass.

## License

MIT License. See the [LICENSE](LICENSE) file for more details.
```