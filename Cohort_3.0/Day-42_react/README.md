# fetching data with api 

## using fetch api
-  ``` let getData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    console.log(data);
  }
  
  getData(); ```


## using axios api
-  ``` let getData = async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    let data = response.data;
    console.log(data);
  }
  
  getData(); ```