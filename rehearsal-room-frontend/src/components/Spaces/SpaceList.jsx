//Component
import SpaceListItem from './SpaceListItem'

//Styling
import './_Spaces.scss'

export default function SpaceList(props) {

  const list = props.spaces && props.spaces.map(s =>
    <SpaceListItem
      key={s.id}
      dashboard={props.dashboard}
      onDeleteClick={props.onDeleteClick}
      {...s}
    />
    )

  return (
    <div className="space_list">
      {list}
    </div>
  )
}