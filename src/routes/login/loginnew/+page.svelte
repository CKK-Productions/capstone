<svelte:head>
    <title>New Account</title>
    <meta name="description" content="Log into your account">
</svelte:head>

<script lang="ts">
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

<main>
    <form on:submit|preventDefault={onSubmit}>
        <div>
            <label for="name">First Name</label>
            <input
              type="text"
              id="Fname"
              name="Fname"
              value=""
            />
          </div>
          <div>
            <label for="name">Last Name</label>
            <input
              type="text"
              id="Lname"
              name="Lname"
              value=""
            />
          </div>
        <div>
          <label for="name">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value=""
          />
        </div>
        <div>
            <label for="name">Password</label>
            <input
            type="password"
            id="password"
             name="password"
             value=""
            />
        </div>
      <button type="submit">Submit</button>
    </form>
    <h3>Have an account? <a href="/login"> Click Here</a>.</h3>
</main>
  
<style>
    * {
      box-sizing: border-box;
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
      left: 43%;
      top: 20%;
      padding: 15px; 
    }
</style>