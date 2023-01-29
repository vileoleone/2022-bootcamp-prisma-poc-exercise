import { Request, Response } from "express";
import { CattleOnlyObject } from "../protocols/protocols.js";
import { repository } from "../repositories/repositories.js";
import { cattleService } from "../services/services.js";
//import { allInProperty, cattleService } from "../services/services.js";

export async function getAllMyCattle(req: Request,  res: Response) {
    try {
        const countOfCattle = await cattleService.allInProperty() 
        res.status(200).send(countOfCattle._count)
    } catch (error) {
        res.status(400).send(error.code)
    }

}

export async function getSelectedCattle(req: Request, res: Response) {
    const piquete: number = Number(req.params.piquete)

    try {
        const all = await cattleService.allInPiquete(piquete);
        res.status(200).send(all)
    } catch (error) {
        res.status(400).send(error.message)
    }

}

export async function insertANewCattle(req: Request, res: Response) {
    const CattleObject: CattleOnlyObject = req.body;

    try {
        const all = await cattleService.createNovilhaService(CattleObject) ;
        res.status(200).send(all)
    } catch (error) {
        res.status(400).send(error.message)
    }

}

export async function updateCattlePiquete(req: Request, res: Response) {
    const {lote_gado, id_piquete} = req.body;

    try {
        const all = await cattleService.updatePiqueteService(id_piquete, lote_gado) ;
        res.status(200).send(all)
    } catch (error) {
        res.status(400).send(error)
    }

}




