const { NlpManager } = require('node-nlp')

module.exports = (async(req,res) => {
  
  const manager = new NlpManager({languages: ['en']});

  const message = req.body;

  //intents and utterances 
  manager.addDocument('en','Hello','greetings')
  manager.addDocument('en','Hey','greetings')
  manager.addDocument('en','Hi','greetings')
  manager.addDocument('en','How are you','greetings')
  manager.addDocument('en','Howzit','greetings')
  manager.addDocument('en','Good morning','greetings')
  manager.addDocument('en','Good afternoon','greetings')
  manager.addDocument('en','Good evening.','greetings')

  //train 
  manager.addAnswer('en','greetings','How are you');
  manager.addAnswer('en','greetings','How are you doing today');
  manager.addAnswer('en','greetings','Hello');
  manager.addAnswer('en','greetings','Hi');
  manager.addAnswer('en','greetings','Hello how can i help you today');

  await manager.train();
  manager.save();
  
  const response = await manager.process('en',message.message)
  res.send({"bot": response.answer})

}) 