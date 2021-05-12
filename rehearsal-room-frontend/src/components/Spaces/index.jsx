import { useParams } from 'react-router-dom';

// Custom hooks
import useAmenityToggle from '../../hooks/useAmenityToggle'
import useFilteredSpaces from '../../hooks/useFilteredSpaces'

// Components
import SpaceList from './SpaceList'
import SearchForm from '../SearchForm'

export default function Spaces() {
  const { city } = useParams();

  const [advancedState, toggleAdvanced] = useAmenityToggle()
  const [
    formState,
    filteredSpaces,
    handleFormChange
  ] = useFilteredSpaces(city)

  return (
    <>
      <SearchForm
        onChange={handleFormChange}
        onAdvancedClick={toggleAdvanced}
        advancedState={advancedState}
        formState={formState}
      />
      <SpaceList
      spaces={filteredSpaces}
      />
    </>
  )
}