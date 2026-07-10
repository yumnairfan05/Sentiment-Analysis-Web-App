# Sentiment Analysis Web App

## Project Overview

This project is a Machine Learning web application that predicts the sentiment of user-entered text as Positive, Negative, or Neutral.

## Technologies Used

- Python
- Google Colab
- Pandas
- NumPy
- Scikit-learn
- NLTK
- FastAPI
- HTML
- CSS
- JavaScript

## Features

- Text preprocessing using NLP
- TF-IDF feature extraction
- Logistic Regression model
- FastAPI backend
- Interactive web interface
- Real-time sentiment prediction

## Project Structure

```
Sentiment-Analysis-Web-App/
│
├── backend/
│   ├── main.py
│   ├── model.pkl
│   ├── vectorizer.pkl
│   ├── requirements.txt
│   └── utils.py
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── dataset/
│   └── sentiment.csv
│
├── training/
│   └── train_model.ipynb
│
├── README.md
└── .gitignore
```

## Installation

Install the required packages:

```bash
pip install -r requirements.txt
```

Run the FastAPI server:

```bash
py -m uvicorn main:app --reload
```

Open the frontend using VS Code Live Server.

## Example

Input:

```
I love this internship.
```

Output:

```
Positive
```