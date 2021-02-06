import { Meteor } from "meteor/meteor";
import App from "../imports/ui/App.svelte";
import "bulma/css/bulma.min.css";

Meteor.startup(() => {
    new App({
        target: document.body
    })
})

