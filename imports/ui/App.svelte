<script>
    import { MaterialApp } from "svelte-materialify";
    import { Router, Route, navigate } from "svelte-routing";
    import Home from "./layouts/Home.svelte";
    import Login from "./layouts/Login.svelte";
    import { onMount } from "svelte";
    
    const sessionData = localStorage.getItem("sessionData");

    if (sessionData) {
        navigate("/");
    } else {
        navigate("login");
    }

    onMount(() => {
        console.log(new Date(), "on Mount App");
    });

    export let url = "";
</script>

<MaterialApp>
    <Router {url}>
        <div>
            <Route path="/"><Home /></Route>
            <Route path="login"><Login /></Route>
        </div>
    </Router>
</MaterialApp>
