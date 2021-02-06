<script>
    import { navigate } from "svelte-routing";
    function onToLogin() {
        navigate("login");
    }
</script>

<h1>PUBLIC</h1>
<button on:click={onToLogin}>Ir a Login</button>
