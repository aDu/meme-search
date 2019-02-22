# meme-search

`npm i -S meme-search`

Using a search term/keyword, gives you an array of random memes.

Currently grabs them from /r/memes subreddit (using the top results). No API key needed.

# Usage

```
var memeSearch = require('meme-search')

memeSearch('chicken', (err, res) => {
    console.log(res) // Array of meme objects, each meme object of the format { title, image_url }
})
```


