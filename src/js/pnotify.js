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

