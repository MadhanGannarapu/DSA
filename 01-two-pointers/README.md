# Two Pointers

A structured guide to mastering the **Two Pointers** technique using JavaScript, including core concepts, common mistakes, problem-solving strategies and a curated collection of practice problems.

## 🎯 Learning Objectives

* Understand the Two Pointers technique and its variations.
* Identify when to use Two Pointers instead of nested loops.
* Master opposite-direction, same-direction and fast/slow pointers.
* Understand pointer movement and termination conditions.
* Optimize time and space complexity.
* Recognize common mistakes and handle edge cases.
* Develop independent problem-solving skills.

---

# 1. Core Concepts

## 1.1 What Is the Two Pointers Technique?

Two Pointers is an algorithmic technique that uses two indices or references to traverse a data structure, typically an array, string or linked list.

Instead of repeatedly comparing every possible pair of elements, two pointers can eliminate unnecessary comparisons by moving through the data according to specific conditions.

**Example:**

Given a sorted array:

```javascript
const nums = [1, 2, 3, 4, 6];
const target = 6;
```

Find two numbers whose sum equals the target.

Using nested loops would require checking multiple pairs. With two pointers, we can start at both ends and move towards each other.

| Step | Left | Right | Sum | Action          |
| ---- | ---: | ----: | --: | --------------- |
| 1    |    1 |     6 |   7 | Move right left |
| 2    |    1 |     4 |   5 | Move left right |
| 3    |    2 |     4 |   6 | Target found    |

**Result:** `[2, 4]`

Time complexity: `O(n)`
Space complexity: `O(1)`

## 1.2 Types of Two Pointers

There are three fundamental variations.

### A. Opposite-Direction Pointers

Both pointers start at opposite ends of an array or string and move towards each other.

**Initialization:**

```javascript
let left = 0;
let right = nums.length - 1;
```

**Traversal:**

```javascript
while (left < right) {
    // Compare elements

    if (condition) {
        left++;
    } else {
        right--;
    }
}
```

**When to use:**

* Sorted arrays.
* Finding pairs with a target sum.
* Palindrome checking.
* Reversing arrays or strings.
* Finding maximum area between two boundaries.

**Example problems:**

* Two Sum II (#167)
* Valid Palindrome (#125)
* Container With Most Water (#11)
* 3Sum (#15)

### B. Same-Direction Pointers

Both pointers move in the same direction, but they serve different purposes.

Typically, one pointer scans the array while the other tracks where the next valid element should be placed.

**Initialization:**

```javascript
let slow = 0;
let fast = 0;
```

**Traversal:**

```javascript
while (fast < nums.length) {
    if (condition) {
        nums[slow] = nums[fast];
        slow++;
    }

    fast++;
}
```

**When to use:**

* Removing duplicates.
* Moving zeroes.
* In-place array modifications.
* Filtering elements.
* Maintaining a sequence of valid elements.

**Example problems:**

* Remove Duplicates from Sorted Array (#26)
* Remove Element (#27)
* Move Zeroes (#283)
* Merge Sorted Array (#88)

### C. Fast and Slow Pointers

Both pointers move in the same direction but at different speeds.

Typically, the slow pointer moves one step at a time, while the fast pointer moves two steps at a time.

**Initialization:**

```javascript
let slow = head;
let fast = head;
```

**Traversal:**

```javascript
while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
}
```

**When to use:**

* Finding the middle of a linked list.
* Detecting cycles in linked lists.
* Finding the beginning of a cycle.
* Identifying certain repeating sequences.

**Example problems:**

* Middle of the Linked List (#876)
* Linked List Cycle (#141)
* Linked List Cycle II (#142)
* Find the Duplicate Number (#287)

## 1.3 Pointer Movement Rules

Pointer movement is the most important part of the Two Pointers technique. Each movement must be justified by the problem's conditions.

| Condition                                                | Typical action                                  |
| -------------------------------------------------------- | ----------------------------------------------- |
| Current sum is smaller than the target in a sorted array | Move left pointer right                         |
| Current sum is larger than the target in a sorted array  | Move right pointer left                         |
| Characters at both ends match                            | Move both pointers inward                       |
| Characters do not match                                  | Return false or apply the problem-specific rule |
| Current element is invalid                               | Advance the scanning pointer                    |
| Current element is valid                                 | Process it and update the destination pointer   |
| Fast pointer reaches the end                             | Stop traversal                                  |
| Fast pointer moves twice as fast as slow                 | Slow pointer may reach the middle               |

These are common rules, not universal rules. Always derive pointer movements from the problem's requirements.

## 1.4 Loop Termination Conditions

Choosing the correct loop condition is essential.

| Condition                             | Typical use                                |
| ------------------------------------- | ------------------------------------------ |
| `left < right`                        | Pointers must not cross                    |
| `left <= right`                       | Both pointers may examine the same element |
| `fast < nums.length`                  | Scanning an array                          |
| `fast !== null && fast.next !== null` | Fast/slow linked-list traversal            |
| `right < nums.length`                 | Expanding a window                         |

Do not use a loop condition simply because it worked in another problem. Determine whether the current problem requires examining the same index or allows the pointers to meet.

## 1.5 Two Pointers vs. Brute Force

| Approach                    | Typical time complexity | Auxiliary space |
| --------------------------- | ----------------------- | --------------- |
| Nested loops                | `O(n²)`                 | `O(1)`          |
| Opposite-direction pointers | `O(n)`                  | `O(1)`          |
| Same-direction pointers     | `O(n)`                  | `O(1)`          |
| Fast and slow pointers      | `O(n)`                  | `O(1)`          |

The linear-time approaches generally work when the problem provides enough structure to eliminate unnecessary comparisons.

For example, opposite-direction pointers work particularly well with sorted arrays because the ordering tells us which pointer to move.

---

# 2. How to Identify Two Pointers Problems

Look for the following clues:

* The problem involves an array, string or linked list.
* You need to compare elements at different positions.
* The array is sorted, or sorting is allowed.
* The problem asks you to find a pair or rearrange elements in place.
* You need to find the middle of a linked list or detect a cycle.
* A brute-force solution uses nested loops to compare pairs.

Before choosing Two Pointers, ask yourself:

1. Can the input be traversed from both ends?
2. Can the current comparison tell me which pointer to move?
3. Can I process the data without repeatedly revisiting elements?
4. Will moving the pointers preserve the possibility of finding a valid answer?

If the answers support the technique, Two Pointers may be applicable.

---

# 3. Problem-Solving Approach

Follow these steps for every problem.

1. **Understand:** Identify the input, output and constraints.
2. **Analyze:** Work through a small example manually.
3. **Choose:** Determine which pointer variation applies.
4. **Initialize:** Decide where both pointers should start.
5. **Move:** Define the exact conditions for moving each pointer.
6. **Terminate:** Establish the correct loop condition.
7. **Validate:** Test normal cases and edge cases.
8. **Optimize:** Analyze time and space complexity.
9. **Review:** Explain why the pointer movement works.

---

# 4. Common Mistakes

Understanding common mistakes is essential because many Two Pointers problems fail due to incorrect pointer movement rather than incorrect syntax.

## 4.1 Incorrect Pointer Movement

**Mistake:** Moving the wrong pointer based on the current comparison.

For example, in a sorted-array two-sum problem, moving the left pointer when the sum is already too large can skip the correct answer.

**Incorrect:**

```javascript
if (sum > target) {
    left++;
}
```

**Correct:**

```javascript
if (sum > target) {
    right--;
}
```

The correct movement follows from the sorted order of the array.

## 4.2 Infinite Loops

**Mistake:** Forgetting to update one or both pointers.

**Incorrect:**

```javascript
while (left < right) {
    if (nums[left] + nums[right] === target) {
        return true;
    }
}
```

If the condition is false, neither pointer moves. The loop never terminates.

**Correction:** Ensure that every non-returning path advances at least one pointer.

## 4.3 Incorrect Loop Conditions

**Mistake:** Using `left <= right` when the pointers must remain distinct.

For example, when finding a pair of distinct elements, allowing the pointers to meet could cause the same element to be used twice.

**Correction:** Use `left < right` when two distinct positions are required. Use `left <= right` only when the problem permits the pointers to meet.

## 4.4 Ignoring Duplicate Values

**Mistake:** Returning duplicate pairs or triplets when the problem requires unique combinations.

For example, in 3Sum, the same combination can be discovered through multiple indices.

**Correction:** Skip repeated values at the appropriate stages, but only after handling the current valid combination.

## 4.5 Assuming Every Array Is Sorted

**Mistake:** Applying the standard opposite-direction two-sum technique to an unsorted array without accounting for ordering.

The pointer movement rules depend on sorted order.

**Correction:** Determine whether sorting is allowed. If sorting is necessary, account for its complexity and whether original indices must be preserved.

## 4.6 Modifying the Input Unexpectedly

**Mistake:** Sorting or overwriting the input when the problem requires the original order to be preserved.

**Correction:** Check whether the problem permits in-place modifications. If not, use an appropriate alternative.

## 4.7 Forgetting Boundary Conditions

**Mistake:** Handling only normal inputs.

Common missed cases include:

* Empty arrays.
* Single-element arrays.
* Two-element arrays.
* All elements being equal.
* Negative numbers.
* Duplicate values.
* No valid solution.
* Pointers meeting or crossing.

**Correction:** Test these cases before considering the solution complete.

## 4.8 Misunderstanding Fast and Slow Pointers

**Mistake:** Assuming the slow pointer always reaches the exact middle, regardless of list length or initialization.

For an even-length linked list, the slow pointer's final position depends on the initialization and loop condition.

**Correction:** Manually trace both odd-length and even-length lists.

## 4.9 Incorrect Space Complexity

**Mistake:** Claiming `O(1)` space when the solution creates another array proportional to the input size.

**Correction:** Distinguish auxiliary space from output space. A solution can use `O(1)` auxiliary space while still returning an `O(n)` result.

---

# 5. Time and Space Complexity

| Pattern                           | Typical time | Typical auxiliary space           |
| --------------------------------- | ------------ | --------------------------------- |
| Opposite-direction pointers       | `O(n)`       | `O(1)`                            |
| Same-direction pointers           | `O(n)`       | `O(1)`                            |
| Fast and slow pointers            | `O(n)`       | `O(1)`                            |
| Sorting followed by Two Pointers  | `O(n log n)` | Depends on sorting implementation |
| Two Pointers inside an outer loop | `O(n²)`      | Usually `O(1)`                    |

These complexities are typical. Always analyze the complete algorithm, including sorting, nested loops and any additional data structures.

---

# 6. Practice Problems

Problems are grouped by difficulty. Some are included because they combine Two Pointers with related techniques such as sliding windows, binary search or sorting.

## 🟢 Easy

|  # | Problem                                            | LeetCode                                                                                | Pattern            | Status |
| -: | -------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------ | :----: |
|  1 | Reverse String                                     | [344](https://leetcode.com/problems/reverse-string/)                                    | Opposite direction |    ⬜   |
|  2 | Valid Palindrome                                   | [125](https://leetcode.com/problems/valid-palindrome/)                                  | Opposite direction |    ⬜   |
|  3 | Two Sum II - Input Array Is Sorted                 | [167](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)                  | Opposite direction |    ⬜   |
|  4 | Remove Duplicates from Sorted Array                | [26](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)                | Same direction     |    ⬜   |
|  5 | Remove Element                                     | [27](https://leetcode.com/problems/remove-element/)                                     | Same direction     |    ⬜   |
|  6 | Move Zeroes                                        | [283](https://leetcode.com/problems/move-zeroes/)                                       | Same direction     |    ⬜   |
|  7 | Merge Sorted Array                                 | [88](https://leetcode.com/problems/merge-sorted-array/)                                 | Opposite direction |    ⬜   |
|  8 | Squares of a Sorted Array                          | [977](https://leetcode.com/problems/squares-of-a-sorted-array/)                         | Opposite direction |    ⬜   |
|  9 | Reverse Vowels of a String                         | [345](https://leetcode.com/problems/reverse-vowels-of-a-string/)                        | Opposite direction |    ⬜   |
| 10 | Valid Palindrome II                                | [680](https://leetcode.com/problems/valid-palindrome-ii/)                               | Opposite direction |    ⬜   |
| 11 | Is Subsequence                                     | [392](https://leetcode.com/problems/is-subsequence/)                                    | Same direction     |    ⬜   |
| 12 | Linked List Cycle                                  | [141](https://leetcode.com/problems/linked-list-cycle/)                                 | Fast and slow      |    ⬜   |
| 13 | Middle of the Linked List                          | [876](https://leetcode.com/problems/middle-of-the-linked-list/)                         | Fast and slow      |    ⬜   |
| 14 | Palindrome Linked List                             | [234](https://leetcode.com/problems/palindrome-linked-list/)                            | Fast and slow      |    ⬜   |
| 15 | Intersection of Two Linked Lists                   | [160](https://leetcode.com/problems/intersection-of-two-linked-lists/)                  | Same direction     |    ⬜   |
| 16 | Remove Duplicates from Sorted List                 | [83](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)                 | Same direction     |    ⬜   |
| 17 | Linked List Cycle II                               | [142](https://leetcode.com/problems/linked-list-cycle-ii/)                              | Fast and slow      |    ⬜   |
| 18 | Find the Index of the First Occurrence in a String | [28](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) | String matching    |    ⬜   |
| 19 | Backspace String Compare                           | [844](https://leetcode.com/problems/backspace-string-compare/)                          | Opposite direction |    ⬜   |
| 20 | Apply Operations to an Array                       | [2460](https://leetcode.com/problems/apply-operations-to-an-array/)                     | Same direction     |    ⬜   |

## 🟡 Medium

|  # | Problem                                                     | LeetCode                                                                                           | Pattern                      | Status |
| -: | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------- | :----: |
|  1 | Container With Most Water                                   | [11](https://leetcode.com/problems/container-with-most-water/)                                     | Opposite direction           |    ⬜   |
|  2 | 3Sum                                                        | [15](https://leetcode.com/problems/3sum/)                                                          | Opposite direction           |    ⬜   |
|  3 | 3Sum Closest                                                | [16](https://leetcode.com/problems/3sum-closest/)                                                  | Opposite direction           |    ⬜   |
|  4 | 4Sum                                                        | [18](https://leetcode.com/problems/4sum/)                                                          | Opposite direction           |    ⬜   |
|  5 | Sort Colors                                                 | [75](https://leetcode.com/problems/sort-colors/)                                                   | Three pointers               |    ⬜   |
|  6 | Remove Duplicates from Sorted Array II                      | [80](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)                        | Same direction               |    ⬜   |
|  7 | Partition List                                              | [86](https://leetcode.com/problems/partition-list/)                                                | Same direction               |    ⬜   |
|  8 | Rotate List                                                 | [61](https://leetcode.com/problems/rotate-list/)                                                   | Fast and slow                |    ⬜   |
|  9 | Remove Nth Node From End of List                            | [19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)                              | Fast and slow                |    ⬜   |
| 10 | Swap Nodes in Pairs                                         | [24](https://leetcode.com/problems/swap-nodes-in-pairs/)                                           | Linked-list pointers         |    ⬜   |
| 11 | Odd Even Linked List                                        | [328](https://leetcode.com/problems/odd-even-linked-list/)                                         | Same direction               |    ⬜   |
| 12 | Reorder List                                                | [143](https://leetcode.com/problems/reorder-list/)                                                 | Fast and slow                |    ⬜   |
| 13 | Sort List                                                   | [148](https://leetcode.com/problems/sort-list/)                                                    | Fast and slow                |    ⬜   |
| 14 | Find the Duplicate Number                                   | [287](https://leetcode.com/problems/find-the-duplicate-number/)                                    | Fast and slow                |    ⬜   |
| 15 | Longest Mountain in Array                                   | [845](https://leetcode.com/problems/longest-mountain-in-array/)                                    | Same direction               |    ⬜   |
| 16 | Boats to Save People                                        | [881](https://leetcode.com/problems/boats-to-save-people/)                                         | Opposite direction           |    ⬜   |
| 17 | Bag of Tokens                                               | [948](https://leetcode.com/problems/bag-of-tokens/)                                                | Opposite direction           |    ⬜   |
| 18 | Interval List Intersections                                 | [986](https://leetcode.com/problems/interval-list-intersections/)                                  | Two sorted sequences         |    ⬜   |
| 19 | Compare Strings by Frequency of the Smallest Character      | [1170](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/)      | Two sorted sequences         |    ⬜   |
| 20 | Pairs of Songs With Total Durations Divisible by 60         | [1010](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/)         | Complement counting          |    ⬜   |
| 21 | Append Characters to String to Make Subsequence             | [2486](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/)             | Same direction               |    ⬜   |
| 22 | Maximum Number of Vowels in a Substring of Given Length     | [1456](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)     | Sliding window               |    ⬜   |
| 23 | Minimum Size Subarray Sum                                   | [209](https://leetcode.com/problems/minimum-size-subarray-sum/)                                    | Sliding window               |    ⬜   |
| 24 | Fruit Into Baskets                                          | [904](https://leetcode.com/problems/fruit-into-baskets/)                                           | Sliding window               |    ⬜   |
| 25 | Longest Substring Without Repeating Characters              | [3](https://leetcode.com/problems/longest-substring-without-repeating-characters/)                 | Sliding window               |    ⬜   |
| 26 | Permutation in String                                       | [567](https://leetcode.com/problems/permutation-in-string/)                                        | Sliding window               |    ⬜   |
| 27 | Find All Anagrams in a String                               | [438](https://leetcode.com/problems/find-all-anagrams-in-a-string/)                                | Sliding window               |    ⬜   |
| 28 | Longest Repeating Character Replacement                     | [424](https://leetcode.com/problems/longest-repeating-character-replacement/)                      | Sliding window               |    ⬜   |
| 29 | Max Consecutive Ones III                                    | [1004](https://leetcode.com/problems/max-consecutive-ones-iii/)                                    | Sliding window               |    ⬜   |
| 30 | Subarray Product Less Than K                                | [713](https://leetcode.com/problems/subarray-product-less-than-k/)                                 | Sliding window               |    ⬜   |
| 31 | Max Consecutive Ones II                                     | [487](https://leetcode.com/problems/max-consecutive-ones-ii/)                                      | Sliding window               |    ⬜   |
| 32 | Number of Subsequences That Satisfy the Given Sum Condition | [1498](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/) | Sorting and two pointers     |    ⬜   |
| 33 | Successful Pairs of Spells and Potions                      | [2300](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/)                      | Sorting and binary search    |    ⬜   |
| 34 | Minimum Operations to Reduce X to Zero                      | [1658](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)                      | Sliding window               |    ⬜   |
| 35 | Grumpy Bookstore Owner                                      | [1052](https://leetcode.com/problems/grumpy-bookstore-owner/)                                      | Sliding window               |    ⬜   |
| 36 | Maximum Erasure Value                                       | [1695](https://leetcode.com/problems/maximum-erasure-value/)                                       | Sliding window               |    ⬜   |
| 37 | Maximum Width Ramp                                          | [962](https://leetcode.com/problems/maximum-width-ramp/)                                           | Monotonic stack and pointers |    ⬜   |
| 38 | Shifting Letters II                                         | [2381](https://leetcode.com/problems/shifting-letters-ii/)                                         | Difference array and sweep   |    ⬜   |
| 39 | Find K Closest Elements                                     | [658](https://leetcode.com/problems/find-k-closest-elements/)                                      | Opposite direction           |    ⬜   |

## 🔴 Hard

|  # | Problem                                   | LeetCode                                                                        | Pattern                   | Status |
| -: | ----------------------------------------- | ------------------------------------------------------------------------------- | ------------------------- | :----: |
|  1 | Trapping Rain Water                       | [42](https://leetcode.com/problems/trapping-rain-water/)                        | Opposite direction        |    ⬜   |
|  2 | Minimum Window Substring                  | [76](https://leetcode.com/problems/minimum-window-substring/)                   | Sliding window            |    ⬜   |
|  3 | First Missing Positive                    | [41](https://leetcode.com/problems/first-missing-positive/)                     | Index placement           |    ⬜   |
|  4 | Median of Two Sorted Arrays               | [4](https://leetcode.com/problems/median-of-two-sorted-arrays/)                 | Binary search             |    ⬜   |
|  5 | Shortest Subarray with Sum at Least K     | [862](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)     | Monotonic deque           |    ⬜   |
|  6 | Subarrays with K Different Integers       | [992](https://leetcode.com/problems/subarrays-with-k-different-integers/)       | Sliding window            |    ⬜   |
|  7 | Count of Smaller Numbers After Self       | [315](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)       | Merge sort                |    ⬜   |
|  8 | Sliding Window Maximum                    | [239](https://leetcode.com/problems/sliding-window-maximum/)                    | Monotonic deque           |    ⬜   |
|  9 | Minimum Number of K Consecutive Bit Flips | [995](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/) | Greedy and sliding window |    ⬜   |
| 10 | Count Subarrays With Fixed Bounds         | [2444](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/)        | Sliding window            |    ⬜   |

---

# 7. Recommended Learning Order

Do not attempt the problems randomly. Follow this sequence to build a solid understanding of each pattern.

| Phase | Focus                                | Suggested problems                             |
| ----- | ------------------------------------ | ---------------------------------------------- |
| 1     | Basic opposite-direction pointers    | Reverse String, Valid Palindrome               |
| 2     | Sorted-array traversal               | Two Sum II, Squares of a Sorted Array          |
| 3     | Same-direction pointers              | Remove Duplicates, Move Zeroes                 |
| 4     | In-place modifications               | Merge Sorted Array, Sort Colors                |
| 5     | Advanced opposite-direction pointers | Container With Most Water, 3Sum                |
| 6     | Fast and slow pointers               | Middle of the Linked List, Linked List Cycle   |
| 7     | Linked-list rearrangement            | Remove Nth Node, Reorder List                  |
| 8     | Sliding window                       | Longest Substring Without Repeating Characters |
| 9     | Advanced patterns                    | Trapping Rain Water, Minimum Window Substring  |

---

# 8. Progress Tracking

| Difficulty | Problems listed | Solved | Remaining |
| ---------- | --------------: | -----: | --------: |
| Easy       |              20 |      0 |        20 |
| Medium     |              39 |      0 |        39 |
| Hard       |              10 |      0 |        10 |
| **Total**  |          **69** |  **0** |    **69** |

The list includes related techniques, so not all 69 problems are exclusively Two Pointers problems.

Update the progress table as you complete problems. Record the date, whether you solved each problem independently and whether it needs revision.

---

# 9. Revision Strategy

| Result                    | Revision action                       |
| ------------------------- | ------------------------------------- |
| Solved independently      | Reattempt periodically                |
| Solved with hints         | Reattempt without hints               |
| Could not solve           | Study the pattern and try again       |
| Solved but cannot explain | Write the reasoning in your own words |
| Optimized successfully    | Review the complexity and trade-offs  |

A problem is not truly mastered just because the code was accepted. You should be able to explain why the pointer movement is correct and reproduce the solution without relying on the original code.

---

# 10. Key Takeaways

* Two Pointers is a family of techniques, not a single algorithm.
* Opposite-direction pointers are particularly useful for sorted arrays and comparisons from both ends.
* Same-direction pointers are useful for in-place modifications.
* Fast and slow pointers are useful for linked lists and cycle detection.
* Pointer movement must be supported by the problem's constraints.
* Incorrect loop conditions and duplicate handling are common sources of bugs.
* Sliding window is a related technique that maintains a moving range.
* Focus on understanding the reasoning behind pointer movements rather than memorizing solutions.

---

**Language:** JavaScript (ES6+)
**Platform:** LeetCode
**Repository:** DSA Preparation
**Focus:** Problem-solving, algorithmic thinking and technical interview preparation
