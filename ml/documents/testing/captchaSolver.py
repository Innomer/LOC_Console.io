from paddleocr import PaddleOCR,draw_ocr
from PIL import Image
import re
ocr = PaddleOCR(use_angle_cls=True, lang='en')

def solveCap(filePath):
    img_path = filePath
    result = ocr.ocr(img_path, cls=True)
    for idx in range(len(result)):
        res = result[idx]
        for line in res:
            i=line[1][0]
            i=re.sub(r"\s+", '', i)
            print(i)
            return i

result = ocr.ocr(captcha,cls=True)
text = ''.join([word[0] for line in result for word in line])
text = text.strip().lower()
print(text)