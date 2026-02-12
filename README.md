# MD-102 Quiz — Microsoft 365 Endpoint Administrator (2026 Objectives)

A question-and-answer focused quiz built from the **MD-102: Microsoft 365 Endpoint Administrator** 2026 exam objectives.

## What's Included

- **`md-102-2026-objectives.md`** — Full list of exam domains and objectives
- **`quiz-questions.js`** — Question bank with 60+ questions across all domains
- **`index.html`** — Self-contained quiz application (no build tools needed)

## Features

- Questions organized by **4 exam domains** and their sub-objectives
- **3 difficulty levels** per topic: Basic, Intermediate, Advanced
- Filter by domain, objective, difficulty, and question count
- Random or sequential question order
- Immediate feedback with explanations after each answer
- End-of-quiz score breakdown by domain and difficulty
- Review all answers or only wrong answers

## How to Use

1. Open `index.html` in any web browser
2. Select your filters (domain, objective, difficulty)
3. Click **Start Quiz**
4. Answer each question and click **Submit Answer**
5. Navigate with **Previous / Next**
6. Review results and explanations at the end

## Exam Domains

| Domain | Weight |
|--------|--------|
| 1. Deploy Windows Client | 20–25% |
| 2. Manage Identity and Compliance | 15–20% |
| 3. Manage, Maintain, and Protect Devices | 40–45% |
| 4. Manage Applications | 10–15% |

## Adding Questions

Add new questions to `quiz-questions.js` following this format:

```javascript
{
  domain: "Domain X: ...",
  objective: "X.X Objective Name",
  difficulty: "basic|intermediate|advanced",
  question: "Your question text?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 0, // zero-based index of correct option
  explanation: "Explanation of the correct answer."
}
```
