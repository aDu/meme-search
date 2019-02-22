const request = require('request')

module.exports = (keyword, ops, cb) => {
    if (!cb) {
        cb = ops
        ops = {}
    }

    ops.subreddit = ops.subreddit || 'memes'
    
    let uri = encodeURI('https://www.reddit.com/r/memes/search.json?q='+(keyword)+'&restrict_sr=1&sort=top')
    
    request({
        method: 'GET',
        uri
    }, (err, response, body) => {
        if (err) return cb(err)
        if (response.status >= 400) return cb(new Error('Status code: ' + response.statusCode))

        let data = JSON.parse(body)

        let posts = data.data.children
        let memes = []
        
        for (var post of posts) {
            if (post.data.post_hint != "image") continue // Ignore posts that aren't images
            memes.push({
                title: post.data.title,
                image_url: post.data.url
            })
        }
        
        cb(null, memes)
    }).on('error', cb)
}