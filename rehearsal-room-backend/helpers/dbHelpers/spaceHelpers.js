// Dummy data for testing/dev
const spaces = [
  {
    "this data": "is placeholder",
    "paul will": "update this page to use the actual DB"
  },
  {
    name: "space 1",
    id: "1"
  },
  {
    name: "space 2",
    id: "2"
  }
];

const spacesByCity = [
  {
    "this data": "is also placeholder",
    "paul will": "update this page to use the actual DB",
    "it will": "be a list of all spaces for the specified city"
  },
  {
    name: "space 1",
    id: "1"
  },
  {
    name: "space 2",
    id: "2"
  }
];

module.exports = (db) => {
  const getSpaces = () => {
    const query = {
      text: 'SELECT * FROM spaces',
    }
    return db.query(query)
      .then(result => result.rows)
      .catch(err => err);
  }

  const getSpacesByCity = (city) => {
    const queryString = 'SELECT * FROM spaces WHERE city LIKE $1'
    const queryParams = [city]

    return db.query(queryString, queryParams)
      .then(result => result.rows)
      .catch(err => err);
  }

  const addSpace = (spaceData) => {
    // TODO: Add an actual DB query to add a new space
    const dummyPromise = new Promise( (resolve, reject) => {
      spaces.push(spaceData)
      const resolveFunc = () => resolve(spaces)
      setTimeout(resolveFunc, 200)
    })
    return dummyPromise;
  }

  return {
    getSpaces,
    getSpacesByCity,
    addSpace
  };
}