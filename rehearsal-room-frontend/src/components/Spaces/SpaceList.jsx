//Component
import SpaceListItem from './SpaceListItem'

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
    <>
    {list.length !== 0 &&
      <article className="space-article">
        {list}
      </article>
    }
    {list.length === 0 && props.dashboard && 
      props.contentWhenEmpty
    }
    </>
  )
}