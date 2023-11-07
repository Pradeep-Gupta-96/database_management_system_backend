import express from "express";
import { createTodoTable } from "./controller.js";

export const route = express.Router()
route.get('/createTodoTable', createTodoTable)
