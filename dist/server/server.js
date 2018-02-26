"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
//initialize a simple http server
const server = http.createServer(app);
//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });
wss.on('connection', (ws) => {
    //send immediatly all unsend notifications 
    let notifications = [
        {
            type: "TASK_ASSIGNED",
            resource: {
                title: "Book Travel",
                assigned_by: "Oliver Quiver"
            },
            created_at: new Date()
        },
        {
            type: "TASK_ASSIGNED",
            resource: {
                title: "Mobility Submit",
                assigned_by: "Buck Owen"
            },
            created_at: new Date()
        },
        {
            type: "TASK_ASSIGNED",
            resource: {
                title: "Compile task",
                assigned_by: "Buck Owen"
            },
            created_at: new Date()
        },
        {
            type: "QUESTIONNAIRE_COMPLETED",
            resource: {
                title: "UX Designer Requistion",
                completed_by: "Sarah Gutierrez"
            },
            created_at: new Date(),
        },
        {
            type: "QUESTIONNAIRE_COMPLETED",
            resource: {
                title: "Been has been on hold for 90 days",
                completed_by: "Sarah Gutierrez"
            },
            created_at: new Date(Date.parse("March 21, 2018")),
        },
    ];
    ws.send(JSON.stringify(notifications));
    //send some fake notifications
    setInterval(function () {
        let notification = {
            type: "TASK_ASSIGNED",
            resource: {
                title: "Mobility Submit" + " " + new Date(),
                assigned_by: "Buck Owen"
            },
            created_at: new Date()
        };
        ws.send(JSON.stringify(notification));
    }, 2000);
    setInterval(function () {
        let notification = {
            type: "QUESTIONNAIRE_COMPLETED",
            resource: {
                title: "WATER UX Survey" + " " + new Date(),
                assigned_by: "Srarh Owen"
            },
            created_at: new Date()
        };
        ws.send(JSON.stringify(notification));
    }, 3300);
});
//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
//# sourceMappingURL=server.js.map