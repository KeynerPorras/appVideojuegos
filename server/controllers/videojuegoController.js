const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
//Obtener listado
module.exports.get = async (request, response, next) => {
  const videojuegos=await prisma.videojuego.findMany();
  response.json(videojuegos);
};
//Obtener por Id
module.exports.getById = async (request, response, next) => {

    let id=parseInt(request.params.id);
    const videojuego=await prisma.videojuego.findUnique({
        where:{ id:id},
        include:{
            generos:true
        }
    });
    response.json(videojuego);
};
