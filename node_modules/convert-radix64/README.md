# Convert-Radix64
A commonJS module to convert numbers to and from radix-64 notation


## Installation

In Node.JS

```shell
npm install convert-radix64
```

## Usage

The alphabet used here is - 

```
0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
```

#### Convert to Radix64

```
const r = requrire('convert-radix64')
r.to64(0); //0
r.to64(10); //A
r.to64(64); //_
```

#### Convert from Radix64

```
const r = requrire('convert-radix64')
r.from64("A"); //10
r.from64("0"); //0
r.from64("_"); //64
```

