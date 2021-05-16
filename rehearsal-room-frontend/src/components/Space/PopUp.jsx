import {Button} from '../Button/Button'

export default function PopUp(props) {
  
  return (

    <div className={props.className}>
      <h3>{props.header}</h3>
      <p>
        {props.body}
      </p>
      {props.yesButton && 
      <Button 
        label={props.yesButton}
        onClick={props.yesButtonFunc}
      />}
      {props.noButton && 
      <Button 
        label={props.noButton}
        onClick={props.noButtonFunc}
      />}
    </div>

  )
}