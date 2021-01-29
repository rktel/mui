<script>
    import { Meteor } from "meteor/meteor";
    import { navigate } from "svelte-routing";

    let username, password;

    function login() {
        if (username && password) {
            Meteor.call(
                "users.getUser",
                username,
                password,
                (error, result) => {
                    console.log(result);
                    if (!error && result) {
                        navigate("/");
                    }
                }
            );
        }
    }
    
</script>

<div>
    <form on:submit|preventDefault={login}>
        <input type="text" bind:value={username} />
        <input type="password" bind:value={password} />
        <input type="submit" value="Ingresar" />
    </form>
</div>
