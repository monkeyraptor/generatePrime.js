# generatePrime.js
JavaScript snippet to generate prime numbers

## Update

The snippet here and the one included in the demo are updated.

The update is that the starting number *isn't included in the iteration*.

## How to use
```javascript
generatePrime(starting_number, how_many)
```
The `starting_number` input must be larger than 1 and the `how_many` has to be larger than 0. Both must be positive integers.

The output is an `array` for valid or invalid input(s).

## Example

```javascript
generatePrime(3, 2); // will generate output: [5, 7]
generatePrime(15, 1); // will generate output: [17]
generatePrime(-3, 2); // will generate output: ["error info"]
```

## Demo with UI (user interface)
Go to <a href="http://portraptor.johanpaul.net/2014/05/prime-number-generator-by-monkey-raptor.html" target="_blank" title="new window">PortRaptor</a>.

The methods there are the expansions of this main snippet idea.

## This snippet is
included in <a href="https://github.com/monkeyraptor/math_operation" target="_blank" title="new window">Math Operations</a> repository.

This is a bit different than the one in `Math Operations`.

The one in `Math Operations` will *return the starting number if it's a Prime number*.
