## Project Name & Pitch

#### Example:

StickyStan ([Frontend located here](https://stickystan.herokuapp.com))

Stan-notes-API ([Backend located here](https://stan-notes-api.herokuapp.com/notes))

An application used to filter data form Twitter based on user preference, built with React, Redux, JavaScript, and CSS.

## Project Status
This project is in continued development. Project meets requirements, but much more can be done to bolster this project:
- Authentication for user accounts
- Timestamp notes
- Minor edge cases
- Make mobile frendly

## Project Screen Shots

<img src="https://github.com/stantheblan/notes-frontend/blob/bef69cd3fcc19167888a55ff410b994a7bb49ed7/src/media/photoBoard.jpg?raw=true" alt="Empty board" width='800px'/>

<img src="https://github.com/stantheblan/notes-frontend/blob/bef69cd3fcc19167888a55ff410b994a7bb49ed7/src/media/photoNote.jpg?raw=true" alt="New Note" width='800px'/>

<img src="https://github.com/stantheblan/notes-frontend/blob/bef69cd3fcc19167888a55ff410b994a7bb49ed7/src/media/photoEdit.jpg?raw=true" alt="Edit Note" width='800px'/>

<img src="https://github.com/stantheblan/notes-frontend/blob/bef69cd3fcc19167888a55ff410b994a7bb49ed7/src/media/photoEdited.jpg?raw=true" alt="Edited Note" width='800px'/>


## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/notes/`  

## Reflection

  - What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
  - What did you set out to build?
  - Why was this project challenging and therefore a really good learning experience?
  - What were some unexpected obstacles?
  - What tools did you use to implement this project?
      - This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.  

This was a 1 week long project built during my third module at PerScholas' Software Development course. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

Originally I wanted to build an application that allowed users to post sticky notes onto a digital bulletin board. I started this process by using the `create-react-app` boilerplate, then adding `react-draggable` and `useState/useEffect`.  

One of the main challenges I ran into was keeping the sticky note's location after page refresh. This lead me to spend a day working out how to store the (X,Y) data in the object I have in MongoDB already, so on page refresh the sticky notes would not default to (0,0). 

At the end of the day, the technologies implemented in this project are React, React-Router-Dom, MongoDB, HerokuApps, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time toward the functionality of the project. In the next iteration I plan on integrating authentication, so users can have their own accounts and stickys.