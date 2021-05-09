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
    const queryString = `
      SELECT *
      FROM spaces
      WHERE LOWER(city) LIKE $1
    `
    const queryParams = [`%${city.toLowerCase()}%`]

    return db.query(queryString, queryParams)
      .then(result => result.rows)
      .catch(err => err);
  }

  const getSpacesByKeyword = (keyword) => {
    const queryString = `
      SELECT *
      FROM spaces
      WHERE title LIKE $1
        OR description LIKE $1
    `
    const queryParams = [`%${keyword}%`]

    return db.query(queryString, queryParams)
      .then(result => result.rows)
      .catch(err => err);
  }

  const addSpace = (spaceData) => {
    // TODO: Test that addSpace actually works the way I think it should.
    return db.insert('spaces', spaceData)
      .then(result => result.rows)
      .catch(err => err);
  }

  const updateSpace = (spaceData) => {
    // TODO: Actually make this function work.
  }

  return {
    getSpaces,
    getSpacesByCity,
    getSpacesByKeyword,
    addSpace
  };
}