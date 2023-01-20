import requests
from bs4 import BeautifulSoup as bs

url = "https://photos.app.goo.gl/VkooBqFk8xmrDEDw5"

response = requests.get(url)
soup = bs(response.content, "html.parser")

img_tags = soup.find_all("img")

img_urls = [img["src"] for img in img_tags]

for url in img_urls:
    print(url)