import { Request, Response } from "express";
import { repository } from "../repositories/repositories.js";
import { allInProperty, cattleService } from "../services/services.js";

export async function getAllMyCattle(req: Request,  res: Response) {
    try {
        const all = await cattleService.allInProperty();
        res.status(200).send(all)
    } catch (error) {
        res.status(400).send(error.message)
    }

    return res.send("ok")
}

export async function getSelectedCattle(req: Request, res: Response) {
    const piquete: number = Number(req.params.piquete)

    try {
        const all = await cattleService.allInPiquete(piquete);
        res.status(200).send(all)
    } catch (error) {
        res.status(400).send(error.message)
    }

    return res.send("ok")
}


