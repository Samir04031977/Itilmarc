import csv
import json

questions = {}

with open('data/questions.csv', encoding="utf-8") as questionsFile:
    questionsData = csv.reader(questionsFile, delimiter=";")
    next(questionsData, None) # skip header
    for questionLine in questionsData:
        qId = questionLine[0]
        qTxt = questionLine[1]
        ansId = questionLine[2]
        ansTxt = questionLine[3]
        if not qId in questions:
            questions[qId] = {
                "question": qTxt,
                "answers": {}
            }

        if ansId.isdigit():
            # ansId is a number, so its actually part of the question
            questions[qId]["question"] += f"\n{ansId}. {ansTxt}"
        else:
            # actually an answer
            questions[qId]["answers"][ansId] = ansTxt

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

