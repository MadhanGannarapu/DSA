# DSA Preparation

A structured journey to mastering **Data Structures and Algorithms (DSA)** using JavaScript, with a focus on problem-solving, algorithmic thinking, code optimization and technical interview preparation.

## 🎯 Objectives

* Strengthen problem-solving and logical thinking.
* Understand time and space complexity.
* Master common algorithmic patterns.
* Write clean, readable and optimized JavaScript.
* Build consistency through regular practice.
* Prepare for technical interviews and system design discussions.

## 🛠️ Tech Stack

* **Language:** JavaScript (ES6+)
* **Version Control:** Git
* **Repository:** GitHub
* **Editor:** VS Code

## 📂 Repository Structure

```text
dsa-preparation/
│
├── README.md
├── PROGRESS.md
├── ROADMAP.md
│
├── 00-fundamentals/
│
├── 01-arrays-and-hashing/
│   ├── easy/
│   ├── medium/
│   └── hard/
│
├── 02-two-pointers/
│   ├── easy/
│   │   ├── 125-valid-palindrome.js
│   │   ├── 344-reverse-string.js
│   │   └── README.md
│   ├── medium/
│   │   ├── 11-container-with-most-water.js
│   │   └── 15-3sum.js
│   └── hard/
│
├── 03-sliding-window/
│   ├── easy/
│   ├── medium/
│   └── hard/
│
├── 04-binary-search/
│   ├── easy/
│   ├── medium/
│   └── hard/
│
├── 05-stack-and-queue/
├── 06-linked-list/
├── 07-recursion-and-backtracking/
├── 08-trees-and-bst/
├── 09-heaps-and-priority-queue/
├── 10-graphs/
├── 11-dynamic-programming/
├── 12-greedy/
├── 13-bit-manipulation/
├── 14-trie/
├── 15-math-and-geometry/
├── 16-system-design/
│
└── revision/
```

## 📚 Topics Covered

| #  | Topic                      | Status         |
| -- | -------------------------- | -------------- |
| 00 | Fundamentals               | 🔄 In progress |
| 01 | Arrays and Hashing         | 🔄 Not started  |
| 02 | Two Pointers               | 🔄 In progress |
| 03 | Sliding Window             | ⬜ Not started  |
| 04 | Binary Search              | ⬜ Not started  |
| 05 | Stack and Queue            | ⬜ Not started  |
| 06 | Linked List                | ⬜ Not started  |
| 07 | Recursion and Backtracking | ⬜ Not started  |
| 08 | Trees and BST              | ⬜ Not started  |
| 09 | Heaps and Priority Queue   | ⬜ Not started  |
| 10 | Graphs                     | ⬜ Not started  |
| 11 | Dynamic Programming        | ⬜ Not started  |
| 12 | Greedy                     | ⬜ Not started  |
| 13 | Bit Manipulation           | ⬜ Not started  |
| 14 | Trie                       | ⬜ Not started  |
| 15 | Math and Geometry          | ⬜ Not started  |
| 16 | System Design              | ⬜ Not started  |

**Status legend**

* ⬜ Not started
* 🔄 In progress
* ✅ Completed

## 🧠 Problem-Solving Approach

Every problem follows this workflow:

1. **Understand:** Identify the problem requirements, inputs, outputs and constraints.
2. **Analyze:** Work through examples and edge cases.
3. **Approach:** Develop a solution before writing code.
4. **Implement:** Write the solution independently in JavaScript.
5. **Optimize:** Analyze time and space complexity and look for improvements.
6. **Test:** Validate the solution against normal and edge cases.
7. **Review:** Explain the approach in your own words.
8. **Revise:** Reattempt problems that required hints or additional practice.

## 📝 Solution Documentation

Each problem should have its own JavaScript file.

Example: `02-two-pointers/easy/125-valid-palindrome.js`

```javascript
/**
 * Problem: Valid Palindrome
 * Platform: LeetCode
 * Problem ID: 125
 * Difficulty: Easy
 * Topic: Two Pointers
 *
 * Approach:
 * Compare characters from both ends,
 * ignoring non-alphanumeric characters.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Solved Independently: Yes
 * Revision Required: No
 */

var isPalindrome = function (s) {
    // Implementation
};
```

Each solution should include:

* Problem name and ID.
* Difficulty and topic.
* Approach and explanation.
* Time and space complexity.
* Working implementation.
* Revision status.

## 📊 Progress Tracking

Track overall progress in [PROGRESS.md](./PROGRESS.md).

For each problem, record:

* Problem name and difficulty.
* Date solved.
* Whether it was solved independently or with hints.
* Time and space complexity.
* Revision status.

A problem should be marked as independently solved only when its solution was reached without hints or looking at an existing implementation.

## 🌿 GitHub Commit Strategy

Use meaningful, consistent commit messages to maintain a clear development history.

### 1. Commit Message Convention

Follow this format:

```text
<type>(<scope>): <description>
```

**Types:**

| Type       | Purpose                                | Example                                      |
| ---------- | -------------------------------------- | -------------------------------------------- |
| `feat`     | Add a new problem or solution          | `feat(two-pointers): add valid palindrome`   |
| `fix`      | Fix a bug in an existing solution      | `fix(two-pointers): handle empty strings`    |
| `refactor` | Improve code without changing behavior | `refactor(two-pointers): optimize three sum` |
| `docs`     | Update documentation or progress       | `docs(progress): update solved problems`     |
| `test`     | Add or update test cases               | `test(arrays): add edge cases for two sum`   |
| `chore`    | Repository maintenance                 | `chore: update gitignore`                    |

### 2. Commit Examples

**Adding a new problem**

```bash
git add 02-two-pointers/easy/125-valid-palindrome.js
git commit -m "feat(two-pointers): add valid palindrome"
```

**Fixing an existing solution**

```bash
git add 02-two-pointers/medium/15-3sum.js
git commit -m "fix(two-pointers): handle duplicate triplets"
```

**Updating documentation**

```bash
git add PROGRESS.md
git commit -m "docs(progress): update solved problems"
```

**Refactoring a solution**

```bash
git add 02-two-pointers/medium/15-3sum.js
git commit -m "refactor(two-pointers): simplify duplicate handling"
```

### 3. Branching Strategy

Use the `main` branch for stable, reviewed solutions.

For larger changes, create a feature branch.

```bash
# Create a new branch
git checkout -b feature/two-pointers

# Add and commit changes
git add .
git commit -m "feat(two-pointers): add container with most water"

# Push the branch
git push -u origin feature/two-pointers
```

After reviewing and testing your changes, merge the branch into `main`.

For small, independent problem solutions, committing directly to `main` is also acceptable.

### 4. Recommended Commit Frequency

| Activity             | Recommended timing                             |
| -------------------- | ---------------------------------------------- |
| Add a new solution   | After implementing and testing                 |
| Fix a bug            | After verifying the fix                        |
| Refactor a solution  | After checking that behavior is unchanged      |
| Update progress      | After completing a problem or practice session |
| Update documentation | Whenever meaningful changes are made           |
| Push to GitHub       | After each completed practice session          |

Avoid meaningless commits such as `update`, `changes`, `final` or `latest`.

### 5. Daily Git Workflow

```bash
# Check current changes
git status

# Review your changes
git diff

# Stage completed work
git add .

# Commit with a meaningful message
git commit -m "feat(two-pointers): add merge sorted array"

# Push to GitHub
git push origin main
```

Keep commits small and focused. A commit should represent one logical change.

## 🔁 Revision Strategy

Revisit problems based on how independently you solved them.

| Category             | Revision approach                           |
| -------------------- | ------------------------------------------- |
| Solved independently | Revisit periodically                        |
| Solved with hints    | Reattempt without hints                     |
| Unable to solve      | Revisit after studying the pattern          |
| Optimized solution   | Explain the complexity and trade-offs again |

Maintain a separate `revision/` folder for revision notes and practice plans. Keep the original solutions in their topic folders rather than duplicating them.

## 📅 Learning Principles

* Understand the approach before looking at a solution.
* Prefer solving problems independently.
* Focus on patterns instead of memorizing code.
* Test edge cases before considering a problem complete.
* Understand why an optimization works.
* Maintain consistent Git commits.
* Prioritize understanding over the number of problems solved.

## 🚀 Long-Term Goals

* Master fundamental DSA patterns.
* Solve problems across easy, medium and hard difficulties.
* Develop the ability to explain solutions clearly.
* Improve algorithmic problem-solving speed.
* Strengthen technical interview preparation.
* Apply algorithmic thinking to real-world software development.

---

**Language:** JavaScript
**Platform:** GitHub
**Purpose:** Continuous DSA learning and interview preparation.
