# scriptKGS
scripts for ShinKGS

a generic project-folder to collect and store in one place bookmarklets that aim to enrich the ShinKGS experience. 


List of all the scripts:

  Script           | Short description
  ---------------- | ---------------------------------------------------------
  background color | Get your eyes some rest and kill the white background.
  skin from URL    | kill the white background but use an image instead
  rotate board     | Rotate the board 180 degrees - can be useful to match the relay board with the streaming video, if the relayer is sitting opposite the camera.
  3D board         | Apply a perspective-3D effect to the board
  silly rotate     | Rotate the board clockwise like a clock
  censor           | custom ignore function 
  color-coded chat | Assign a (random) colour to each and every user in your current chatroom and color their messages accordingly 
  ccchat+          | optimized version of color-coded chat including also the censor function
  stones           | play stone sounds
  unresign         | make the Resign button run away from the mouse during scoring
  noundo           | automatically decline any and all undo requests from the opponent
  noundo-strict    | like noundo, but removes your own undo button as well
  
### Planned
  - [X] ~~skins~~
  - [ ] spinwheel board
  - [ ] ~~stone clicks~~ + bioyomi sounds
  - [x] custom ignore function (blackout or hide messages from users in the censor list)
  - [ ] "popup hell" triggered on undo request (see wiki > hoesay suggestion)
  - [ ] cumulative amount of undos for a given player
  - [ ] notification when (a) specified user(s) come online or go out of sleep mode/"tag status change"
  - [ ] anti-flood feature (parametric - max 3 lines per user?)

## HOW TO USE
For the definition of a bookmarklet, see [Wikipedia](https://support.mozilla.org/en-US/kb/bookmarklets-perform-common-web-page-tasks) or [Mozilla support](https://support.mozilla.org/en-US/kb/bookmarklets-perform-common-web-page-tasks)

In short: 

 * create a new bookmark
 * in the URL, copy/paste the code of the script
 * when ShinKGS is running, click on the bookmark to activate the functionality

Or

 * paste the code in the browser console (developer tools/F12), and hit enter to execute the line, to try them out
