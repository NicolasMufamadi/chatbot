const { NlpManager } = require('node-nlp')

module.exports = (async(req,res) => {
  
  const manager = new NlpManager({languages: ['en']});

  //intents and utterances 
  manager.addDocument('en','Hello','greetings')

  //train 
  manager.addAnswer('en','greetings','How are you');

  await manager.train();

  const response = await manager.process('en','Hello')
  res.send(response)

})