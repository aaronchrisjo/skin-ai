import os
import cv2
import numpy as np

# Define the path to your dataset directory
dataset_dir = "C:/projekt/skin-disease-datasaet/train_set"

# Initialize empty lists to store images and labels
images = []
labels = []

# List the subdirectories in the dataset directory (each corresponds to a disease class)
disease_folders = [f for f in os.listdir(dataset_dir) if os.path.isdir(os.path.join(dataset_dir, f))]

# Assign a unique numerical label to each disease class
label_mapping = {disease_folder: i for i, disease_folder in enumerate(disease_folders)}

# Create a reverse mapping to convert numerical labels back to disease names
reverse_label_mapping = {i: disease_folder for disease_folder, i in label_mapping.items()}

# Loop through disease folders
for disease_folder in disease_folders:
    # Get the numerical label for this disease class
    label = label_mapping[disease_folder]
    
    # List image files in the current disease folder
    disease_folder_path = os.path.join(dataset_dir, disease_folder)
    for filename in os.listdir(disease_folder_path):
        if filename.endswith(".jpg"):  # Adjust the file format as needed
            # Load the image
            image = cv2.imread(os.path.join(disease_folder_path, filename))
            # Perform preprocessing steps (e.g., resizing and normalization)
            # Append the image and its label to the lists
            images.append(image)
            labels.append(label)

# Convert lists to NumPy arrays
images = np.array(images)
labels = np.array(labels)

with open('images.npy', 'wb') as f:
    np.save(f, images)
np.save('labels.npy', labels)
