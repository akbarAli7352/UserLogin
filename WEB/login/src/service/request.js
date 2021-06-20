export const postRequest = async (url, data, callback, error) => {
    const options = {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: data
    };
    const response = await fetch(url,options);
    const result = await response.json();
    callback(result)
}
export const getRequest = async (url,callback,error) => {
  const option = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('authToken')
    }, 
  }
  const response = await fetch(url ,option);
  const result = await response.json();
  callback(result)
}
