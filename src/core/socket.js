import io from 'socket.io-client'

const socket = io(window.location.origin.replace("4001", "4000"))
 
export default socket