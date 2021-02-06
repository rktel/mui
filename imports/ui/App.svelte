<script>
    import { Router, Route, navigate } from "svelte-routing";
    import Home from "./layouts/Home.svelte";
    import Login from "./layouts/Login.svelte";
    import Admin from "./layouts/Admin.svelte";
    import NoFound from "./layouts/NoFound.svelte";
    import Public from "./layouts/Public.svelte";

    let checking = false;

    if (!Meteor.userId()) {
        checking = true;
        navigate("public");
    } else {
        Meteor.call("users.isAdmin", (error, isAdmin) => {
            if (!error) {
                checking = true;
                if (isAdmin) {
                    navigate("admin");
                } else {
                    navigate("home");
                }
            }
        });
    }

    export let url = "";
</script>

<Router {url}>
    <div>
        {#if checking}
        <Route path="home"><Home /></Route>
        <Route path="admin"><Admin /></Route>
        <Route path="login"><Login /></Route>
        
        <Route path="public"><Public /></Route>
        <Route path="*"><NoFound /></Route>
            {:else}
            <h1>Loading ...</h1>
        {/if}
        

    </div>
</Router>
