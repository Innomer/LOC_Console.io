import matplotlib.pyplot as plt
from keras import layers
from keras import models
from keras.applications import VGG16
from keras.preprocessing.image import ImageDataGenerator
import tensorflow as tf
from tensorflow.keras.utils import array_to_img, img_to_array, load_img
from keras.callbacks import ModelCheckpoint
from keras import optimizers
import cv2
import numpy as np
from .extract import aadhar_ocr
from .pan import pan_ocr

def classifier_predict(filepath):
    classes=['Aadhar','Pan']
    width = 150
    height = 150
    dim = (width, height)
    pred = cv2.imread(filepath)
    resized = cv2.resize(pred, dim, interpolation=cv2.INTER_AREA)
    my_array = np.expand_dims(resized, axis=0)
    image_size = 150
    vgg_conv = VGG16(weights='imagenet', include_top=False,
                    input_shape=(image_size, image_size, 3))
   
    for layer in vgg_conv.layers[:-4]:
        layer.trainable = False

    
    for layer in vgg_conv.layers:
        print(layer, layer.trainable)


    
    model = models.Sequential()

    model.add(vgg_conv)
    model.add(layers.Flatten())
    model.add(layers.Dense(1024, activation='relu'))
    model.add(layers.Dropout(0.5))
    model.add(layers.Dense(2, activation='softmax'))

    model.summary()

    model.load_weights(r'C:\MY FILES\Hacki\LOC_Console.io\ml\documents\testing\checkpoint').expect_partial()
    print(resized.shape)
    predictions = model.predict(my_array)
    print(classes[np.argmax(predictions)])
    print(predictions)
    if(classes[np.argmax(predictions)]=='Aadhar'):
        return(aadhar_ocr(filepath))
    elif(classes[np.argmax(predictions)]=='Pan'):
        return(pan_ocr(filepath))
    else:
        return ({'Message': 'Document Not Found','Status': 'Fail'})