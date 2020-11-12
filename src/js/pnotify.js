import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";
import * as Confirm from "@pnotify/confirm";
import { info } from "@pnotify/core";



export default function click() {
  info({
    title: "Notification",
    text:
      " Too many matches found. Please enter a more specific query! ",
    modules: new Map([
      [
        Confirm,
        {
          confirm: true,
          buttons: [
            {
              text: "Ok",
              primary: true,
              click: notice => {
                notice.close();


              }
            }
          ]
        }
      ]
    ])
  });
}

export const App = document.getElementById("app");

App.innerHTML = `
<div class="container">
  <h1>Choose a country which you want to know more :) </h1>
  <input type='text' name="country"></input>
</div>
`;