# Binary Braille Parser

## How it works

Add explanation of how it works

## Demo

Go to [this site](addSiteLink) and there you can test all the features of the parser.

## Installing

#### Via npm or yarn

```bash
npm i bin-braille-parser # or yarn add bin-braille-parser
```

## Usage

```js
const parserTextToBinBraille = require('bin-braille-parser')

parserTextToBinBraille("Jonh snow")

/* The return is
 [ 
  [ [ '0', '1' ], [ '1', '1' ], [ '0', '0' ] ],
  [ [ '1', '0' ], [ '0', '1' ], [ '1', '0' ] ],
  [ [ '1', '1' ], [ '0', '1' ], [ '1', '0' ] ],
  [ [ '1', '0' ], [ '1', '1' ], [ '0', '0' ] ],
  [ [ '0', '0' ], [ '0', '0' ], [ '0', '0' ] ],
  [ [ '0', '1' ], [ '1', '0' ], [ '1', '0' ] ],
  [ [ '1', '1' ], [ '0', '1' ], [ '1', '0' ] ],
  [ [ '1', '0' ], [ '0', '1' ], [ '1', '0' ] ],
  [ [ '0', '1' ], [ '1', '1' ], [ '0', '1' ] ] 
 ]
*/

```
