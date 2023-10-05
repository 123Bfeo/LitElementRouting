import { LitElement, html, css } from 'lit';
import { viewStyles } from '../css/view-styles';
import { generalStyles } from '../css/styles-general';

export class ViewLit extends LitElement {
  static get styles (){
    return [ viewStyles, generalStyles ]
  }

    render() {
        return html`
        <div class="container">
            <div class="card">
              <div class="cont-flex">
                  <p class="welcome">Bienvenido</p>
                  <p class="sesion">Iniciaste sesion correctamente</p>
                  <img src="/src/img/logout.svg" @click="${this.logOut}">
              </div>
            </div>
        </div>
        `;
    }
    logOut(){
      location.href = "/login"
    }
}
customElements.define('view-lit', ViewLit);
