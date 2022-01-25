import {questions} from '../data/QuestionData';

function Question (props){

    function selectRep(what){
        props.updateRep(what)
    }

    return(
        <div>
            <ul>
                {questions.map((question)  => (
                    <li key={`${question.id}-${question}`} onClick={ () => selectRep(question.question)}>
                    {question.question}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Question;