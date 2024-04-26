[Google Doc](https://docs.google.com/document/d/1erk8yYrzm1-12CTnzG-JM3lbXhfWVyaMYLGzs3M-VPo/edit#heading=h.pu6618dbp3b0)

### experience a node package

1. npx http-server

### init node package manager

1. npm init

### Add a dependency

1. npm install http-server

### vite

npm create vite@latest vite-front-end

```
git fetch
git switch dev-app
git pull
git switch [your branch]
git merge dev-app

I think that should bring you up to date
(dev-app is where we store the app as it stands at the end of each exercise)
```

#### Emmet

! -> add html 5
html.5 -> add html 5

#### #name -> is the Id of the tag

#### .name -> is the class of the tag

#### html form

form submit will send the data to the form action url

```
<form action="/processor/index.html" method="POST">
</form>
```

if there is no action attribute it will submitted to the same url
if there is not method attribute, default is GET
by default form focus on the submit button, so when you press enter while entering the data will submit the form

label is attached to a form field by using the "id" attribute of the field

```
<form>
<label for="first-name">Enter your first name:</label>
<input type="text" name="firstname" id="first-name"/>
</form>
```

```
<input type="checkbox" name="topping" value="peppers" id="combined-topping-peppers">
<input type="checkbox" name="topping" value="sausage" id="combined-topping-sausage">
<input type="checkbox" name="topping" value="pineapple" id="combined-topping-pineapple">
```

if you select multiple checkbox multiple items will be sent
topping=peppers&topping=sausage&topping=pineapple


Yes, every component has to return a single root element. BUT that root element can be either 

<React.Fragment>
.
.
.
</React.Fragment>

or

<>
.
.
.
</>

Neither of which generates any HTML. They both are "elements" so that JSX works, and then render nothing to the browser.

```
Cursor CSS:

  cursor:
    url(../assets/cursor_final.png) 4 12,
    auto;
Assumes you have an image file in ../assets/cursor_final.png

As long as you put the appropriate image file in a location you can reach, you can use that image as a cursor
```

```
MobX and Zustand and Apollo as external libraries

useReducer and useContext if you want to use native-to-React state management techniques
As your app gets bigger and/or more complex, the likelihood that you need a state management system increases.
```

### links

1. [css-grid-guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
2. [grid-generator](https://cssgrid-generator.netlify.app/)
3. [flexbox-game](https://flexboxfroggy.com/)
4. [css-selectors](https://flukeout.github.io/)
5. [css-specificity](https://specifishity.com/)
6. [css-grid-game](https://cssgridgarden.com/)
7. [color-pallet](https://coolors.co/)
8. [css-nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
9. [flex-vs-grid](https://blog.logrocket.com/css-flexbox-vs-css-grid/)
10. [React-vs-HTML](https://www.geeksforgeeks.org/attributes-that-work-differently-between-react-and-html/)
11. [lodash-library](https://lodash.com/docs/4.17.15#orderBy)
12. [robo-images](https://robohash.org/)
13. [component-life-cycle-deep-dive](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/)
14. [component-life-cycle](https://julesblom.com/writing/react-hook-component-timeline)
15. [redux](https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-application-data-flow)
