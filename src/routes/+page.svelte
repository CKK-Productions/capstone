<svelte:head>
    <title>Log In</title>
    <meta name="description" content="Log into your account">
</svelte:head>

<script context="module" lang="ts">
  import Logo from "./logo.png";
  import { loginReq } from "../scripts/api";
  import { tempNum } from "../scripts/api";
  // import type {UserInfo} from "./stores";
	// import {user} from './lvlselect/+layout.svelte';

  // function setCookie(cname, cvalue, exdays) {
  //   const d = new Date();
  //   d.setTime(d.getTime() + (exdays*24*60*60*1000));
  //   let expires = "expires="+ d.toUTCString();
  //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  // }

  async function onSubmit(e) {
    const formData = new FormData(e.target);
    let resp = 0;
    const curr = "current";

    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data)
    resp = await loginReq(data["email"], data["password"]);
    
    // temporary log in | does not carry employee_id | needs that carry
    if (resp.login > 0) {
      tempNum(resp.login, curr);
      // setCookie("loggedIN", resp.login, 1);
      // const loggedUser: UserInfo = {uid: resp.login, username: resp.employee};
      // user.set(loggedUser);
      window.location.assign("./lvlselect/");
    }
    else {
      alert("Invalid Login Data")
    }
    
  }

  
</script>

<body>
<main>
  <div class="logo">
    <img src={Logo} alt="Logo" />
  </div>
  <div class="bar">
  </div>
    <form on:submit|preventDefault={onSubmit}>
        <div>
          <label for="email"><p>Email</p></label>
          <input
            type="text"
            id="email"
            name="email"
            value=""
            required
          />
        </div>
        <div>
          <label for="password"><p>Password</p></label>
          <input
            type="password"
            id="password"
            name="password"
            value=""
            required
          />
        </div>
      <button type="submit">Submit</button>
    </form>
    <p>Don't have an account? <a href="/login"> Click Here</a>.</p>
    <!--<p><a href="/lvlselect"> Temp</a></p>-->
</main>
</body>

  <style>
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

     * {
        box-sizing: border-box;
        
      }
      body {
        background-color: #1e90b0;
      }
      form {
        display: flex;
        flex-direction: column;
        width: 300px;
      }
  
      form > div{
        display: flex;
        justify-content: space-between;
      }
  
      form > div + * {
        margin-top: 10px;
      }
      main {
        position: absolute;
        /* border: 3px blue solid; */
        left: 49%;
        top: 25%;
        padding: 15px; 
      }
      .logo {
        position: absolute;
        left: -80%;
        top: 0%;
      }
      p {
        font-weight: bold;
        font-family: 'Open Sans', sans-serif;
      }
      .bar {
        position:absolute;
        border: 2px white solid;
        left: -5%;
        top: -5%;
        height: 100%;
      }
  </style>