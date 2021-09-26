// express to make app
const express = require("express");
const app = express();

// use express to solve http method
app.get("/", (req, res) => {
  res.send("hello world. This is the express testing");
});

app.get("/api/test", (req, res) => {
  res.send("accessing the api test part");
});

// use express to create restful api
app.get("/api/test/:year/:month/:date", (req, res) => {
  // TEXT(parns.year)
  //   res.send(
  //     "test : " + req.params.year + "/" + req.params.month + "/" + req.params.date
  //   );

  // OBJECT(params)
  res.send(req.params);
});

// http GET

const course = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/api/course", (req, res) => {
  res.send(course);
});

app.get("/api/course/:id", (req, res) => {
  const test = course.find((c) => c.id === parseInt(req.params.id));
  if (!test) {
    res.status(404).send("no this course");
  }
  res.send(test);
});

// http post
app.use(express.json());

app.post("api/courses", (req, res) => {
  const postCourse = { id: postCourse.lengh + 1, name: req.body.name };
  courses.push(postCourse);
  res.send(postCourse);
});

// port
const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("listening 3000");
});
