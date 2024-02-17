const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

// monkey patching the utils.getWinner function
const originalGetWinner = utils.getWinner;
// override to be a function that always returns
// player 1 so we don't have random pass/fail tests
utils.getWinner = (p1, p2) => p1;

// run the test for thumbWar which now uses
// the monkey patched version of getWinner
const winner = thumbWar("Kent C. Dodds", "Ken Wheeler");
assert.strictEqual(winner, "Kent C. Dodds");

// cleanup
// set getWinner back to it's original state
utils.getWinner = originalGetWinner;

// Think about what is going on above
// we are mocking getWinner and giving it a
// different implementation that we can control
// for our test.

// then like running an afterEach function
// we perform a mock reset by setting getWinner
// back to it's original state.

// read more about monkeys... and monkey patching
