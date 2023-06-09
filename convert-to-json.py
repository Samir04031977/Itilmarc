import csv
import json

def empty(str: str) -> bool:
    return not str or str.isspace()

questions = {}

with open('data/questions.csv', encoding="utf-8") as questionsFile:
    questionsData = csv.reader(questionsFile, delimiter=";")
    next(questionsData, None) # skip header
    for questionLine in questionsData:
        qId = questionLine[0]
        qTxt = questionLine[1]
        ansId = questionLine[2]
        ansTxt = questionLine[3]
        quExplain = questionLine[4]
        ansExplain = questionLine[5]
        if not qId in questions:
            questions[qId] = {
                "question": qTxt,
                "answers": {},
                "answers_explain" : {}
            }
        
        if not empty(quExplain) and not "question_explain" in questions[qId]:
            questions[qId]["question_explain"] = quExplain
            

        if ansId.isdigit():
            # ansId is a number, so its actually part of the question
            if not "question_choices" in questions[qId]:
                questions[qId]["question_choices"] = {}
                questions[qId]["question_choices_explain"] = {}

            questions[qId]["question_choices"][ansId] = ansTxt
            if not empty(ansExplain):
                questions[qId]["question_choices_explain"][ansId] = ansExplain

        else:
            # actually an answer
            questions[qId]["answers"][ansId] = ansTxt
            if not empty(ansExplain):
                questions[qId]["answers_explain"][ansId] = ansExplain

with open('data/good-answers.csv', encoding="utf-8") as answerFile:
    answerData = csv.reader(answerFile, delimiter=";")
    next(answerData, None) # skip header
    for answerLine in answerData:
        qId = answerLine[0]
        goodAns = answerLine[1]
        questions[qId]["good"] = goodAns

jsonData = json.dumps(questions, indent="  ", ensure_ascii=False)

with open('site/data.json', 'w', encoding='utf-8') as jsonFile:
    jsonFile.write(jsonData)

