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
from .captchaSolver import solveCap


def aadhar_ocr(filepath):
    pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
    text = pytesseract.image_to_string(Image.open(filepath))

    
    name = None
    gender = None
    ayear = None
    uid = None
    yearline = []
    genline = []
    nameline = []
    text1 = []
    text2 = []
    genderStr = '(Female|Male|emale|male|ale|FEMALE|MALE|EMALE)$'

    
    lines = text
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

    try:
        for wordlist in lines.split('\n'):
            xx = wordlist.split()
            if [w for w in xx if re.search(genderStr, w)]:
                genline = wordlist
                break
        if 'Female' in genline or 'FEMALE' in genline:
            gender = "Female"
        elif 'Male' in genline or 'MALE' in genline:
            gender = "Male"

        text2 = text.split(genline, 1)[1]
    except Exception:
        pass

    name_new = text1[len(text1)-2] 

    data = {}
    data['Name'] = name_new
    data['Gender'] = gender
    data['Birth year'] = ayear

    ndata = dict()
    ndata['Name'] = name_new
    ndata['Gender'] = gender
    ndata['Birth year'] = ayear

    ndata['Uid'] = re.findall("\d\d\d\d \d\d\d\d \d\d\d\d", text)

    print("\n-----------------------------\n")
    print(ndata['Name'])
    print("-------------------------------")
    print(ndata['Gender'])
    print("-------------------------------")
    print(ndata['Birth year'])
    print("-------------------------------")
    print(ndata['Uid'])
    print("-------------------------------")

    ndata["Succeeded"]=True
    if ((not ndata['Name'] or not ndata['Gender'] or not ndata['Birth year'] or not ndata['Uid']) or (ndata["Succeeded"]==False)):
        return ({'Message': 'Please enter the correct Document', 'Status': 'Fail'})
    else:
        return ({'AData': {'Name': ndata['Name'], 'Gender': ndata['Gender'], 'Birth year': ndata['Birth year'], 'Uid': ndata['Uid']}, 'Status': 'Success'})
    # Removed API Requests