import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class LanceService {
    constructor () {}

    async createLance(lance: Prisma.LanceCreateInput) {
        try {
            const newlance = await prisma.lance.create({
                data: lance
            });
            return newlance;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async findLances(lanceId?: string) {
        try {
          if (lanceId){
            const lance = await prisma.lance.findUnique({
              where: { lanceId }
            });
            return lance;
          } else {
            const lances = await prisma.lance.findMany();
            return lances; 
          }
        } catch (error) {
          console.error(error);
          return undefined; 
        }
      }

    async updateLance(lanceId: string, newData: Prisma.LanceCreateInput){
        try {
            const lanceUpdated = await prisma.lance.update({
                where: {
                    lanceId
                },
                data: {
                    comprador: newData.comprador,
                    leilao: newData.leilao,
                    valor: newData.valor
                }
            });
            return lanceUpdated;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    async deleteLance(lanceId: string){
    try {
        if(!lanceId){
            return console.log("ID is not optional.");
        }
        await prisma.lance.delete({where: {lanceId}});
        return "ok";
    }   catch(error){
        console.log("error");
        return null;
    }
    }
}

export default new LanceService;