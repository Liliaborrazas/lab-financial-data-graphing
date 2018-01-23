axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
