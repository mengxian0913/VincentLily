import requests
from bs4 import BeautifulSoup as bs

url = "https://mengxian0913.github.io/VincentLily/"

response = requests.get(url)
soup = bs(response.content, "html.parser")
img_tags = soup.find_all("img")
img_urls = [img["src"] for img in img_tags]

import json
img_data = json.dumps(img_urls)
