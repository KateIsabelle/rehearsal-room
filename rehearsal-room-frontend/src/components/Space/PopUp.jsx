import {Button} from '../Button/Button'

export default function PopUp(props) {
  
  return (
    <div className={props.className}>
      <div className="pu-content">
        <h3 className="pu-header pu">{props.header}</h3>
        <p className=" pu-body pu">
          {props.body}
        </p>
        <div className="pu">
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
      </div>
    </div>

  )
}