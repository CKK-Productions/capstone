
async function loginReq(email: string, password: string){
    const response = await fetch('http://127.0.0.1:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    const res = await response.json();
    console.log(res);

    if (res.login > 0) {
        return res.login;
    }
}

async function accReq(fname: string, lname: string, email: string, password: string){
    const response = await fetch('http://127.0.0.1:3000/api/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fname, lname, email, password })
    })

    const res = await response.json();
    console.log(res);
}


export {loginReq}
export {accReq}