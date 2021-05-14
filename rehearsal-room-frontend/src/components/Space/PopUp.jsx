
export default function PopUp(props) {
  const handleClick = () => {
    props.toggle();
   };
  return (

    <div className="popup">
      <div className="">
        <div className="close" onClick={handleClick}>&times;</div>
        {props.children}
      </div>
    </div>

  )
}