# Functions: Game Start Screen

We can use functions to bundle up solutions to prolems that we have solved. For example, if we wanted to add 2 to a number we have stored in a variable we might have something like:

```js
var num = 10
num += 2
```

We can create a function so that anytime it is called it will add 2 to the variable `num`:

```js
var num = 10
// Calling the function
add2()
add2()
add2()

// Function definition
function add2(){
	num += 2
}
```

## Function Practice
A simple game with a start, play, and game over screen has been created. Create `startGame()` and `gameOver` functions to bundle up the code that has already been written into functions ***outside*** the draw loop.