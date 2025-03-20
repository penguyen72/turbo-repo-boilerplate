# `@lucid/auth`

## Cryptography Methods


### `createSalt(rounds)`

@param **rounds** The cost of processing the data. Default 10.
@return A promise to be either resolved with the generated salt or rejected with an Error

**Example Usage**
```js
import { createSalt } from '@lucid/auth';
const rounds = 10;

(async () => {
    const salt = await createSalt(rounds);
})();
```


### `hashPassword(data, salt)`

@param **data** The data to be encrypted.
@param **salt** The salt to be used in encryption.
@return A promise to be either resolved with the encrypted data salt or rejected with an Error
 
Example Usage
```js
import { createSalt, hashPassword } from '@lucid/auth';
const rounds = 10;
const examplePassword = 'password123';

(async () => {
    const salt = await createSalt(rounds);
    const hashedPassword = await hashPassword(examplePassword, salt);
})();
```

### `comparePassword(data: string | Buffer, encrypted: string): Promise<boolean>`

@param **data** The data to be encrypted.
@param **encrypted** The data to be compared against.
@return A promise to be either resolved with the comparison result salt or rejected with an Error

Example Usage
```js
import { comparePassword } from '@lucid/auth';
const rounds = 10;
const examplePassword = 'password123';

(async () => {
    const hash = ''; // load has from db

    // true outcome
    const outcomeOne = await comparePassword('password123', hash);

    // false outcome
    const outcomeTwo = await comparePassword('incorrect-password', hash);
})();
```

### `generateToken(payload, secret, expiration, algorithm, options)`

@param **payload** Payload to sign, could be an literal, buffer or string.
@param **secret** Secret for HMAC algorithms
@param **[expiration="120ms"]** expressed in seconds or a string describing a time span
@param **[algorithm="HS256"]**
@param **[options]** Options for the signature
@return The JSON Web Token string

Example Usage
```js
import { generateToken } from '@lucid/auth';
const secret = 'sAKnmzAKLf';

(async () => {
    const token = generateToken({ user: 'torvalds' }, privateKey, '120ms', 'RS256' });
})();
```

### `verifyToken(token, secret, options)`

@param **token** The JSON Web Token string
@param **secret** Secret for HMAC algorithms
@param **[options]** Options for the signature
@return The payload decoded if the signature is valid and optional expiration, audience, or issuer are valid. If not, it will throw the error.

Example Usage
```js
import { verifyToken } from '@lucid/auth';
const secret = 'sAKnmzAKLf';

(async () => {
    const token = 'some-token';
    const payload = verifyToken(token, secret);
})();
```

