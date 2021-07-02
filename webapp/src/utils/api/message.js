import { Axios } from "../../core";

export default {
  getAllByDialogId: id => Axios.get("/messages?dialog=" + id),
  send: (text, dialogId) => Axios.post('/messages', {
    "text": text,
    "dialog_id": dialogId
  })
};