import { Router } from "@vaadin/router";
import './src/components/login-lit';
import './src/components/view-lit';
const outlet= document.getElementById("outlet");
const router = new Router(outlet);
// se configuran los enpoint que renderizaran los componentes 
router.setRoutes([
    {path:'/login', component:'login-lit'},
    {path:'/view', component:'view-lit'},
])