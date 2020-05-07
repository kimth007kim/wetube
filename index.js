// const express = require("express");
import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("you are on my profile");

const betweenHome = (req, res, next) => {
  console.log("I'm between");
  next();
};
app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
