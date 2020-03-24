import request from "supertest";
import { routes }  from "../../routes";

export function getBoard() {
    const bodyRequest = {
        boards: "open"
    }
    return request(global.baseURL)
        .get(`/${routes.version}/${routes.boardsPath}`)
        .query(global.authParams)
        .query(bodyRequest);
}

export function getBoardUnauthorized() {
    const params = {
        key: `${global.key}`,
        token: "abc"
    }
    return request(global.baseURL)
        .get(`/${routes.version}/${routes.boardsPath}`)
        .query(params);
}

export function getBoardBadRequest() {
    const params = {
        ky: `${global.key}`,
        token: "abc"
    }
    return request(global.baseURL)
        .get(`/${routes.version}/${routes.boardsPath}`)
        .query(params);
}

export function postBoard(){
    const bodyRequest = {
        name : "New Board Automation",
        defaultLabels : true,
        defaultLists : true,
        prefs_permissionLevel : "private",
        prefs_comments : "members"
    }

    return request(global.baseURL)
        .post(`/${routes.version}/${routes.boardsPost}/`)
        .query(global.authParams)
        .query(bodyRequest)
        .expect(200);
}

export function getBoardById(boardId) { 
    return request(global.baseURL)
        .get(`/${routes.version}/${routes.boardsGet}/${boardId}/`)
        .query(global.authParams)
        .expect(200);
}

export function deleteBoardById(boardId) {
    return request(global.baseURL)
        .delete(`/${routes.version}/${routes.boardsDelete}/${boardId}/`)
        .query(global.authParams)
        .expect(200);
}

export function postBoardBadRequest(){
    const bodyRequest = null;

    return request(global.baseURL)
        .post(`/${routes.version}/${routes.boardsPost}/`)
        .query(global.authParams)
        .query(bodyRequest);
}

export function postBoardUnauthorized() {
    const bodyRequest = {
        name : "New Board Automation",
        defaultLabels : true,
        defaultLists : true,
        prefs_permissionLevel : "private",
        prefs_comments : "members"
    }
    const params = {
        key: `${global.key}`,
        token: "abc"
    }

    return request(global.baseURL)
        .post(`/${routes.version}/${routes.boardsPost}/`)
        .query(params)
        .query(bodyRequest);
}