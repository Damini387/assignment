### technical details
> Built application on react-app.
> Used SCSS and CSS3 for styling elements.
> Used axios npm to fetch the data. (ref: https://www.npmjs.com/package/axios)

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Demo of the website: https://www.loom.com/share/8aa2f077aba3462ab1b71729491257f2

### Summary - to start application
> yarn install
> yarn build
> yarn start 

Note: To run on IE11/Edge, please follow below steps: 
> npm i -g serve
> serve -s build
application will run at http://localhost:5000

### features implemented
> Implemented responsive layout with 4-tiles on desktop, 2-tiles on mobile and tablet(portrait), 3-tiles on tablet(landscape).
> Loaders are implemented when response is slow while fetching the products data.
> Transition is implemented on hover of product image on desktop.
> Full description is shown on hover of description on desktop.
> Header with GENERAL and OTHERS buttons is sticked to the top of the page.

### TODO: features to be implemented
> Full description can be shown on tablet and mobile too on click on it.
> Home page can be implemented and routes can be added for each GENERAL and OTHERS category page as /general and /others respectively.
> Since this is a react application, drag and drop can be done with installing any package and using it.
> Need to use variables for colors and other necessary css properties to avoid redundancy.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
