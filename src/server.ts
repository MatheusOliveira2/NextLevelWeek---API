import express from 'express'
import routes from './routes'

const app = express()
app.use(express.json())
app.use(routes)
const users = [
    'Diego',
    'Matheus',
    'Teste'
]

app.get('/',(req,res)=>{
    return res.json()
})
app.listen(3333)