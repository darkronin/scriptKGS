# scriptKGS
scripts for ShinKGS

a generic project-folder to collect and store in one place bookmarklets that aim to enrich the ShinKGS experience. 

Some examples:
 - color-coded chat, with censoring and anti-flood system: `ccchat++.js`
 - stone sounds `stones.js`
 - auto-decline undo requests `noundo.js`
 - keep-alive (prevent automatic disconnection for being idle) `keepalive.js`
 
List of all the scripts (type C = chatroom screen; B = board/goban screen):

  Script           | Short description                                        | Type
  ---------------- | ---------------------------------------------------------|------
  background color | Get your eyes some rest and kill the white background.   | C
  **skin from URL**    | kill the white background but use an image instead       | C
  rotate board     | Rotate the board 180 degrees - can be useful to match the relay board with the streaming video, if the relayer is sitting opposite the camera. | B
  3D board         | Apply a perspective-3D effect to the board | B
  coordinates      | removes coordinates from the board         | B
  silly rotate     | Rotate the board clockwise like a clock    | B🕑
  censor           | custom ignore function that paints the unwanted users' messages black (it has the benefit of making you aware that something is being said while sparing you from seeing what it is; in any case using a "select all" will display the hidden text)  | C🕑
  **color-coded chat** | Assign a (random) colour to each and every user in your current chatroom and color their messages accordingly | C🕑
  ccchat+          | optimized version of color-coded chat including also the censor function (parameter: censorList) | C🕑
  **ccchat++**         | optimized version of color-coded chat+ including also the anti-flood function (parameter: MAXFLOOD)  | C🕑 
  **stones**           | play stone sounds | B🕑
  unresign         | make the Resign button run away from the mouse during scoring     | B🕑
  **noundo**           | automatically decline any and all undo requests from the opponent | B🕑
  noundo-strict    | like noundo, but removes your own undo button as well             | B🕑
  **keep-alive**       | prevents disconnection fom inactivity                          | C🕑
  
All scripts are local and affect one's instance/machine only.

Types:
 - B: board mode (when the goban is displayed)
 - C: chat mode (when the chat window is displayed)
 - 🕑: looping scripts
 
Note: The scripts broadly are divided in chat screen scripts, or board screen scripts. When a script is looping, it is recommended to run the version of the scripts that encompasses several functions in one in the same category, if available, to minimize unwanted effects and CPU load. For example, instead of running the censoring script and ccchat separately, run ccchat+ that includes both scripts. Similarly, for the board scripts: "auto-decline" (noundo) and "stone sounds" are better together. That is why several combined versions of the scripts are provided.

### Planned
  - [X] ~~skins~~
  - [ ] spinwheel board
  - [ ] ~~stone clicks~~ + bioyomi sounds
  - [x] ~~custom ignore function (blackout or hide messages from users in the censor list)~~
  - [ ] "popup hell" triggered on undo request (see wiki > hoesay suggestion)
  - [ ] cumulative amount of undos for a given player
  - [ ] notification when (a) specified user(s) come online or go out of sleep mode/"tag status change"
  - [X] ~~anti-flood feature (parametric - max 3 lines per user?)~~

## HOW TO USE
For the definition of a bookmarklet, see the [Wikipedia](https://en.wikipedia.org/wiki/Bookmarklet) or [Mozilla](https://support.mozilla.org/en-US/kb/bookmarklets-perform-common-web-page-tasks) page.

In short: 

 * create a new bookmark
 * in the URL, copy/paste the code of the script
 * when ShinKGS is running, click on the bookmark to activate the functionality

Or

 * paste the code in the browser console (developer tools/F12), and hit enter to execute the line, to try them out
