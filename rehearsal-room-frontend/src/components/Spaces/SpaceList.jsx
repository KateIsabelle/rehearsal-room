//Component
import SpaceListItem from './SpaceListItem'

export default function SpaceList(props) {

  const list = props.spaces && props.spaces.map(s =>
    <SpaceListItem
      key={s.id}
      dashboard={props.dashboard}
      onDeleteClick={props.onDeleteClick}
      photo_size_class={props.photo_size_class}
      {...s}
    />
    )

  return (
    <>
    {list.length !== 0 &&
      <article className="space_list">
        {list}
      </article>
    }
    {list.length === 0 && props.dashboard && 
      props.contentWhenEmpty
    }
    </>
  )
}