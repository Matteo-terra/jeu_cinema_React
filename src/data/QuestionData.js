import Question from "../components/Question";


function QuestionData(){

    const question1 = new Question ();
    question1.question = "Quelle est la capitale de la France?";
    question1.reponse = "Paris";
    question1.choix = 
    [
        "Lisbone"
    ],
    [
        "Paris"
    ],
    [
        "Berlin"
    ],
    [
        "Madrid"
    ]

    return question1;


}