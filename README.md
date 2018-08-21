# Irish Driver Theory Test
> Sample Questions

This repository houses a list of questions along with data in this form:

```json
  {
    "question": "What does this sign mean?",
    "heading": "Traffic Signs and Regulatory Matters",
    "explanation": "Explantion: This sign appears at junctions where a minor road joins a major road. You must stop your vehicle completely at a STOP sign.",
    "image": "http://d1fohtyzq6kn2t.cloudfront.net/img/quiz-img/stop.jpg",
    "questions": [
      "Stop, for school crossing ahead.",
      "Stop your vehicle.",
      "Other traffic must give way to you.",
      "Give way to traffic coming from your right."
    ],
    "answer": "Stop your vehicle.",
    "id": 1
  }
```

The data was scraped from [theory-tester.com](http://theory-tester.com).
There is 890 questions in this dataset.

## Usage

First you must install:

```bash
$ npm install theory-test-questions
```

Then you can use the questions:

```js
const questions = require('theory-test-questions')

console.log(questions) // [{...}, ...]
```

## License

While the questions are not mine, the code for scraping them is licensed under MIT