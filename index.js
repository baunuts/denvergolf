const express = require('express')
const golfAPI = require('./golfconnector')

const app = express()
const PORT = 3000

app.get('/', (req, res) => res.json({ message: 'Welcome to Denver golf!'}))

app.get('/times', (req, res) => {
    const asyncApiCall = async () => {
        const response = await golfAPI.search('2020-10-28', 1, 0)
        console.log(response.data)
    }

    asyncApiCall()

    res.json({success: 'true'})
})

app.listen(PORT, () => console.log(`we are up and running on http://localhost:${PORT}`))