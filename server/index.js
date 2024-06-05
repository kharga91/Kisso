const express = require('express')
const app = express()
const port = 4000

app.get('/kisso', (req, res) => {
  res.send({
    name: "Aniket Kharga",
    balance: 1200,
    rewardPoint: 12,
    })
  

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})