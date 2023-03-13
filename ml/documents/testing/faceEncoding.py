import face_recognition

def compareface(filepath1,filepath2):
    # Load images and encode faces
    # image1 = face_recognition.load_image_file(r"C:\MY FILES\Hacki\LOC_Console.io\backend\ml\dataset\innomer\4.png")
    image1 = face_recognition.load_image_file(filepath1)
    face_encoding1 = face_recognition.face_encodings(image1)[0]

    # image2 = face_recognition.load_image_file(r"C:\MY FILES\Hacki\LOC_Console.io\backend\ml\dataset\chaitya\15.png")
    image2 = face_recognition.load_image_file(filepath2)
    face_encoding2 = face_recognition.face_encodings(image2)[0]

    # Compare faces
    results = face_recognition.compare_faces([face_encoding1], face_encoding2)

    if results[0]:
        return ({'Message': 'The two images are of the same person', 'Status': 'Success'})
    else:
        return ({'Message': 'The two images are of different people', 'Status': 'Fail'})
