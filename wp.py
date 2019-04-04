import scrapy
from scrapy.crawler import CrawlerProcess
import pandas as pd

class WPSpider(scrapy.Spider):
    name = 'WP'
    start_urls = [
        'https://woolandprince.com/collections/all'
    ]
    
    def parse(self, response):
        for div in response.xpath('//section[2]/div'):
            yield {
                'type': div.xpath('div[2]/a/h3[1]/text()').extract_first(),
                #//*[@id="collection-wrapper"]/section[2]/div[2]/div[2]/a/h3[1]
                'color': div.xpath('div[2]/a/h3[2]/text()').extract_first(),
                #//*[@id="collection-wrapper"]/section[2]/div[2]/div[2]/a/h3[2]
                'price': div.xpath('div[3]/text()').extract_first(),
                #//*[@id="collection-wrapper"]/section[2]/div[3]/div[3]
            }
            //*[@id="collection-wrapper"]/section[2]/div[2]/div[3]
            
process = CrawlerProcess({
    'FEED_FORMAT':'json',
    'FEED_URI': 'data.json',
    'LOG_ENABLED': False,
    'ROBOTSTXT_OBEY': True,
    'USER_AGENT': 'ThinkfulDataScienceBootcampCrawler (thinkful.com)',
    'AUTOTHROTTLE_ENABLED': True,
    'HTTPCACHE_ENABLED': True
})

process.crawl(WPSpider)
process.start()
print('worked?')

df = pd.read_json('data.json', orient='records')
df