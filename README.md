# proper-swap
jQuery plug-in to swap and animate HTML elements visually and in the DOM.

### Usage

```javascript
$('#source').click(function(){ $(this).swap($('#target')) });
```

You can also specify animation duration and a callback function to be executed when the animation is complete.

```javascript
$('#source').click(function() { $(this).swap($('#target'), {duration: 800}, function() { alert('Done!'); }) });
```


### Requirements
* jQuery
