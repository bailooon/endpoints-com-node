const express = require("express");
const product = require("../models/product");
const router = new express.Router();
const productRouter = require('./product-route')

router.get("/", (req, res) => {
  res.json({
    message: "Api no ar!",
    endpoints: {
      products: "/products",
      health: "/health",
    }
  })
})

router.get('/health', (req, res) => {
  res.json({
    status: 'Ok',
    timestamp: new Date().toISOString()
  })
})

router.use('/products', productRouter)

// let users = [
//   { id: 1, nome: "Matheus", idade: 20 },
//   { id: 2, nome: "Kaique", idade: 21 },
// ];

// //endpoint
// //get
// router.get("/", (req, res, next) => {
//   try {
//     res.status(200).send({
//       success: true,
//       message: "Usuários encontrados",
//       data: users,
//       total: users.length,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Erro interno",
//       error: error.message,
//     });
//   }
// });

// //post
// router.post("/", (req, res, next) => {

//     try{
//         const {nome, idade} = req.body

//         if(!nome || !idade){
//             return res.status(400).json({
//                 success:false,
//                 message: "Favor, enviar os campos: nome e idade"
//             })
//         }

//         const newId = users.length + 1;
//         const newUser = {
//             id: newId,
//             nome,
//             idade
//         }
//         users.push(newUser);

//         console.log(newId);
//         //Status code 201: created
//         res.status(201).json({
//             success:true,
//             message: "Usuario criado com sucesso",
//             data:newId
//         })
//     }catch(error){
//         res.status(500).json({
//             success:false,
//             message:"Ocorreu um erro na criação do usuario"
//         })

//     }

// });

// //put
// router.put("/:id", (req, res, next) => {
//     const id = parseInt(req.params.id);
//     const {nome, idade} = req.body

//         if(!nome || !idade){
//             return res.status(400).json({
//                 success:false,
//                 message: "Favor, enviar os campos: nome e idade"
//             })
//         }

//         const 
//         userFind = users.findIndex((u) => u.id == id)

//         if(userFind === -1){
//             return res.status(404).json({
//                 success:false,
//                 message: "usuário não encontrado"
//             })
//         }

//         users[userFind] = {
//             id,
//             nome,
//             idade
//         }

//         res.status(200).json({
//             success:true,
//             message: "Usuário atualizado com sucesso!"
//         });
// })

// //delete
// router.delete("/:id", (req, res, next) => {
//   try{
//     const id = parseInt(req.params.id)
//     const userIndex = users.findIndex(u => u.id === id)
//     console.log(`index encontrado: ${userIndex}`)
//     if(userIndex === -1){
//       return res.status(404).json(
//         {
//           success: false, 
//           message: "Identificador não encontrado"
//         }
//       )
//     }
//     //remover da lista
//     const deleteUser = users[userIndex] 
//     users.splice(userIndex, 1) // removendo 

//     res.status(200).json({
//         success: true,
//         message: 'Removido com sucesso'
//     })
    
//   }catch(error){
//     console.info(erro)
//     res.status(500).json(
//       {
//         success:false, 
//         message: "Erro interno ao deletar o usuário"
//       }
//     )
//   }

// });

module.exports = router;
