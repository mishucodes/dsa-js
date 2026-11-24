# DSA in JS/TS

> Work in progress: I'm adding algorithms as I learn them, and some solutions are still being corrected.

My practice implementations of classic algorithms, written in TypeScript while learning data structures and algorithms. Each file states the problem at the top, solves it, and logs a sample result.
 
## Algorithms so far
 
### Math
 
| Algorithm | Iterative | Recursive |
| --- | --- | --- |
| Fibonacci sequence | [07](Algorithms/01-math-algorithms/07-fibonacci-sequence.ts) | [12](Algorithms/01-math-algorithms/12-fibonacci-recursive.ts) |
| Factorial | [08](Algorithms/01-math-algorithms/08-factorial.ts) | [13](Algorithms/01-math-algorithms/13-factorial-recursive.ts) |
| Primality test | [09](Algorithms/01-math-algorithms/09-primality-test.ts) | |
| Power of two | [10](Algorithms/01-math-algorithms/10-power-of-two.ts) | |
 
### Search
 
| Algorithm | Iterative | Recursive |
| --- | --- | --- |
| Linear search | [15](Algorithms/02-search-algorithms/15-linear-search.ts) | |
| Binary search | [16](Algorithms/02-search-algorithms/16-binary-search.ts) | [18](Algorithms/02-search-algorithms/18-binary-search-recursive.ts) |
 
### Sorting
 
| Algorithm | File |
| --- | --- |
| Bubble sort | [20](Algorithms/03-sorting-algorithms/20-bubble-sort.ts) |
| Insertion sort | [23](Algorithms/03-sorting-algorithms/23-insertion-sort.ts) |
| Quick sort | [24](Algorithms/03-sorting-algorithms/24-quick-sort.ts) |
 
Notes on time and space complexity are in [Algorithms/Notes.txt](Algorithms/Notes.txt).
 
## Running a file
 
With Node.js 22.6 or newer, you can run any file directly:
 
```bash
node --experimental-strip-types Algorithms/03-sorting-algorithms/24-quick-sort.ts
```
 
Or use [tsx](https://github.com/privatenumber/tsx): `npx tsx <file>`.
 
## Author
 
Manish Goyal | [manishgoyal.dev](https://manishgoyal.dev) | [GitHub](https://github.com/mishucodes)
 
