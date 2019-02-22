# meme-search
Given a keyword, returns random array of memes.

`npm i -S meme-search`

Currently grabs them from /r/memes subreddit. No API key needed.

# Usage

```
var memeSearch = require('meme-search')

// args: keyword, callback
memeSearch('chicken', (err, res) => {
    console.log(res) // Array of meme objects, each meme object of the format { title, image_url }
})

// args: keyword, ops, callback
memeSearch(
    'chicken',
    {
        'subreddit': 'dankmemes',
        'sort': 'relevance'
    },
    (err, res) => {
    console.log(res) // Array of meme objects, each meme object of the format { title, image_url }
})
```




