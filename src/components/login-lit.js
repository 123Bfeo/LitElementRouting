import  { LitElement, html, css } from 'lit';
import { generalStyles } from '../css/styles-general';
import { loginStyles } from '../css/login-styles';

import './input-lit'

export class LoginLit extends LitElement {
    static get styles (){
        return [ generalStyles, loginStyles]
    }
  
    render() {
        return html`
           <div class="container">
              <div class="card">
                <div class="login-flex">
                  <input-lit></input-lit>
                  <button class="button" @click="${this.login}">Enviar</button>
                </div>
              </div>
           </div>
        `;
    }
    login(){
      location.href = '/view';
    }
}
customElements.define('login-lit', LoginLit);
