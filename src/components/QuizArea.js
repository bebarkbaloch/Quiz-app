import React from 'react'
import Question from './Question'
import Answerlist from './Answerlist'
import UserGreeting from './UserGreeting'

//Stateless component
function QuizArea(props) {
  //If quiz is finished, returns greetings
    if(props.isFinished){
        return <UserGreeting points={props.points}/>
    }
    //else returns the following
    return (
        <div>
            <Question dataSet={props.dataSet}/>
            <Answerlist handleClick = {props.handleClick} dataSet={props.dataSet}/>
        </div>
    )
}

export default QuizArea