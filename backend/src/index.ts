import express from "express";
import cors from "cors";
import dataSource from "./utils";
import WilderController from "./controller/wilder";
import SkillController from "./controller/skill";
import GradeController from "./controller/grade";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/wilder", WilderController.create);
app.get("/api/wilder", WilderController.read);
app.put("/api/wilder", WilderController.update);
app.delete("/api/wilder", WilderController.delete);

app.post("/api/skill", SkillController.create);
app.get("/api/skill", SkillController.read);
app.put("/api/skill", SkillController.update);
app.delete("/api/skill", SkillController.delete);

app.get("/api/grade", GradeController.read);
app.post("/api/grade", GradeController.create);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that !");
});

const start = async (): Promise<void> => {
  await dataSource.initialize();
  app.listen(5000, () => console.log("Server started on 5000"));
};
void start();
