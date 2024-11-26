import http from 'http'
import { Server } from 'socket.io'
const server = http.createServer((req, res) => res.end('Hello World'))
const io = new Server(server).of('/chat')
io.on('connection', (socket) => {
  console.log('New client connected')

  const { room } = socket.handshake.query
  if (!room) {
    socket.disconnect()
    return
  }
  // localhost:3000/chat?room=A1
  socket.join(room)

  socket.on('message', (message) => {
    console.log(message)
    socket.broadcast.emit('message', message)
  })
  socket.on('disconnect', () => console.log('Client disconnected'))
})
server.listen(3000, () => console.log('Server is running'))
