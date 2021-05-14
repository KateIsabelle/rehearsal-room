//Component
import SpaceListItem from './SpaceListItem'

//Styling
import './_Spaces.scss'

export default function SpaceList(props) {

  const list = props.spaces && props.spaces.map(s =>
    <SpaceListItem
      key={s.id}
      spaceId={s.id}
      title={s.title}
      description = {s.description}
      photoUrl={s.thumbnail_photo_url}
    />
    )

  return (
    <div className="space_list">
      {list}
    </div>
  )
}