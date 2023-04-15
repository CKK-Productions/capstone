
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
        return res;
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

//have tommy look
async function getFnameById(id: number): Promise<string> {
  const response = await fetch(`http://127.0.0.1:3000/employee/${id}/fname`);
  const data = await response.json();

  if (response.ok) {
    console.log(data.password);
  } else {
    console.error(data.error);
  }
}

// async function getName(id: number){
//   const response = await fetch('http://127.0.0.1:3000/api/getName', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ id })
//   })

//   const res = await response.json();
//   console.log(res);
// }

async function tempNum(tempnum: number, current: string){
  const response = await fetch('http://127.0.0.1:3000/api/temp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ tempnum, current })
  })

  const res = await response.json();
  console.log(res);
}

async function tempRid(){
  const response = await fetch('http://127.0.0.1:3000/api/tempRid', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const res = await response.json();
  console.log(res);
}

export {loginReq}
export {accReq}
// export {getName}
export {tempNum}
export {tempRid}
export {getFnameById}