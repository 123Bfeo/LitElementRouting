import { LitElement, html, css } from "lit";
import { inputStyles } from "../css/input-styles";
export class InputLit extends LitElement {
  static get styles() {
    return [
      inputStyles,
      css`
    
      `,
    ];
  }
  render() {
    return html`
      <div class="container">
        <input
          type="text"
          name="username"
          placeholder="Username"
          class="input-username"
          id="username"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          class="input-password"
          id="password"
        />
      </div>
    `;
  }
}
customElements.define("input-lit", InputLit);
