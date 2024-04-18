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

### links

1. https://css-tricks.com/snippets/css/complete-guide-grid/
2. https://cssgrid-generator.netlify.app/
3. https://flexboxfroggy.com/
4. https://flukeout.github.io/
5. https://specifishity.com/
6. https://cssgridgarden.com/
7. https://coolors.co/
8. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting