import { Axios } from '../../core'

export default {
    getAll: () => Axios.get("/dialogs"),
    create: (partner, text) => Axios.post("/dialogs", { 
        "partner": partner, 
        "text": text 
    }),
    remove: dialogId => Axios.delete("/dialogs/" + dialogId)
}