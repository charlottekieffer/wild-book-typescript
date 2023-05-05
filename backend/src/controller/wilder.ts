import { Request, Response } from "express";
import dataSource from "../utils";
import { Wilder } from "../entity/Wilder";
import { Grade } from "../entity/Grade";

const WilderController = {
  create: async (req: Request, res: Response): Promise<void> => {
    try {
      await dataSource.getRepository(Wilder).save(req.body);
      res.send("Created wilder");
    } catch (error) {
      console.log(error);
      res.send("Error while creating wilder");
    }
  },
  read: async (req: Request, res: Response): Promise<void> => {
    try {
      const grades = await dataSource
        .getRepository(Grade)
        .find({ relations: { skill: true, wilder: true } });
      console.log(grades);

      const wilders = await dataSource.getRepository(Wilder).find();
      console.log(wilders);

      const data = wilders.map((wilder) => {
        const wilderGrades = grades.filter(
          (grade) => grade.wilder.id === wilder.id
        );
        const wilderGradeLean = wilderGrades.map((el) => {
          return { title: el.skill.name, votes: el.grade };
        });
        const result = {
          ...wilder,
          skills: wilderGradeLean,
        };
        console.log(result);
        return result;
      });
      res.send(data);
    } catch (error) {
      console.log(error);
      res.send("Error while reading wilder");
    }
  },
  update: async (req: Request, res: Response): Promise<void> => {
    try {
      await dataSource
        .getRepository(Wilder)
        .update(req.body.id, req.body.newData);

      res.send("updated");
    } catch (error) {
      res.send("Error while updating wilder");
    }
  },
  delete: async (req: Request, res: Response): Promise<void> => {
    try {
      console.log(req.body);
      await dataSource.getRepository(Grade).delete(req.body);
      await dataSource.getRepository(Wilder).delete(req.body);
      res.send("deleted");
    } catch (error) {
      res.send("Error while deleting wilder");
    }
  },

  /*
  addSkill: async (req: Request, res: Response): Promise<void> => {
    try {
      const wilderToUpdate = await dataSource
        .getRepository(Wilder)
        .findOneBy({ name: req.body.wilderName });
      console.log(wilderToUpdate);

      const skillToAdd = await dataSource
        .getRepository(Skill)
        .findOneBy({ name: req.body.skillName });

      if (wilderToUpdate !== null) {
        wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
        await dataSource.getRepository(Wilder).save(wilderToUpdate);
        res.send("Skill added to wilder");
      }
    } catch (error) {
      res.send("Error while creating skill");
    }
  },
  */
};
export default WilderController;
