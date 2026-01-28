const express = require('express')
const app = express();

app.listen(4000, ()=>{
    console.log("Server listening on port 4000");
})

app.set("view engine", 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// app.get('/', (req, res)=>{
//     res.send("<h1>Hello from main page");
// })

// app.get('/about', (req , res)=>{
//     res.send("<h1>Hello from about page <h1>")
// })
// app.get('/about/user', (req , res)=>{
//     res.send("<h1>Hello from about subroute user <h1>")
// })


// ##########pass value through route parameters

// app.get('/about/user/:id', (req , res)=>{
//     res.send(req.params)
// }); 
// app.get('/search', (req , res)=>{
//     res.send(req.query)
// }); 



//######now express js response topic#######
// app.get('/', (req , res)=>{
//     res.send(["Apple", "Mango", "Guava"])
// })


// app.get('/', (req , res)=>{
//     res.json({
//         name: "Sahil Ansari",
//         age: 20
//     })
// })

// app.get('/', (req , res)=>{
//     const users = [
//         {
//         name: "Sahil Ansari",
//         age: 20
//     },
//     {
//         name: "Salman Ansari",
//         age: 19
//     }
//     ]
//     res.json(users)
// })

// app.get('/', (req , res)=> {
//     res.send("heyyyyyyyyyyyyyyy")
// })
// ##################
// app.get('/about', (req , res)=>{
//     res.redirect("https://www.instagram.com");
// })

//################# now ejs

// app.get('/',(req , res)=>{
//     res.render('user')
// })
// ################## download
// app.get('/download',(req , res)=>{
//     res.download('./files/Sahil_Synopsis (1).pdf', 'Document.pdf')
// })

// app.get('/download',(req , res)=>{
//     res.sendFile(__dirname + '/files/Sahil_Synopsis (1).pdf')
// })

//################### send status

// app.get('/error', (req , res)=>{
//     // res.sendStatus(404)
//     res.sendStatus(200)
// })



/// @@@@@@@@@@Express Js Request Properties and Methods

app.get('/', (req ,res)=>{
    res.jsonp({name: "SahilAnsari", age: 21})
})

// app.post('/about', (req,res)=>{
//     res.send(req.body);
// })

// app.get('/about', (req,res)=>{
//     res.send(req.hostname);
// })

// app.get('/about', (req,res)=>{
//     res.send(req.ip);
// })
// app.get('/about', (req,res)=>{
//     res.send(req.ips);
// })

// app.get('/about', (req,res)=>{
//     res.send(req.method);
// })
// app.get('/about', (req,res)=>{
//     res.send(req.originalUrl);
// })
// app.get('/about', (req,res)=>{
//     res.send(req.path);
// })
// app.get('/about', (req,res)=>{
//     res.send(req.protocol);
// })
// app.get('/about', (req,res)=>{
//     res.send(req.secure);
// })
// app.get('/about', (req,res)=>{
//     res.send(req.route);
// })

// %%%%%%%%%%%%%  methods

// app.get('/about', (req,res)=>{
//     if(req.accepts('html')){
//         res.send("<h1>Helo Html</h1>")
//     }else if(req.accepts('json')){
//         res.send({message: 'Hello Json'})
//     }else if(req.accepts('xml')){
//         res.send("<message>Hello Xml</message>")
//     }else{
//         res.send("Content type not supported")
//     }
// })



// app.get('/about', (req,res)=>{
//    res.send(req.headers)
// })

// app.get('/about', (req,res)=>{
//    res.send(req.get("host"))
// })
// app.get('/about', (req,res)=>{
//    res.send(req.get("connection"))
// })
// app.get('/about', (req,res)=>{
//    res.send(req.get("Accept"))
// })


app.post('/about', (req,res)=>{
   if(req.is('application/json')){
    res.send("valid json data")
   }else if(req.is('text/html')){
    res.send("Html data")
   }else{
    res.status(400).send("Unsupported Content type")
   }
})