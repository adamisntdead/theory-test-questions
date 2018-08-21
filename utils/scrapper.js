const fs = require('fs')
const Xray = require('x-ray')
const x = Xray();

const BASE_URL = 'http://theory-tester.com/questions/'

const scrappers = {
    question: '.pageHeading',
    heading: '.p-questionSingle-heading',
    explanation: '.p-questionSingle-explanation',
    image: '.quiz-question-img > img:nth-child(1)@src',
    questions: ['li.options-single > label:nth-child(1)'],
    answer: 'li.options-single.js-correct-answer > label:nth-child(1)'
}

// Scrape a single question given it's id
function scrape(idx) {
    return new Promise((resolve, reject) => {
        x(BASE_URL + idx, scrappers)((err, data) => {
            if (err) reject(err)

            if (!data.heading) {
                resolve(null)
            }

            data.heading = data.heading && data.heading.trim()
            data.explanation = data.explanation && data.explanation.trim()
            data.questions = data.questions && data.questions.map(x => x.trim())
            data.answer = data.answer && data.answer.trim()
            data.id = idx

            resolve(data)
        })
    })
}
