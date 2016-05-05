var express          = require('express'),
    app              =express(),
    bodyParser       =require('body-parser'),
    mongoose         =require('mongoose'),
    meetupsController=require('./server/controller/meetup-controller.js');
 var PORT=process.env.PORT ||3000;

 mongoose.connect('mongodb://localhost:27017/mean-to-do-app');

app.use(bodyParser());//parse json
app.get('/',function(req,res){
  res.sendfile(__dirname+'/views/index.html');
});
app.use('/js',express.static(__dirname+'/js'));
app.post('/api/meetups',meetupsController.create);

app.listen(PORT,function(){
   console.log('Server is running');
})
