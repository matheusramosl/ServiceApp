const express = require('express')
const { proposalRoute } = require('./routes/proposal.routes')

const app = express()

const port = 3001

app.use('/proposal', proposalRoute)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))