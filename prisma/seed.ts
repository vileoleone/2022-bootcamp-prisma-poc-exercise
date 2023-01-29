import prisma from "../src/database/database.js"

async function main() {
  await prisma.piquete_num.createMany({
    data: [
      { "lugar": "estrada",
        "tamanho": 12000,
        "capim": "mombaça" 
      }, 
      { "lugar": "sede",
        "tamanho": 17000,
        "capim": "brachiara" 
      },
      {
         "lugar": "rego",
        "tamanho": 15000,
        "capim": "tifton" 
      },
    ]
  })
  await prisma.lote_gado.createMany({
    data: [
      {
        "piqueteId": 1,
      },
       {
        "piqueteId": 2,
      },       
    ]
  })
  await prisma.novilha.createMany({
    data: [
      {
        "peso": 280,
        "idade": 1,
        "loteId": 1
      },
      {
        "peso": 300,
        "idade": 1,
        "loteId": 1
      },
      {
        "peso": 290,
        "idade": 1,
        "loteId": 2
      },
      {
        "peso": 320,
        "idade": 1,
        "loteId": 2
      },

    ]
  })
}

main()
  .then(() => console.log("registro feito com sucesso"))
  .catch(erro => {
    console.error(erro);
    process.exit(1)
  })
  .finally(
   async () => {
      await prisma.$disconnect();
   }
  )