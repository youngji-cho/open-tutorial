const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('GET request to the homepage!');
});

app.post('/',(req,res)=>{
  res.send('POST request to the hoempage!');
});

app.get('/example/a',(req,res,next)=>{
  console.log('response will be sent next function');
  next();
}, (req,res)=>{
  res.send('Hello B!');
});

const b0= (req,res,next)=>{
  console.log('b0');
  next();
}

const b1= (req,res,next)=>{
  console.log('b1');
  next();
}

const b2= (req,res,next)=>{
  res.send('Hello from B!')
}

app.get('/example/b',[b0,b1,b2]);

app.route('/book')
  .get((req,res)=>{
    res.send('Get a random book');
  })
  .post((req,res)=>{
    res.send('Add a book');
  })
  .put((req,res)=>{
    res.send('Update the book');
  });

const birds = require('./birds');
app.use('/birds',birds);

app.use((req,res,next)=>{
  console.log('Time',Date.now())
  next()
});

app.use('/user/:id',(req,res,next)=>{
  console.log('Request URL', req.originalUrl);
  next()
}, (req,res,next)=>{
  console.log('Request Type',req.method);
  next()
}, (req,res,next)=>{
  console.log('Parmameter:', req.params);
  next()
},(req,res,next)=>{
  console.log('ID:', req.params.id);
  res.send(req.params.id);
});

app.listen(3000,()=>{
  console.log('Example app listening on port 3000!')
});
