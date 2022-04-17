// Write a function that takes a maximum number, a number of guests inside, and a number of guests waiting. If there is room inside for all guests, return zero, otherwise return the number of people that will still be waiting.

const enough = (max, inside, waiting) => inside + waiting <= max ? 0 : (inside + waiting) - max
