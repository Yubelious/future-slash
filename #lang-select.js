/*Array of Flag images*/
var pictureList = [ 
			"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHJlY3QgeT0iODUuMzMxIiBzdHlsZT0iZmlsbDojRDgwMDI3OyIgd2lkdGg9IjUxMiIgaGVpZ2h0PSIzNDEuMzM3Ii8+DQo8cmVjdCB5PSI4NS4zMzEiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzLjc3NSIvPg0KPHJlY3QgeT0iMzEyLjg4MiIgc3R5bGU9ImZpbGw6I0ZGREE0NDsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzLjc3NSIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=",
			"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHJlY3QgeT0iODUuMzMzIiBzdHlsZT0iZmlsbDojRjBGMEYwOyIgd2lkdGg9IjUxMiIgaGVpZ2h0PSIzNDEuMzM3Ii8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojRDgwMDI3OyIgcG9pbnRzPSIyODgsODUuMzMgMjI0LDg1LjMzIDIyNCwyMjMuOTk2IDAsMjIzLjk5NiAwLDI4Ny45OTYgMjI0LDI4Ny45OTYgMjI0LDQyNi42NjIgMjg4LDQyNi42NjIgDQoJMjg4LDI4Ny45OTYgNTEyLDI4Ny45OTYgNTEyLDIyMy45OTYgMjg4LDIyMy45OTYgIi8+DQo8Zz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMDA1MkI0OyIgcG9pbnRzPSIzOTMuNzg1LDMxNS4zNTggNTEyLDM4MS4wMzQgNTEyLDMxNS4zNTggCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiMwMDUyQjQ7IiBwb2ludHM9IjMxMS42NTIsMzE1LjM1OCA1MTIsNDI2LjY2MiA1MTIsMzk1LjE4OCAzNjguMzA3LDMxNS4zNTggCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiMwMDUyQjQ7IiBwb2ludHM9IjQ1OC42MzQsNDI2LjY2MiAzMTEuNjUyLDM0NC45OTggMzExLjY1Miw0MjYuNjYyIAkiLz4NCjwvZz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGMEYwRjA7IiBwb2ludHM9IjMxMS42NTIsMzE1LjM1OCA1MTIsNDI2LjY2MiA1MTIsMzk1LjE4OCAzNjguMzA3LDMxNS4zNTggIi8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojRDgwMDI3OyIgcG9pbnRzPSIzMTEuNjUyLDMxNS4zNTggNTEyLDQyNi42NjIgNTEyLDM5NS4xODggMzY4LjMwNywzMTUuMzU4ICIvPg0KPGc+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzAwNTJCNDsiIHBvaW50cz0iOTAuMzQxLDMxNS4zNTYgMCwzNjUuNTQ2IDAsMzE1LjM1NiAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzAwNTJCNDsiIHBvaW50cz0iMjAwLjM0OCwzMjkuNTEgMjAwLjM0OCw0MjYuNjYxIDI1LjQ5MSw0MjYuNjYxIAkiLz4NCjwvZz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBwb2ludHM9IjE0My42OTMsMzE1LjM1OCAwLDM5NS4xODggMCw0MjYuNjYyIDAsNDI2LjY2MiAyMDAuMzQ4LDMxNS4zNTggIi8+DQo8Zz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMDA1MkI0OyIgcG9pbnRzPSIxMTguMjE1LDE5Ni42MzQgMCwxMzAuOTU4IDAsMTk2LjYzNCAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzAwNTJCNDsiIHBvaW50cz0iMjAwLjM0OCwxOTYuNjM0IDAsODUuMzMgMCwxMTYuODA0IDE0My42OTMsMTk2LjYzNCAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzAwNTJCNDsiIHBvaW50cz0iNTMuMzY2LDg1LjMzIDIwMC4zNDgsMTY2Ljk5NCAyMDAuMzQ4LDg1LjMzIAkiLz4NCjwvZz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGMEYwRjA7IiBwb2ludHM9IjIwMC4zNDgsMTk2LjYzNCAwLDg1LjMzIDAsMTE2LjgwNCAxNDMuNjkzLDE5Ni42MzQgIi8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojRDgwMDI3OyIgcG9pbnRzPSIyMDAuMzQ4LDE5Ni42MzQgMCw4NS4zMyAwLDExNi44MDQgMTQzLjY5MywxOTYuNjM0ICIvPg0KPGc+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzAwNTJCNDsiIHBvaW50cz0iNDIxLjY1OSwxOTYuNjM2IDUxMiwxNDYuNDQ2IDUxMiwxOTYuNjM2IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojMDA1MkI0OyIgcG9pbnRzPSIzMTEuNjUyLDE4Mi40ODIgMzExLjY1Miw4NS4zMzEgNDg2LjUwOSw4NS4zMzEgCSIvPg0KPC9nPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIHBvaW50cz0iMzY4LjMwNywxOTYuNjM0IDUxMiwxMTYuODA0IDUxMiw4NS4zMyA1MTIsODUuMzMgMzExLjY1MiwxOTYuNjM0ICIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=",
			"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHJlY3QgeT0iODUuMzMxIiBzdHlsZT0iZmlsbDojRkZEQTQ0OyIgd2lkdGg9IjUxMiIgaGVpZ2h0PSIzNDEuMzM3Ii8+DQo8Zz4NCgk8cmVjdCB5PSI4NS4zMzEiIHN0eWxlPSJmaWxsOiNEODAwMjc7IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjExMy43NzUiLz4NCgk8cmVjdCB5PSIzMTIuODgyIiBzdHlsZT0iZmlsbDojRDgwMDI3OyIgd2lkdGg9IjUxMiIgaGVpZ2h0PSIxMTMuNzc1Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==",
			"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHJlY3QgeT0iODUuMzMxIiBzdHlsZT0iZmlsbDojRjBGMEYwOyIgd2lkdGg9IjUxMiIgaGVpZ2h0PSIzNDEuMzM3Ii8+DQo8cmVjdCB5PSI4NS4zMzEiIHN0eWxlPSJmaWxsOiMwMDUyQjQ7IiB3aWR0aD0iMTcwLjY2MyIgaGVpZ2h0PSIzNDEuMzM3Ii8+DQo8cmVjdCB4PSIzNDEuMzM3IiB5PSI4NS4zMzEiIHN0eWxlPSJmaWxsOiNEODAwMjc7IiB3aWR0aD0iMTcwLjY2MyIgaGVpZ2h0PSIzNDEuMzM3Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==",
			"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0YwRjBGMDsiIHBvaW50cz0iMzQxLjMzNCw4NS4zMyAxNzAuNjY2LDg1LjMzIDAsODUuMzMgMCw0MjYuNjYyIDE3MC42NjYsNDI2LjY2MiAzNDEuMzM0LDQyNi42NjIgDQoJNTEyLDQyNi42NjIgNTEyLDg1LjMzICIvPg0KPHJlY3QgeT0iODUuMzMzIiBzdHlsZT0iZmlsbDojNkRBNTQ0OyIgd2lkdGg9IjE3MC42NjMiIGhlaWdodD0iMzQxLjMzNyIvPg0KPHJlY3QgeD0iMzQxLjMzNyIgeT0iODUuMzMzIiBzdHlsZT0iZmlsbDojRDgwMDI3OyIgd2lkdGg9IjE3MC42NjMiIGhlaWdodD0iMzQxLjMzNyIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=",
			"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHJlY3QgeT0iODUuMzMxIiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgd2lkdGg9IjUxMiIgaGVpZ2h0PSIzNDEuMzM3Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRDgwMDI3OyIgZD0iTTMxOC4zMywyNTUuOTk0YzAsMTUuNTgzLTI3LjkwNiw1NC41MzktNjIuMzMsNTQuNTM5cy02Mi4zMy0zOC45NTctNjIuMzMtNTQuNTM5DQoJYzAtMzQuNDI0LDI3LjkwNi02Mi4zMyw2Mi4zMy02Mi4zM1MzMTguMzMsMjIxLjU3LDMxOC4zMywyNTUuOTk0eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzAwNTJCNDsiIGQ9Ik0zMTguMzMsMjU1Ljk5NGMwLDM0LjQyNC0yNy45MDYsNjIuMzMtNjIuMzMsNjIuMzNzLTYyLjMzLTI3LjkwNi02Mi4zMy02Mi4zMyIvPg0KPHJlY3QgeD0iMzI0LjIwNSIgeT0iMzAwLjU1IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC0xMTkuNjUwMSAzMjcuODIyNCkiIHdpZHRoPSIyMy4zNzQiIGhlaWdodD0iMTUuNTgyIi8+DQo8cmVjdCB4PSIyOTYuNjU3IiB5PSIzMjguMDg1IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC0xNDcuMTg4OSAzMTYuNDA4KSIgd2lkdGg9IjIzLjM3NCIgaGVpZ2h0PSIxNS41ODIiLz4NCjxyZWN0IHg9IjM1Ny4yNiIgeT0iMzMzLjU4NiIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAtMTMzLjMyNzcgMzYwLjg3MTkpIiB3aWR0aD0iMjMuMzc0IiBoZWlnaHQ9IjE1LjU4MiIvPg0KPHJlY3QgeD0iMzI5LjcxMiIgeT0iMzYxLjE0MyIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAtMTYwLjg4MjMgMzQ5LjQ2NCkiIHdpZHRoPSIyMy4zNzQiIGhlaWdodD0iMTUuNTgyIi8+DQo8cmVjdCB4PSIzNDAuNzMyIiB5PSIzMTcuMDY4IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC0xMjYuNDg4OSAzNDQuMzQ3MikiIHdpZHRoPSIyMy4zNzQiIGhlaWdodD0iMTUuNTgyIi8+DQo8cmVjdCB4PSIzMTMuMTg1IiB5PSIzNDQuNjE0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC0xNTQuMDM1NiAzMzIuOTM2KSIgd2lkdGg9IjIzLjM3NCIgaGVpZ2h0PSIxNS41ODIiLz4NCjxyZWN0IHg9IjMwNy40ODMiIHk9IjE2NS41NTUiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjcwNzEgLTAuNzA3MSAwLjcwNzEgLTAuNzA3MSA0NTUuNTM0NCA1MzUuMzgxNCkiIHdpZHRoPSI2Mi4zMyIgaGVpZ2h0PSIxNS41ODIiLz4NCjxyZWN0IHg9IjI5Ni42NTYiIHk9IjE2OC4zMTUiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjcwNzEgLTAuNzA3MSAwLjcwNzEgLTAuNzA3MSA0MDEuODQ4NiA1MTguNjYyNCkiIHdpZHRoPSIyMy4zNzQiIGhlaWdodD0iMTUuNTgxIi8+DQo8cmVjdCB4PSIzMjQuMTkzIiB5PSIxOTUuODY0IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC43MDcxIC0wLjcwNzEgMC43MDcxIC0wLjcwNzEgNDI5LjM3NjMgNTg1LjE2MzYpIiB3aWR0aD0iMjMuMzc0IiBoZWlnaHQ9IjE1LjU4MSIvPg0KPHJlY3QgeD0iMzI5LjY5MyIgeT0iMTM1LjI1NyIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzA3MSAtMC43MDcxIDAuNzA3MSAtMC43MDcxIDQ4MS42MjA2IDQ4NS41OTEpIiB3aWR0aD0iMjMuMzc0IiBoZWlnaHQ9IjE1LjU4MiIvPg0KPHJlY3QgeD0iMzU3LjI1MiIgeT0iMTYyLjgwNyIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzA3MSAtMC43MDcxIDAuNzA3MSAtMC43MDcxIDUwOS4xODYzIDU1Mi4xMDgpIiB3aWR0aD0iMjMuMzc0IiBoZWlnaHQ9IjE1LjU4MiIvPg0KPHJlY3QgeD0iMTI1LjY3MSIgeT0iMzQ3LjM2OSIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIDAuNzA3MSAtMC43MDcxIDAuNzA3MSAyOTcuMDcyMSAtNi44NzU4KSIgd2lkdGg9IjYyLjMzIiBoZWlnaHQ9IjE1LjU4MiIvPg0KPHJlY3QgeD0iMTc1LjQzNSIgeT0iMzQ0LjYyIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgMC43MDcxIC0wLjcwNzEgMC43MDcxIDMwMy45OTgzIC0yOS4wOTYyKSIgd2lkdGg9IjIzLjM3NCIgaGVpZ2h0PSIxNS41ODEiLz4NCjxyZWN0IHg9IjE0Ny44OTgiIHk9IjMxNy4wNzIiIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMjc2LjQ1NDcgLTE3LjY5MzQpIiB3aWR0aD0iMjMuMzc0IiBoZWlnaHQ9IjE1LjU4MiIvPg0KPHJlY3QgeD0iMTU4LjcyNCIgeT0iMzE0LjMyMiIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIDAuNzA3MSAtMC43MDcxIDAuNzA3MSAyODMuMzg2IC0zOS45MjY5KSIgd2lkdGg9IjYyLjMzIiBoZWlnaHQ9IjE1LjU4MiIvPg0KPHJlY3QgeD0iMTI1LjY3MiIgeT0iMTQ5LjAyMyIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNzA3MSAwLjcwNzEgLTAuNzA3MSAtMC43MDcxIDM3OC42MjEyIDE1Ni43OTg3KSIgd2lkdGg9IjYyLjMzIiBoZWlnaHQ9IjE1LjU4MiIvPg0KPHJlY3QgeD0iMTQyLjE4MiIgeT0iMTY1LjU2IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC43MDcxIDAuNzA3MSAtMC43MDcxIC0wLjcwNzEgNDE4LjQ5OTggMTczLjM1MzYpIiB3aWR0aD0iNjIuMzMiIGhlaWdodD0iMTUuNTgyIi8+DQo8cmVjdCB4PSIxNTguNzEyIiB5PSIxODIuMDg5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMC43MDcxIDAuNzA3MSAtMC43MDcxIC0wLjcwNzEgNDU4LjQwNDMgMTg5Ljg4MTIpIiB3aWR0aD0iNjIuMzMiIGhlaWdodD0iMTUuNTgxIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==",
			"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHJlY3QgeT0iODUuMzM3IiBzdHlsZT0iZmlsbDojRDgwMDI3OyIgd2lkdGg9IjUxMiIgaGVpZ2h0PSIzNDEuMzI2Ii8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojNkRBNTQ0OyIgcG9pbnRzPSIxOTYuNjQxLDg1LjMzNyAxOTYuNjQxLDI2MS41NjUgMTk2LjY0MSw0MjYuNjYzIDAsNDI2LjY2MyAwLDg1LjMzNyAiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGREE0NDsiIGN4PSIxOTYuNjQxIiBjeT0iMjU2IiByPSI2NCIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik0xNjAuNjM4LDIyNHY0MC4wMDFjMCwxOS44ODIsMTYuMTE4LDM2LDM2LDM2czM2LTE2LjExOCwzNi0zNlYyMjRIMTYwLjYzOHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMEYwRjA7IiBkPSJNMTk2LjYzOCwyNzZjLTYuNjE3LDAtMTItNS4zODMtMTItMTJ2LTE2aDI0LjAwMXYxNkMyMDguNjM4LDI3MC42MTYsMjAzLjI1NCwyNzYsMTk2LjYzOCwyNzZ6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==",
			"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHJlY3QgeT0iODUuMzMxIiBzdHlsZT0iZmlsbDojRDgwMDI3OyIgd2lkdGg9IjUxMiIgaGVpZ2h0PSIzNDEuMzM3Ii8+DQo8Zz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRkZEQTQ0OyIgcG9pbnRzPSIxNzguOTIzLDE4OS41NjcgMTkzLjU3OSwyMzQuNjc0IDI0MS4wMDgsMjM0LjY3NCAyMDIuNjM3LDI2Mi41NTIgMjE3LjI5NCwzMDcuNjYxIA0KCQkxNzguOTIzLDI3OS43ODIgMTQwLjU1MiwzMDcuNjYxIDE1NS4yMDgsMjYyLjU1MiAxMTYuODM3LDIzNC42NzQgMTY0LjI2NiwyMzQuNjc0IAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRkZEQTQ0OyIgcG9pbnRzPSIyNzEuMywzMzkuNTkzIDI1Ni45MSwzMjkuMTM4IDI0Mi41MjIsMzM5LjU5MiAyNDguMDE3LDMyMi42NzggMjMzLjYyOCwzMTIuMjIzIA0KCQkyNTEuNDE0LDMxMi4yMjMgMjU2LjkxLDI5NS4zMDcgMjYyLjQwOCwzMTIuMjIzIDI4MC4xOTMsMzEyLjIyMyAyNjUuODA0LDMyMi42NzcgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkRBNDQ7IiBwb2ludHM9IjMwOC44MzcsMjg3LjkyNyAyOTEuMDUyLDI4Ny45MjcgMjg1LjU1NiwzMDQuODQxIDI4MC4wNiwyODcuOTI4IDI2Mi4yNzMsMjg3LjkyNyANCgkJMjc2LjY2NCwyNzcuNDcyIDI3MS4xNjYsMjYwLjU1NyAyODUuNTU2LDI3MS4wMSAyOTkuOTQ1LDI2MC41NTcgMjk0LjQ0OSwyNzcuNDcyIAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRkZEQTQ0OyIgcG9pbnRzPSIzMDguODM3LDIyNC4wNjMgMjk0LjQ0OSwyMzQuNTE4IDI5OS45NDQsMjUxLjQzMiAyODUuNTU2LDI0MC45NzkgMjcxLjE2NiwyNTEuNDM0IA0KCQkyNzYuNjY0LDIzNC41MTcgMjYyLjI3MywyMjQuMDY1IDI4MC4wNjEsMjI0LjA2MyAyODUuNTU2LDIwNy4xNDcgMjkxLjA1MiwyMjQuMDYzIAkiLz4NCgk8cG9seWdvbiBzdHlsZT0iZmlsbDojRkZEQTQ0OyIgcG9pbnRzPSIyNzEuMywxNzIuMzk3IDI2NS44MDUsMTg5LjMxMyAyODAuMTkzLDE5OS43NjYgMjYyLjQwOCwxOTkuNzY3IDI1Ni45MSwyMTYuNjg0IA0KCQkyNTEuNDE0LDE5OS43NjYgMjMzLjYyOSwxOTkuNzY4IDI0OC4wMTgsMTg5LjMxMiAyNDIuNTIyLDE3Mi4zOTYgMjU2LjkxLDE4Mi44NTEgCSIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
		
];
/*Selects the correct image from the array based on the select box*/
$( document ).ready(function() {
	$('#lang-select').change(function(){
		$('#flagpic')[0].src = pictureList[this.value];
	});
});
