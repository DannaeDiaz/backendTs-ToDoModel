"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const Todo_model_1 = require("../models/Todo.model");
// Create operation
const createTodo = (description) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTodo = yield Todo_model_1.Todo.create({
            description
        });
        return newTodo.id;
    }
    catch (error) {
        console.error(error);
    }
});
exports.createTodo = createTodo;
// // READ Operation
// export const getTodo = async (id:number) => {
//     try {
//         const todoFetched = await Todo.findByPk(id);
//         if (!todoFetched) {
//             return "Id not found";
//         }
//         return todoFetched;
//     } catch (error) {
//         console.error(error);
//     }
// }
// // Delete operation (soft)
// export const deleteTodo = async (id:number) => {
//     try {
//         await Todo.destroy();
//         return 'Data deleted succesfully';
//     } catch (error) {
//         console.error(error);
//     }
// }
