const options = {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
     symbol: "KRIDES3",
     faction: "OBSIDIAN",
   }),
 };
 
 fetch('https://api.spacetraders.io/v2/register', options)
   .then(response => response.json())
   .then(response => console.log(response))
   .catch(err => console.error(err));