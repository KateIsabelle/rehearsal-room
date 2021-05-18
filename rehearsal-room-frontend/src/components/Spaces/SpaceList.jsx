//Component
import SpaceListItem from './SpaceListItem'

export default function SpaceList(props) {

  const list = props.spaces && props.spaces.map(s =>
    <SpaceListItem
      key={s.id}
      dashboard={props.dashboard}
      onDeleteClick={props.onDeleteClick}
      custom_space_list={props.custom_space_list}
      {...s}
    />
    )

  return (
    <>
    {list.length !== 0 &&
      <article className={props.custom_space_list}>
        {list}
      </article>
    }
    {list.length === 0 && props.dashboard && 
      props.contentWhenEmpty
    }
    </>
  )
}