import { useParams } from 'react-router-dom';

// Custom hooks
import useAmenityToggle from '../../hooks/useAmenityToggle'
import useFilteredSpaces from '../../hooks/useFilteredSpaces'

// Components
import SpaceList from './SpaceList'
import SearchForm from '../SearchForm'

// Styling
import './_Spaces.scss'


export default function Spaces() {
  const { city } = useParams();

  const [advancedState, toggleAdvanced] = useAmenityToggle()
  const [
    formState,
    filteredSpaces,
    handleFormChange,
    clearForm
  ] = useFilteredSpaces(city)

  return (
    <>
      <SearchForm
        formState={formState}
        onChange={handleFormChange}
        advancedState={advancedState}
        onAdvancedClick={toggleAdvanced}
        onClearClick={clearForm}
      />
      <SpaceList
      spaces={filteredSpaces}
      />
    </>
  )
}