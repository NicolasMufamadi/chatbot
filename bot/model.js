const { NlpManager } = require('node-nlp')

module.exports = ((req,res) => {
  
  const manager = new NlpManager({languages: ['en']});

  //intents
  const questions = ['hey','hello','how are you'];
  const answers = ['hey you','hey today i am feeling good how are you','hello'];

})