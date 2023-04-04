<svelte:head>
    <title>Log In</title>
    <meta name="description" content="Log into your account">
</svelte:head>

<script lang="ts">
  import Logo from "./logo.png";

  function onSubmit(e) {
    const formData = new FormData(e.target);
  
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data)
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
          <label for="name"><p>Email</p></label>
          <input
            type="text"
            id="email"
            name="email"
            value=""
          />
        </div>
        <div>
          <label for="name"><p>Password</p></label>
          <input
            type="password"
            id="password"
            name="password"
            value=""
          />
        </div>
      <button type="submit">Submit</button>
    </form>
    <p>Don't have an account? <a href="/login"> Click Here</a>.</p>
    <p><a href="/lvlselect"> Temp</a></p>
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