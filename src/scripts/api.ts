
async function loginReq(email: string, password: string) {
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

async function accReq(fname: string, lname: string, email: string, password: string) {
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

async function subScore(level_id: number, level_status_id: number, initiated_by: number, fail_amount: number, pass: string) {
  const response = await fetch('http://127.0.0.1:3000/api/G1sub', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ level_id, level_status_id, initiated_by, fail_amount, pass })
  })

  const res = await response.json();
  console.log(res);
}


async function feedReq(id: number, respond: string) {
  const response = await fetch('http://127.0.0.1:3000/api/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, respond })
  })

  const res = await response.json();
  console.log(res);
}

async function getFnameById(employee_id: number): Promise<string> {
  const response = await fetch(`http://127.0.0.1:3000/employee/${employee_id}`);
  const data = await response.json();

  if (response.ok) {
    console.log(data);
  } else {
    console.error(data.error);
  }

  return data;
}

async function getGameOne(initiated_by: number): Promise<string> {
  const response = await fetch(`http://127.0.0.1:3000/gameone/${initiated_by}`);
  const data = await response.json();

  if (response.ok) {
    console.log(data);
  } else {
    console.error(data.error);
  }

  return data;
}

async function getGameTwo(initiated_by: number): Promise<string> {
  const response = await fetch(`http://127.0.0.1:3000/gametwo/${initiated_by}`);
  const data = await response.json();

  if (response.ok) {
    console.log(data);
  } else {
    console.error(data.error);
  }

  return data;
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

async function tempNum(tempnum: number, current: string) {
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

async function tempRid() {
  const response = await fetch('http://127.0.0.1:3000/api/tempRid', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const res = await response.json();
  console.log(res);
}

// async function tempGet() {
//   const response = await fetch('http://127.0.0.1:3000/temp/current', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })

//   const res = await response.json();
//   console.log(res);
// }

async function tempGet(): Promise<number> {
  const response = await fetch(`http://127.0.0.1:3000/temp/current`);
  const data = await response.json();

  if (response.ok) {
    console.log(data);
  } else {
    console.error(data.error);
  }

  return data;
}

export {loginReq}
export {accReq}
export {subScore}
// export {getName}
export {tempNum}
export {tempRid}
export {tempGet}
export {getFnameById}
export {feedReq}
export {getGameOne}
export {getGameTwo}