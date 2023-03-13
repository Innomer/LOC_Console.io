# import matplotlib.pyplot as plt
# from keras import layers
# from keras import models
# from keras.applications import VGG16
# from keras.preprocessing.image import ImageDataGenerator
# import tensorflow
# from tensorflow.keras.utils import array_to_img, img_to_array, load_img
# from keras.callbacks import ModelCheckpoint
# from keras import optimizers

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

# train_batchsize = 4
# val_batchsize = 4
# train_dir = 'train'
# validation_dir = 'validation'

# train_datagen = ImageDataGenerator(
#     rescale=1./255,
#     rotation_range=20,
#     width_shift_range=0.2,
#     height_shift_range=0.2,
#     horizontal_flip=True,
#     fill_mode='nearest',
#     brightness_range=[0.15, 1],
#     zoom_range=[0.5, 1.5],
#     shear_range=30)

# validation_datagen = ImageDataGenerator(rescale=1./255, brightness_range=[0.15, 1],
#                                         zoom_range=[0.5, 1.5],
#                                         shear_range=30)

# # Change the batchsize according to system RAM
# train_generator = train_datagen.flow_from_directory(
#     train_dir,
#     target_size=(image_size, image_size),
#     batch_size=train_batchsize,
#     class_mode='categorical',
#     shuffle=True)

# validation_generator = validation_datagen.flow_from_directory(
#     validation_dir,
#     target_size=(image_size, image_size),
#     batch_size=val_batchsize,
#     class_mode='categorical',
#     shuffle=True)

# model.compile(optimizer=tensorflow.keras.optimizers.Adam(
#     learning_rate=0.0001), loss='categorical_crossentropy', metrics=['accuracy'])

# checkpoint_filepath = './checkpoint'
# model_checkpoint_callback = tensorflow.keras.callbacks.ModelCheckpoint(
#     filepath=checkpoint_filepath,
#     save_weights_only=True,
#     monitor='val_accuracy',
#     mode='max',
#     save_best_only=True)

# # Train the model
# history = model.fit(
#     train_generator,
#     steps_per_epoch=train_generator.samples/train_generator.batch_size,
#     epochs=1,
#     validation_data=validation_generator,
#     validation_steps=validation_generator.samples/validation_generator.batch_size,
#     verbose=1,
#     callbacks=[model_checkpoint_callback]
# )

import matplotlib.pyplot as plt
from keras import layers
from keras import models
from keras.applications import VGG16
from keras.preprocessing.image import ImageDataGenerator
import tensorflow
from tensorflow.keras.utils import array_to_img, img_to_array, load_img
from keras.callbacks import ModelCheckpoint
from keras import optimizers


def classification_train():
# Load the VGG model
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
    # model.add(layers.Conv2D(filters=32, kernel_size=(3, 3),
    #           activation='relu', input_shape=(image_size, image_size, 3)))
    # Add new layers
    model.add(layers.Flatten())
    model.add(layers.Dense(1024, activation='relu'))
    # model.add(layers.MaxPool2D(pool_size=(2, 2), strides=2)),
    # model.add(layers.Conv2D(filters=64, kernel_size=(3, 3), activation='relu', padding='same')),
    # model.add(layers.MaxPool2D(pool_size=(2, 2), strides=2)),
    model.add(layers.Dropout(0.5))
    # model.add(layers.Flatten())
    model.add(layers.Dense(2, activation='softmax'))

    # Show a summary of the model. Check the number of trainable parameters
    model.summary()

    train_batchsize = 2
    val_batchsize = 2
    train_dir = 'train'
    validation_dir = 'validation'

    train_datagen = ImageDataGenerator(
        rescale=1./255,
        rotation_range=20,
        width_shift_range=0.2,
        height_shift_range=0.2,
        horizontal_flip=True,
        fill_mode='nearest',
        brightness_range=[0.25,1],
        zoom_range=[0.5,1],
        shear_range=30)

    validation_datagen = ImageDataGenerator(rescale=1./255)

    # Change the batchsize according to system RAM
    train_generator = train_datagen.flow_from_directory(
        train_dir,
        target_size=(image_size, image_size),
        batch_size=train_batchsize,
        class_mode='categorical',
        shuffle=True)

    validation_generator = validation_datagen.flow_from_directory(
        validation_dir,
        target_size=(image_size, image_size),
        batch_size=val_batchsize,
        class_mode='categorical',
        shuffle=True)

    model.compile(optimizer=tensorflow.keras.optimizers.Adam(learning_rate=0.0001), loss='categorical_crossentropy', metrics=['accuracy'])
    # Compile the model
    # model.compile(optimizer=optimizers.RMSprop(learning_rate=1e-4), loss='categorical_crossentropy',
            #       metrics=['accuracy'])

    # filepath = "weights-improvement-{epoch:02d}-{/content/drive/MyDrive/val_acc:.2f}.hdf5"
    # checkpoint = ModelCheckpoint(
    #     filepath, monitor='/content/drive/MyDrive/val_acc', verbose=1, save_best_only=True, mode='max')
    # callbacks_list = [checkpoint]

    import numpy as np
    train_steps = np.int64(int(round(train_generator.samples/train_generator.batch_size)))
    val_steps = np.int64(int(round(validation_generator.samples/validation_generator.batch_size)))
    model.compile(optimizer=tensorflow.keras.optimizers.Adam(
        learning_rate=0.0001), loss='categorical_crossentropy', metrics=['accuracy'])

    checkpoint_filepath = './checkpoint'
    model_checkpoint_callback = tensorflow.keras.callbacks.ModelCheckpoint(
        filepath=checkpoint_filepath,
        save_weights_only=True,
        monitor='val_accuracy',
        mode='max',
        save_best_only=True)

    # Train the model
    history = model.fit(
        train_generator,
        steps_per_epoch=train_generator.samples/train_generator.batch_size,
        epochs=10,
        validation_data=validation_generator,
        validation_steps=validation_generator.samples/validation_generator.batch_size,
        verbose=1,
        callbacks=[model_checkpoint_callback]
    )
classification_train()