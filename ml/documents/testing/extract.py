
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
# from .captchaSolver import solveCap


def aadhar_ocr(filepath):
    pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
    text = pytesseract.image_to_string(Image.open(filepath))

    # Initializing data variable
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

    # Searching for Year of Birth
    lines = text
    # print (lines)
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

    # Searching for Gender
    try:
        for wordlist in lines.split('\n'):
            xx = wordlist.split()
            if [w for w in xx if re.search(genderStr, w)]:
                genline = wordlist
                break
    #        print("wordlist:", xx)  # To print the word list
    #    print(genline)  # To print the genlines
        if 'Female' in genline or 'FEMALE' in genline:
            gender = "Female"
        elif 'Male' in genline or 'MALE' in genline:
            gender = "Male"

        text2 = text.split(genline, 1)[1]
    except Exception:
        pass

    name_new = text1[len(text1)-2]  # Extracting name from the image

    # Making tuples of data
    data = {}
    data['Name'] = name_new
    data['Gender'] = gender
    data['Birth year'] = ayear

    # Writing data into JSON
    # fName = 'result/' + os.path.basename('output_path').split('.')[0] + '.json'
    # with open(fName, 'w') as fp:
    #     json.dump(data, fp)

    # # Reading data back JSON
    # with open(fName, 'r') as f:
    #     ndata = json.load(f)
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

    ndata["Succeeded"]=False
    for i in ndata['Uid']:
        i=str.replace(i," ","")
        print(i)
        import http.client

        conn = http.client.HTTPSConnection("verifyaadhaarnumber.p.rapidapi.com")

        payload = "txn_id=17c6fa41-778f-49c1-a80a-cfaf7fae2fb8&consent=Y&uidnumber="+i+"&clientid=222&method=uidvalidatev2"

        headers = {
            'content-type': "application/x-www-form-urlencoded",
            'X-RapidAPI-Key': "9abe79842amsha1a3fda35b3fa3dp1f6e9ajsn89971239e58d",
            'X-RapidAPI-Host': "verifyaadhaarnumber.p.rapidapi.com"
            }

        conn.request("POST", "/Uidverifywebsvcv1/VerifyAadhaarNumber", payload, headers)

        res = conn.getresponse()
        data = res.read()
        data=json.loads(data.decode("utf-8"))
        if 'Succeeded' in data.keys():
            ndata["Succeeded"]=True
    if ((not ndata['Name'] or not ndata['Gender'] or not ndata['Birth year'] or not ndata['Uid']) or (ndata["Succeeded"]==False)):
        return ({'Message': 'Please enter the correct Document', 'Status': 'Fail'})
    else:
        return ({'AData': {'Name': ndata['Name'], 'Gender': ndata['Gender'], 'Birth year': ndata['Birth year'], 'Uid': ndata['Uid']}, 'Status': 'Success'})

    # for i in ndata['Uid']:
    #     i = re.sub(r"\s+", '', i)
    #     url = "https://aadhaar-number-verification.p.rapidapi.com/Uidverifywebsvcv1/Getcaptcha"

    #     payload = "clientid=111&txn_id=985656&method=getcaptcha"
    #     headers = {
    # 	"content-type": "application/x-www-form-urlencoded",
    # 	"X-RapidAPI-Key": "b9c6180454mshec87da93d02c58bp147799jsn0aad6c752bfa",
    # 	"X-RapidAPI-Host": "aadhaar-number-verification.p.rapidapi.com"
    #     }

    #     response = requests.request("POST", url, data=payload, headers=headers)
    #     # try:
    #     encoded_data = json.loads(response.text)
    #     tknId=encoded_data["Succeeded"]["Captcha_Details"]['captchaTxnId']
    #     encoded_data=encoded_data["Succeeded"]["Captcha_Details"]["captchaBase64String"]
    #     decoded_data = base64.b64decode((encoded_data))
    #     img_file = open('image.jpeg', 'wb')
    #     img_file.write(decoded_data)
    #     img_file.close()
    #     captcha=solveCap('image.jpeg')
    #     print(captcha)
    #     print(tknId)
    #     url = "https://aadhaar-number-verification.p.rapidapi.com/Uidverifywebsvcv1/Uidverify"
    #     headers = {
    # 	"content-type": "application/x-www-form-urlencoded",
    # 	"X-RapidAPI-Key": "b9c6180454mshec87da93d02c58bp147799jsn0aad6c752bfa",
    # 	"X-RapidAPI-Host": "aadhaar-number-verification.p.rapidapi.com"
    #     }
    #     payload = "captchaValue={captcha}&captchaTxnId={tknId}&method=uidvalidate&clientid=111&txn_id=4545533&consent=Y&uidnumber={i}"
    #     response = requests.request("POST", url, data=payload, headers=headers)
    #     print(response.text)
    #     # except:
    #         # print("err")
aadhar_ocr(r"C:\MY FILES\Hacki\LOC_Console.io\ml\documents\testing\validation\aadhar\kreena.jpg")