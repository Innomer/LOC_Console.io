
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

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
def pan_ocr(filepath):
    img=cv2.imread(filepath)
    img=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    text = pytesseract.image_to_string(img)

    # Initializing data variable
    name = None
    ayear = None
    yearline = []
    nameline = []
    text1 = []
    text2 = []


    # Searching for Year of Birth
    lines = text
    print (lines)
    for wordlist in lines.split('\n'):
        xx = wordlist.split()
        if [w for w in xx if re.search('(Year|Birth|irth|YoB|YOB:|DOB:|DOB)$', w)]:
            yearline = wordlist
            break
        else:
            text1.append(wordlist)
            # print(text1)
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

    name_new = text1[len(text1)-5]  # Extracting name from the image

    # Making tuples of data
    data = {}
    data['Name'] = name_new
    data['Birth year'] = ayear


    # Writing data into JSON
    fName = 'result/' + os.path.basename('output_path').split('.')[0] + '.json'
    with open(fName, 'w') as fp:
        json.dump(data, fp)


    # Reading data back JSON
    with open(fName, 'r') as f:
        ndata = json.load(f)

    pattern = "\d{2}[/-]\d{2}[/-]\d{4}"
    ndata['Birth year'] = re.findall(pattern, text)

    regex = "[A-Z]{5}[0-9]{4}[A-Z]{1}";
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

    import requests

    url = "https://pan-card-verification1.p.rapidapi.com/v3/tasks/sync/verify_with_source/ind_pan"

    payload = {
        "task_id": "74f4c926-250c-43ca-9c53-453e87ceacd1",
        "group_id": "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
        "data": {"id_number": ndata['Pan'][0]}
    }
    headers = {
        "content-type": "application/json",
        "X-RapidAPI-Key": "9abe79842amsha1a3fda35b3fa3dp1f6e9ajsn89971239e58d",
        "X-RapidAPI-Host": "pan-card-verification1.p.rapidapi.com"
    }

    response = requests.request("POST", url, json=payload, headers=headers)

    print(response.text)
