const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cookieEncryter = require('cookie-encrypter');
const secretKey = '23879ASDF234sdf@!#$a';
const cookieOption = {
  httpOnly : true,
  signed: true,
  maxAge: 30000,
};

app.use(cookieParser(secretKey));
app.use(cookieEncryter(secretKey));

const products = {
  1:{title: 'The history of web'},
  2:{title: 'The next web'}
};

app.get('/products',(req,res)=>{
  let output = '';
  for(let name in products){
    output += `<li>
      <a href='/cart/${name}'>${products[name].title}<a>
    </li>`
  }
  res.send(`<h1>products</h1><ul>${output}</ul>`);
});

app.get('/cart',(req,res)=>{
  let cart = req.signedCookies.cart;
  console.log(cart);
  let output = '';
  if(!cart){
    res.send('Empty!')
  } else{
    for (let name in products){
      output+=`<li>${products[name].title}:${cart[name]} </li>`
    }
  }
  res.send(`<h1>products</h1><ul>${output}</ul>`)
});

app.get('/cart/:id',(req,res)=>{
  let id = req.params.id;
  let cart = req.signedCookies.cart;
  if(!cart){
    cart={}
  };
  if(cart[id]){
    cart[id]=parseInt(cart[id])+1;
  } else if(!cart[id]){
    cart[id] = 1;
  }
  res.cookie('cart',cart,cookieOption);
  res.redirect('/cart');
});

app.listen(3000,()=>{
  console.log('Connected 3000 ports!');
});
