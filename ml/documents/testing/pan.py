
# Import packages
import base64
import requests
import dateutil.parser as dparser
import csv
import re
import pytesseract
import json
import os.path
import os
from PIL import Image
import cv2
import requests


pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'


def pan_ocr(filepath):
    img = cv2.imread(filepath)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    text = pytesseract.image_to_string(img)

    name = None
    ayear = None
    yearline = []
    nameline = []
    text1 = []
    text2 = []

    lines = text
    print(lines)
    for wordlist in lines.split('\n'):
        xx = wordlist.split()
        if [w for w in xx if re.search('(Year|Birth|irth|YoB|YOB:|DOB:|DOB)$', w)]:
            yearline = wordlist
            break
        else:
            text1.append(wordlist)
    try:
        text2 = text.split(yearline, 1)[1]
    except Exception:
        pass

    try:
        yearline = re.split('Year|Birth|irth|YoB|YOB:|DOB:|DOB', yearline)[1:]
        yearline = ''.join(str(e) for e in yearline)
        if yearline:
            ayear = dparser.parse(yearline, fuzzy=True).year
    except Exception:
        pass

    name_new = text1[len(text1)-5]

    data = {}
    data['Name'] = name_new
    data['Birth year'] = ayear

    fName = 'result/' + os.path.basename('output_path').split('.')[0] + '.json'
    with open(fName, 'w') as fp:
        json.dump(data, fp)

    with open(fName, 'r') as f:
        ndata = json.load(f)

    pattern = "\d{2}[/-]\d{2}[/-]\d{4}"
    ndata['Birth year'] = re.findall(pattern, text)

    regex = "[A-Z]{5}[0-9]{4}[A-Z]{1}"
    ndata["Pan"] = re.findall(regex, text)

    print("\n-----------------------------\n")
    print(ndata['Name'])
    print("-------------------------------")
    print(ndata['Birth year'])
    print("-------------------------------")
    print(ndata['Pan'])
    print("-------------------------------")

    if (not ndata['Name'] or not ndata['Birth year'] or not ndata['Pan']):
        return ({'Message': 'Please enter a clear Document', 'Status': 'Fail'})
    else:
        return ({'PData': {'Name': ndata['Name'], 'Birth year': ndata['Birth year'], 'Uid': ndata['uid']}, 'Status': 'Success'})
    
    # Removed API Requests
