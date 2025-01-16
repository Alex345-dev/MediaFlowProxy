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
                "url": "https://guardaserie.academy/search",
                "parameter": "story",
                "documentSelector": "main div.browse div.sliders a.slider-tile-mobile",
                "title": "img[alt]",
                "image": {
                    "url": "img",
                    "attribute": "src"
                },
                "href": "a"
            },
            "featured": {
                "url": "https://streamingcommunity.ooo",
                "documentSelector": ".mlnew",
                "title": ".mlnh-thumb a",
                "image": {
                    "url": "mlnh-thumb img",
                    "attribute": "src"
                },
                "href": ""
            },
            "details": {
                "baseURL": "https://animeworld.so",
                "aliases": {
                    "selector": "div.widget-title h1",
                    "attribute": "data-jtitle"
                },
                "synopsis": "div.info div.desc",
                "airdate": "div.row dl.meta dt:contains(Data di Uscita) + dd",
                "stars": "dd.rating span"
            },
            "episodes": {
                "selector": "main div a.play",
                "order": "ordered",
                "pattern": ""
            }
        }
    ]
}