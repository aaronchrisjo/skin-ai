import cv2
import numpy as np
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

# Load images and labels
with open('images.npy', 'rb') as f:
    images = np.load(f, allow_pickle=True)
labels = np.load('labels.npy')

# 1. Data Resizing
def resize_image(image, target_size=(224, 224)):
    return cv2.resize(image, target_size)

# 4. Data Augmentation (Optional)
from tensorflow.keras.preprocessing.image import ImageDataGenerator

datagen = ImageDataGenerator(
    rotation_range=40,
    width_shift_range=0.2,
    height_shift_range=0.2,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    fill_mode='nearest'
)

# 5. Normalization
def normalize_image(image):
    image = image / 255.0  # Assuming your pixel values are in the [0, 255] range
    return image

# Visualize preprocessed images with labels
for i in range(5):
    preprocessed_image = normalize_image(resize_image(images[i]))
    label = labels[i]

    # Display the image with its label
    plt.imshow(preprocessed_image)
    plt.title(f'Label: {label}')
    plt.show()
