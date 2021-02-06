<script>
    import { Meteor } from "meteor/meteor";
    import { navigate } from "svelte-routing";

    let username, password;

    function onlogin() {
        if (username && password) {
            Meteor.loginWithPassword(username, password, errorLogin => {
                if(!errorLogin){
                    Meteor.call('users.isAdmin',(error,isAdmin)=>{
                        if(!error){
                            if(isAdmin){
                                navigate("admin");
                            }else{
                                navigate("home");
                            }
                        }
                    })
                }
            })
        }
    }
    
</script>

<!-- <div>
    <form on:submit|preventDefault={onlogin}>
        <input type="text" bind:value={username} />
        <input type="password" bind:value={password} />
        <input type="submit" value="Ingresar" />
    </form>
</div> -->


<section class="hero is-fullheight">
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
                <h3 class="title has-text-black">Login</h3>
                <hr class="login-hr">
                <p class="subtitle has-text-black">Please login to proceed.</p>
                <div class="box">
                    <figure class="avatar">
                        <img src="https://placehold.it/128x128">
                    </figure>
                    <form on:submit|preventDefault={onlogin}>
                        <div class="field">
                            <div class="control">
                                <input class="input is-large" type="text" placeholder="Your Username" autofocus="" bind:value={username} >
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <input class="input is-large" type="password" placeholder="Your Password" bind:value={password} >
                            </div>
                        </div>
                        <div class="field">
                            <label class="checkbox">
              <input type="checkbox">
              Remember me
            </label>
                        </div>
                        <button type="submit" class="button is-block is-info is-large is-fullwidth">Login <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                    </form>
                </div>
                <p class="has-text-grey">
                    <a href="../">Sign Up</a> &nbsp;·&nbsp;
                    <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                    <a href="../">Need Help?</a>
                </p>
            </div>
        </div>
    </div>
</section>