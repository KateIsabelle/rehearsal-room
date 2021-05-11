import SpaceListItem from './SpaceListItem'

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
    <ul>
    {list}
    </ul>
  )
}