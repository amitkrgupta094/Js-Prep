### e.preventDefault();

- use it top of your handler function as It would block default behaviour of the event.
- It is used to block default behaviour of an element.
- More here: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    


```
// Example 1: Do This
handleSubmit = (e) => {
        e.preventDefault();  
        this.setState({submitSpin: true});
        //... more code
        
 }
 
 // Example 2: Don't do this
handleSubmit = (e) => {
        this.setState({submitSpin: true});
        //... more code
        e.preventDefault();  
        
 }
 
```


### rel="noopener noreferrer" for links with target="_blank" set
- Reason? Security Vun: Tabnapping
- Read more about it: https://stackoverflow.com/questions/50709625/link-with-target-blank-and-rel-noopener-noreferrer-still-vulnerable 




### Add "Accept": "application/json" to your request headers for hard check from your server

```
Headers { "Content-Type": "application/json",  "Accept": "application/json" }
```


### If you're using modular Css (Sass/Less): - Extract inline css styles.


### Building React App?
- Extract setState calls to one
-  more setState call => more render cycles => performance impact


### By default your images would draggable
- if you don't want that : (1) You can disable using css (has glitch) (2) use draggable="false" attribute on your images.
- Read more about it here: https://stackoverflow.com/questions/12906789/preventing-an-image-from-being-draggable-or-selectable-without-using-js





