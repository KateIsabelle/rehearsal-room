//Spaces is the main page

import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// Components
import SpaceList from './SpaceList'
import SearchForm from '../SearchForm'

export default function Spaces(props) {
  const { spacesData } = props

  //spaces = array of objects
  const { city } = useParams();
  const [spaces, setSpaces] = useState([])
  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/spaces/${city}`,
    })
    .then(({ data }) => {
      console.log("get city data: ", data);
      setSpaces(data)
    })
    .catch((err) => console.log("get city data ERROR", err));
  }, [city]);

  return (
    <>
      <SearchForm />
      <SpaceList
      spaces={spaces}
      />
    </>
  )
}