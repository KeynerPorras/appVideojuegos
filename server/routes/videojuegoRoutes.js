const express=require("express");
const router=express.Router();

//Controlador con las acciones de las rutas
const videojuegoController=require("../controllers/videojuegoController");
//Rutas de videojuegos

router.get("/",videojuegoController.get);

router.get("/:id",videojuegoController.getById);

module.exports=router;