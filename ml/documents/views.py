from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .testing.predModel import *
from .testing.faceEncoding import *
import requests
import io, base64
from PIL import Image


# Create your views here.
class MyObjectList(APIView):
    def apiFetch(self,request):
        filepath=dict(request.data)["filepath"]
        print(filepath[0])
        data = classifier_predict(filepath[0])
        aresult=""
        presult=""
        result=""
        print(data)
        if(data['Status']=='Success'):
            if 'AData' in data.keys():
                name = data['AData']['Name']
                gender = data['AData']['Gender']
                birthYear = data['AData']['Birth year']
                uid = data['AData']['Uid'][0]
                aresult = str(name)+'-'+str(gender)+'-'+str(birthYear)+'-'+str(uid)+'-Aadhar'
            if 'PData' in data.keys():
                name = data['PData']['Name']
                birthYear = data['PData']['Birth year']
                pan = data['PData']['Pan']
                presult = str(name)+'-'+str(birthYear)+'-'+str(pan)+'-Pan'
            result=aresult+presult
        return result

    def get(self,request):
        x=self.apiFetch(request)
        data=Documents.objects.create(hash=x)
        print(data.hash)
        return Response({"hash": data.hash})
    def post(self,request):
        # print(request.data.text)
        x=self.apiFetch(request)
        data=Documents.objects.create(hash=x)
        print(data.hash)
        return Response({"hash": data.hash})
    
class ImageList(APIView):
    def imageVerif(self,request):
        # filepath1 = dict(request.data)["filepath1"][0]
        # filepath2 = dict(request.data)["filepath2"][0]
        filepath1=r"C:\MY FILES\Hacki\LOC_Console.io\backend\ml\dataset\innomer\0.png"
        filepath2=r"C:\MY FILES\Hacki\LOC_Console.io\backend\ml\dataset\innomer\0.png"
        # # Assuming base64_str is the string value without 'data:image/jpeg;base64,'
        # img = Image.open(io.BytesIO(base64.decodebytes(bytes(filepath1, "utf-8"))))
        # img.save('filepath1.jpeg')
        # img = Image.open(io.BytesIO(base64.decodebytes(bytes(filepath2, "utf-8"))))
        # img.save('filepath2.jpeg')
        # filepath1="filepath1.jpeg"
        # filepath2="filepath2.jpeg"
        image = compareface(filepath1,filepath2)
        if(image['Status']=='Success'):
            result = image['Message']
        print(result)
        return ('not' in result)
    
    def get(self,request):
        x=self.imageVerif(request)
        data=Documents.objects.create(hash=x)
        print(data.hash)
        return Response({"hash": data.hash})
    def post(self,request):
        x=self.imageVerif(request)
        data=Documents.objects.create(hash=x)
        print(data.hash)
        return Response({"hash": data.hash})
