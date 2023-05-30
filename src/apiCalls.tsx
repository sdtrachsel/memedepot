const getJokes = () =>{
  return fetch("https://api.api-ninjas.com/v1/dadjokes?limit=3", {
    method: 'GET',
    headers: {'X-Api-Key': 'C/1Bummp5MFkEZYvGxfhOQ==0XCoAUNJSOQoFpuv'}
  })
  .then((response) => {
    if(!response.ok) {
      throw new Error(`${response.status}`);
    } else {
      return response.json();
    }
  })
}

export default getJokes;