// Task 1:
// import express from "express";
// const app=express();
// app.get('/hello',(req,res)=>{
//     res.send("hello world");
// });
// app.get('/welcome',(req,res)=>{
//     res.send("welcome to express");
// });
// ------------------------------------------------------------------------------------------------------------
// import express from "express";
// const app=express();
// app.get("/get:product/:id",(req,res)=>{
//     const {id}=req.params;
//     res.status(200).json({
//         id,
//         name:"alaa",
//     });
// })
// app.listen(3000,()=>{
//     console.log("server is running")
// })
// ------------------------------------------------------------------------------------------------------
//Task 2
//1-
// import express from "express";
// const app = express();
// app.get("/hello",(req,res)=>{
//     const {name}=req.query;
//     if(typeof name !== "string"){
//         res.status(400).json({
//             message:"must be a string"})
//     }
//     res.status(200).json({
//         message:`hello ,${name || "Guest"}`,
//     })
// })
// app.listen(3000,()=>{
//     console.log("server is running")
// })
//----------------------------------------------------
//2-
// import express from "express";
// const app = express();
// let users = [
//     { id: 1, name: "Alaa" },
//     { id: 2, name: "Sayed" }
// ];
// app.get("/user/:id", (req, res) => {
//      const {id}= req.params
//      if (isNaN(id)) {
//          res.status(400).json({
//             message: "invalid user iD"
//         });
//     }

//     const user = users.find(u => u.id === id);
//     if (user) {
//         res.status(200).json(user);
//     } else {
//         res.status(400).json({
//             message: "user not found"
//         });
//     }
// });

//  app.listen(3000,()=>{
//     console.log("server is running")
// })
// ------------------------------------------------------
//3-
// import express from "express";
// const app = express();
// app.use(express.json());
// let users = [
//   { id: 1, name: "Alaa", email: "alaa@gmail.com", password: "1234" },
//   { id: 2, name: "Sayed", email: "sayed@gmail.com", password: "1234" }
// ];

// app.post("/login", (req, res) => {
//   const { email } = req.body;
//   const { password}= req.body;

//   if (typeof email !== "string" || typeof password !== "string") {
//     return res.status(400).json({ error: "Invalid email or password format" });
//   }

//   const user = users.find(u => u.email === email && u.password === password);

//   if (user) {
//      res.status(200).json({ message: "Login successful", userId: user.id });
//   } else {
//     res.status(401).json({ error: "Email or password is incorrect" });
//   }
// });

//  app.listen(3000,()=>{
//     console.log("server is running")
// })
//---------------------
//4-
// import express from "express";
// app.use(express.json());
// const app = express();
// app.post("/calculate", (req, res) => {
//   const { a, b } = req.body;

//   if (typeof a !== "number" || typeof b !== "number") {
//     res.status(400).json({ error: "a and b must be valid numbers" });
//   }

//   res.status(200).json({ sum: a + b });
// });
// app.listen(3000,()=>{
//     console.log("server is running")
// })
//--------------------------------------------
//5-
// import express from "express";
// const app = express();
// let users = [
//   { id: 1, name: "Alaa", email: "alaa@gmail.com", password: "1234" },
//   { id: 2, name: "Sayed", email: "sayed@gmail.com", password: "1234" }
// ];
// app.patch("/user/:id", (req, res) => {
//   const {id} = req.params
//   const { name } = req.body;

//   if (isNaN(id)) {
//     return res.status(400).json({ error: "Invalid user ID" });
//   }
//   if (typeof name !== "string") {
//     return res.status(400).json({ error: "Name must be a string" });
//   }

//   const user = users.find(u => u.id === id);
//   if (!user) {
//     return res.status(404).json({ error: "User not found" });
//   }

//   user.name = name;
//   res.status(200).json({ message: "User updated successfully", userId: id });
// });
// app.listen(3000,()=>{
//     console.log("server is running")
// })
// --------------------------------------------------
