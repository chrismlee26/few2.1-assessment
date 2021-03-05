const Lib = require('../src/index');

// Regular String Functions

test('capitalize first char', () => {
  expect(Lib.capitalize('hello world')).toBe('Hello world');
});

test('ALL CAPS', () => {
  expect(Lib.allCaps("asdf")).toBe('ASDF');
});

test('capitalize first char', () => {
  expect(Lib.capitalizeWords("here is my string")).toBe('Here Is My String');
})

test('remove extra whitespace and spaces', () => {
  expect(Lib.removeExtraSpaces("    hello    world   ")).toBe('hello world');
})

test('convert to kebob-case', () => {
  expect(Lib.kebobCase("hello wORld foo bar")).toBe('hello-world-foo-bar');
})

test('convert to snake_case', () => {
  expect(Lib.snakeCase("hello wORld foo bar")).toBe('hello_world_foo_bar');
})

test('convert to camelCase', () => {
  expect(Lib.camelCase('hello world')).toBe('helloWorld');
})

test('move first char in string to end', () => {
  expect(Lib.shiftChar('Hello world')).toBe('ello worldH');
})

test('makes string into hashtag', () => {
  expect(Lib.makeHashTag('hash tag string is a hard one')).toBe('#StringHashHard');
} )

test('returns true if string only has whitespace', () => {
  expect(Lib.isEmpty('  ')).toBeTruthy
})
