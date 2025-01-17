{
    "name": "StreamingCommunity",
    "version": "1.0.0",
    "author": {
        "name": "sobet",
        "website": "https://google.com"
    },
    "iconURL": "https://raw.githubusercontent.com/bshar1865/MFS/refs/heads/main/assets/animeworld.png",
    "stream": "MP4",
    "language": "IT",
    "extractor": "normal",
    "module": [
        {
            "search": {
                "url": "https://cb01.com.im/index.php?do=search&subaction=search",
                "parameter": "story",
                "documentSelector": ".col-sm-8 .short",
                "title": ".story-cover a",
                "image": {
                    "url": ".story-cover img",
                    "attribute": "src"
                },
                "href": ".story-heading a"
            },
            "featured": {
                "url": "https://streamingcommunity.ooo",
                "documentSelector": ".mlnew",
                "title": ".mlnh-2 a",
                "image": {
                    "url": "mlnh-thumb img",
                    "attribute": "src"
                },
                "href": ""
            },
            "details": {
                "baseURL": "https://cb01.com.im",
                "aliases": {
                    "selector": "span.tv_info_tle",
                    "attribute": ""
                },
                "synopsis": "div.tv_info_right p",
                "airdate": "div.tv_info_list li:contains('Anno:') + li",
                "stars": "div#raitings .rating span"
            },
            "episodes": {
                "selector": "ul li a[data-link]",
                "order": "ordered",
                "pattern": ""
            }
        }
    ]
}