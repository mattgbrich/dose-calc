const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3030

express()
  .use(express.static(path.join(__dirname, 'dist')))
  .get('/', (req, res) => res.render('index.html'))
  .get('/*', (req, res) => res.sendFile('index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
