import expect from "expect";
import { getBoard, 
    getBoardUnauthorized, 
    getBoardBadRequest, 
    postBoard, 
    getBoardById, 
    deleteBoardById,
    postBoardBadRequest,
    postBoardUnauthorized} from "../helpers/board";

describe("GET - Board test cases", () =>{
    it("It should retunrs a status 200", async () => {
        let response = await getBoard();
        expect(await response.statusCode).toBe(200);
    });

    it("It should retunrs a status 401 Unauthorized", async () => {
        let response = await getBoardUnauthorized();
        expect(await response.statusCode).toBe(401);
    });

    it("It should retunrs a status 400 Bad Request", async () => {
        let response = await getBoardBadRequest();
        expect(await response.statusCode).toBe(400);
    });
});

describe("POST - Board test cases", () =>{

    it("It should creates a new board", async () => {
        let response = await postBoard();
        const boardId = await response.body.id;
        const boardName = await response.body.name;
        const validate = await getBoardById(boardId);
        console.log(validate.body);
        expect(await validate.body.name).toBe(boardName);
        await deleteBoardById(boardId);
    });

    it("It should return a 400 Bad Request", async () => {
        let response = await postBoardBadRequest();
        expect(await response.statusCode).toBe(400);
    });

    it("It should return a 401 Unauthorized", async () => {
        let response = await postBoardUnauthorized();
        expect(await response.statusCode).toBe(401);
    });
});
