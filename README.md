## SNAPAY - Facial Recognition-Based Verification for Secure Transactions
AMEX Makeathon 2023 theme:  Facial Recognition for transactions

### Team members:-
Team Name- ***FaceVengers***
1. Surabhi Mishra
2. Pranjal Arora
3. Abha Himani
4. Tijil Malhotra

## Problem Statement
Passwords and PINs, once considered secure, are now vulnerable to hacking and phishing attacks, which can result in financial losses and identity theft. The task is to develop a comprehensive and robust system that ensures the security of transactions using facial recognition, providing a cross-platform, more secure, user-friendly, and convenient authentication method while ensuring the protection of personal information against fraud and spoofing. 
The facial recognition system should be able to recognize faces in different lighting conditions, angles, and orientations such as using photographs or masks while protecting user privacy. 

## Our solution
- Incorporation of ***facial recognition technology*** to enhance reliability, safety and make the application user-friendly. 
- Inclusion of an ***extra layer of authentication*** by utilizing ***Aadhar API*** to verify the user’s credentials and cross-check the Aadhar photograph with live-image. 
- Integration of an ***expense tracking feature*** to easily monitor the user’s spending habits. So users can view their transaction history, and manage their finances. 
- Our deployed website: https://snapay-team-facevengers.netlify.app/ 
  
### Instructions:-
- Registeration using Sign Up, then Login.
- Update profile picture for dataset collection. 
- Choose transaction type from 'MoneyBag' and 'Bank'. MoneyBag is like a wallet service.
- Verify your face. Upon success, initiate the payment

### Features:-
- Advanced Face Detection and Verification
- Dynamic Profile Picture Matching
- Seamless Bank Transfers and Money Bag System
- Double Authentication using Aadhar API
- Expense Tracking System
- Option to pay Government bills

### Tech-Stack
- Computer Vision Models: face-api.js (age-gender model, face-landmark detection, MTCNN model, SSD MobileNet model)
- Frontend: HTML, CSS, Vanilla JS, Bootstrap
- Backend: Node.js, ExpressJS
- Database: Firebase

### Machine Learning and Computer Vision
- ***Image segmentation*** : Using MTCNN and it's internal image standardization techniques. Find the correct region of interest (ROI) in the image. 
- ***Face Detection*** : Using MTCNN (Multi-Task Cascaded Convolutional Neural Network) and SSD MobileNetV1 Model. Creates a rectangular boundary around the face in the image.
- ***Face Recognition*** : Using 68 point face-landmark detection Model. Demarcates 68 different points on the face to describe the face characteristics. Finds Euclidean distance between these points.

### Our Implementation
<img src="Screenshots/1.jpeg"> 
<img src="Screenshots/2.jpeg"> 
<img src="Screenshots/3.jpeg"> 
<img src="Screenshots/4.jpeg"> 
<img src="Screenshots/5.jpeg"> 
<img src="Screenshots/6.jpeg"> 
<img src="Screenshots/7.jpeg"> 
