# import matplotlib.pyplot as plt
# from keras import layers
# from keras import models
# from keras.applications import VGG16
# from keras.preprocessing.image import ImageDataGenerator
# import tensorflow
# from tensorflow.keras.utils import array_to_img, img_to_array, load_img
# from keras.callbacks import ModelCheckpoint
# from keras import optimizers
# import cv2
# import numpy as np

# # Load the VGG model
# image_size = 150
# vgg_conv = VGG16(weights='imagenet', include_top=False,
#                  input_shape=(image_size, image_size, 3))
# # Freeze the layers except the last 4 layers
# for layer in vgg_conv.layers[:-4]:
#     layer.trainable = False

# # Check the trainable status of the individual layers
# for layer in vgg_conv.layers:
#     print(layer, layer.trainable)


# # Create the model
# model = models.Sequential()

# # Add the vgg convolutional base model
# model.add(vgg_conv)
# # model.add(layers.Conv2D(filters=32, kernel_size=(3, 3),
# #           activation='relu', input_shape=(image_size, image_size, 3)))
# # Add new layers
# model.add(layers.Flatten())
# model.add(layers.Dense(1024, activation='relu'))
# # model.add(layers.MaxPool2D(pool_size=(2, 2), strides=2)),
# # model.add(layers.Conv2D(filters=64, kernel_size=(3, 3), activation='relu', padding='same')),
# # model.add(layers.MaxPool2D(pool_size=(2, 2), strides=2)),
# model.add(layers.Dropout(0.5))
# # model.add(layers.Flatten())
# model.add(layers.Dense(2, activation='softmax'))

# # Show a summary of the model. Check the number of trainable parameters
# model.summary()

# model.load_weights('./checkpoint').expect_partial()

# pred=cv2.imread('Aadhar Card.jpg')
# # cv2.imshow(pred)
# # cv2.waitKey(0)
# pred=cv2.resize(pred,(image_size,image_size))
# # pred=np.asarray(pred)
# # pred=np.reshape(pred,[1,pred.shape[0],pred.shape[1],3])
# # print(pred.shape)

# predictions=model.predict_on_batch(pred)
# print(predictions)
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
from extract import aadhar_ocr
# from pan import pan_ocr

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
    # Freeze the layers except the last 4 layers
    for layer in vgg_conv.layers[:-4]:
        layer.trainable = False

    # Check the trainable status of the individual layers
    for layer in vgg_conv.layers:
        print(layer, layer.trainable)


    # Create the model
    model = models.Sequential()

    # Add the vgg convolutional base model
    model.add(vgg_conv)
    model.add(layers.Flatten())
    model.add(layers.Dense(1024, activation='relu'))
    model.add(layers.Dropout(0.5))
    model.add(layers.Dense(2, activation='softmax'))

    # Show a summary of the model. Check the number of trainable parameters
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
classifier_predict(r"C:\MY FILES\Hacki\LOC_Console.io\ml\documents\testing\validation\aadhar\kreena.jpg")