import express ,{Request ,Response} from "express";
import { Person, Gender } from "./Models/person";

const app = express();

app.get("/", (req: Request, res: Response<Person, any>) => {
  res.send({
   name: "John Smith",
   age: 30,
   dateOfBirth: new Date("2004-11-12").toDateString(),
   gender: Gender.Male,
   
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})