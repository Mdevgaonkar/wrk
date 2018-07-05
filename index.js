function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved at '+ new Date().getSeconds());
      }, 2000);
    });
  }
  
  async function asyncCall(secs) {
    console.log('calling at '+ secs);
    var result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  setInterval(async ()=> {await asyncCall(new Date().getSeconds());}, 1000 );
  