<script lang="ts">
  import { feedReq, tempGet } from "../../../scripts/api";
  let tempNum = 0;

  async function onSubmit(e) {
    const formData = new FormData(e.target);
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    if (data["feedback"].length > 300) { 
        alert("Too long!");
    }
    else {
        console.log(data);
        tempNum = await tempGet();
        await feedReq(tempNum, data["feedback"]);
        alert("Your feedback has been received! Thank you for your time.");
      }
}
    import Logo from "../../logo.png";


</script>


<div class="logo">
    <img src={Logo} alt="Logo" />
</div>
<div>
    <h2 class="goodbye">We here at Cyber-Interactive thank you for playing. We hope the experience was more engaging than your average learning experience.</h2>
</div>
<form on:submit|preventDefault={onSubmit}>
    <div>
        <label for="feedback"><h2>Please feel free to leave any feedback or concerns you may have in our state of the art feedback box:</h2></label>
        <input
          class= "feed"
          type="textarea"
          id="feedback"
          name="feedback"
          value=""
          required
          multiple
        />
    </div>
    <button type="submit" class="submit">Submit</button>
</form>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

    h2 {
        font-family: 'Quicksand', sans-serif;
    }
    .feed {
        width: 1700px;
        height: 20px;
        position: absolute;
        top: 12%;
        left: 16%;
    }
    .submit {
        position: absolute;
        top: 15%;
        left: 80%;
    }
    .logo {
        position: absolute;
        top: 40%;
        left: 45.5%;
    }
    .goodbye {
        position: absolute;
        top: 57%;
        text-align: center;
        left: 19%;
    }
</style>