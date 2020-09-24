const express = require('express');
const mysql = require('mysql')
const bodyparser = require('body-parser')
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);      //chat application


app.use( express.static(__dirname) );
app.use(bodyparser.json())

var mysqlConnection = mysql.createConnection({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12367163',
  password : 'eqCvjI2MzR',
  database : 'sql12367163',
  multipleStatements: true

});
async function botstr(findStr){
      var { NlpManager } = require('node-nlp');       //natural language processing for chatbot
      const manager = new NlpManager({ languages: ['en'], nlu: { useNoneFeature: false }});
      //train the chatbot
      manager.addDocument('en', 'goodbye for now', 'greetings.bye');
      manager.addDocument('en', 'bye bye take care', 'greetings.bye');
      manager.addDocument('en', 'okay see you later', 'greetings.bye');
      manager.addDocument('en', 'bye for now', 'greetings.bye');
      manager.addDocument('en', 'i must go', 'greetings.bye');

      manager.addDocument('en', 'hello', 'greetings.hello');
      manager.addDocument('en', 'hi there', 'greetings.hello');
      manager.addDocument('en', 'hello', 'greetings.hello');
      manager.addDocument('en', 'howdy', 'greetings.hello');
      manager.addDocument('en', 'hiya', 'greetings.hello');
      manager.addDocument('en', 'hi-ya', 'greetings.hello');
      manager.addDocument('en', 'howdy-do', 'greetings.hello');
      manager.addDocument('en', 'aloha', 'greetings.hello');
      manager.addDocument('en', 'hey', 'greetings.hello');

      manager.addDocument('en', 'good day', 'greetings.goodDay');
      manager.addDocument('en', 'good night', 'greetings.goodNight');
      manager.addDocument('en', 'good morning', 'greetings.goodMorning');
      manager.addDocument('en', 'good evening', 'greetings.goodevening');
      manager.addDocument('en', 'good afternoon', 'greetings.goodafternoon');





      
      manager.addDocument('en', "Enough", 'end');
      manager.addDocument('en', "name ", 'add');
      manager.addDocument('en', "address", 'em');
      manager.addDocument('en', "email", 'ph');
      manager.addDocument('en', "phone", 'enough');
       
      manager.addDocument('en', "Order", 'order');
      manager.addDocument('en', "Want to order something", 'order');
      manager.addDocument('en', "Want to order some pizza", 'order');
      manager.addDocument('en', "Menu", 'order');
      
      
      manager.addDocument('en', "Veg Pizza", 'veg');
      manager.addDocument('en',"Chesse Pizza", 'value');
      manager.addDocument('en',"Paneer Pizza", 'value');
      manager.addDocument('en',"Chicken Pizza", 'value');
      manager.addDocument('en',"tantoori Pizza", 'value');
      manager.addDocument('en',"Regular", 'size');
      manager.addDocument('en',"Medium", 'size');
      manager.addDocument('en',"Large", 'size');


      manager.addDocument('en',"Non-Veg Pizza", 'nveg')

      manager.addDocument('en',"Quantity of", 'quantity')


      
      //***********************************************************************************//
      //************************************************************************************//
      //************************************************************************************//
      //************************************************************************************//
      //************************************************************************************//
      //************************************************************************************//
      //************************************************************************************//
      // Train also the NLG..........Train it to answer
      
     // manager.addAnswer('en', 'stat', 'Till next time :)');
       
      manager.addAnswer('en','add','Enter your address :');
      manager.addAnswer('en','em','Enter your email please :');
      manager.addAnswer('en','ph','Enter your phone number please :');
      manager.addAnswer('en','enough','success ,now you can order your food Type : "order" to select your pizza');
      manager.addAnswer('en','greetings.hello','WELCOME TO YOYO PIZZA <br> Please enter your details before ordering the food <br> name (e.g : name abcd)     <br>  Address(e.g : address  25 abcd)     <br> email_id (e.g : emaill abc@gmail.com)      <br>     phone number (e.g : phone 1562920) ' )
      let v = Math.floor(Math.random() * 100000)

      manager.addAnswer('en','end','Your order id is '+v );
      manager.addAnswer('en','veg',' Veg Pizza List \
      <script> \
      $("button").click(function() { \
        var socket = io(); \
        var v_button = $(this).val(); \
        if(v_button === "1") \
           msg = "Cheese Pizza"; \
        else \
          msg = "Paneer Pizza"; \
          setTimeout(function() {\
            socket.emit("chat message", msg); \
         }, 1); \
         $("button").hide();\
      }); \
      </script> \
      <br> \
      <button  style="background-color: #16BFFD;border-radius: 10px" value="1" >Chesse Pizza</button> \
      <button style="background-color: #16BFFD;border-radius: 10px" value="2" >Chilly Pizza</button>' )
      manager.addAnswer('en','nveg','Non Veg Pizza List \
      <script> \
      $("button").click(function() { \
        var socket = io(); \
        var v_button = $(this).val(); \
        if(v_button === "1") \
           msg = "Chicken Pizza"; \
        else \
          msg = "tantoori Pizza"; \
          setTimeout(function() {\
            socket.emit("chat message", msg); \
         }, 1); \
         $("button").hide();\
      }); \
      </script> \
      <br> \
      <button style="background-color: #16BFFD;border-radius: 10px" value="1" >Chicken Pizza</button> \
      <button style="background-color: #16BFFD;border-radius: 10px" value="2" >tantoori Pizza</button>' )
      manager.addAnswer('en','order','Menu \
      <script> \
      $("button").click(function() { \
        var socket = io(); \
        var v_button = $(this).val(); \
        if(v_button === "1") \
           msg = "Veg Pizza"; \
        else \
           msg = "Non-Veg Pizza"; \
           setTimeout(function() {\
            socket.emit("chat message", msg); \
         }, 1); \
      }); \
      </script> \
      <br> \
      <button style="background-color: #16BFFD;border-radius: 10px" value="1" >Veg Pizza</button> \
      <button style="background-color: #16BFFD;border-radius: 10px" value="2" >Non-Veg Pizza</button>' )

      manager.addAnswer('en','value','Size\
      <script> \
      $("button").click(function() { \
        var socket = io(); \
        var v_button = $(this).val(); \
        if(v_button === "1") \
           msg =  "Regular"; \
        else if(v_button === "2") \
         msg = "Medium"; \
        else \
          msg =  "Large"; \
          setTimeout(function() {\
            socket.emit("chat message", msg); \
         }, 100); \
      }); \
      </script> \
      <br> \
      <button style="background-color: #16BFFD;border-radius: 10px" value="1" >Regular</button> \
      <button style="background-color: #16BFFD;border-radius: 10px" value="2" >Medium</button> \
      <button style="background-color: #16BFFD;border-radius: 10px" value="3" > Large </button>' )

      manager.addAnswer('en','size','Select Number of pizza u need \
      <script> \
      $("button").click(function() { \
        var socket = io(); \
        var v_button = $(this).val(); \
        if(v_button === "1") \
           msg = "Quantity of 1"; \
        else if(v_button === "2")\
           msg = "Quantity of 2"; \
        else \
           msg = "Quantity of 3"; \
           setTimeout(function() {\
            socket.emit("chat message", msg); \
         }, 19); \
      }); \
      </script> \
      <br> \
      <button style="background-color: #16BFFD;border-radius: 10px ; width : 30px" value="1" >1</button> \
      <button style="background-color: #16BFFD;border-radius: 10px ; width : 30px" value="2" >2</button> \
      <button style="background-color: #16BFFD;border-radius: 10px ; width : 30px" value="3" >3</button> ')

      manager.addAnswer('en','quantity','any thing else\
      <script> \
     $("button").click(function() { \
       var socket = io(); \
       var v_button = $(this).val(); \
       if(v_button === "1") \
          msg = "Order"; \
       else if(v_button === "2")\
          msg = "Enough"; \
          setTimeout(function() {\
           socket.emit("chat message", msg); \
        }, 1); \
     }); \
     </script> \
     <br> \
     <button value="1" >order</button> \
     <button value="2" >Enough </button> ' )

      manager.addDocument('en', "status", 'stat');


      manager.addAnswer('en', 'greetings.bye', 'Till next time :)');
      manager.addAnswer('en', 'greetings.bye', 'see you soon!');




      await manager.train();
      manager.save();
      var response = await manager.process('en', findStr);
      console.log(response);
      //console.log(typeof(response.answer));
      return response.answer;
}

//serve the static html files
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//events emitters
io.on('connection', function(socket){
  console.log('a user connected'); 
  socket.on('disconnect', function(){
      console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
    botstr(msg)
        .then(result => {
            if(result != null){
              
              io.emit('chat message', result);
            }
        });

  });
});

app.get('/pizza',(req,res)=>{
  mysqlConnection.query('SELECT * FROM yoyo',(err,rows,fields)=>{
      if(!err)
       res.json(rows)
      else
      console.log(err);
  });
});
app.get('/pizza/:id',(req,res)=>{
 mysqlConnection.query('SELECT * FROM yoyo WHERE order_id=?',[req.params.id],(err,rows,fields)=>{
     if(!err)
      res.json(rows)
     else
     console.log(err);
 });
});
app.post('/pizza1',(req,res)=>{
  let ord = req.body;
  mysqlConnection.query('INSERT INTO yoyo VALUES (?,?,?,?,?,?,?)',[ord.order_id,ord.user_name,ord.orders,ord.address,ord.email_id,ord.phone,ord.status],(err,rows,fields)=>{
      if(!err)
       res.send('posted')
      else
      console.log(err);
  });
});

//server start
http.listen(process.env.PORT);
