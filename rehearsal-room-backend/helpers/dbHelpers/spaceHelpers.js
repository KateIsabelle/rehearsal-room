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

module.exports = (db) => {
  const getSpaces = () => {
    // TODO: Add an actual DB query to get spaces
    const dummyPromise = new Promise( (resolve, reject) => {
      const resolveFunc = () => resolve(spaces)
      setTimeout(resolveFunc, 200)
    })
    return dummyPromise;
  }

  return {
    getSpaces
  };
}