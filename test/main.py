from lxml import html
import requests
from lxml import etree
from io import StringIO, BytesIO

page = requests.get('https://www.paypal.com/de/signin')
tree = html.fromstring(page.content)


form = tree.find('.//form')

print( "Action:", form.action)
print ("Token:", form.find('.//input[@id="email"]').value)
