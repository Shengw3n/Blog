---
title: "PID-Controlled Rocket Drone"
summary: "Development of a PID-controlled rocket drone capable of self-stabilization, utilizing an MPU-6050 sensor for real-time motion data processed through a Kalman filter and employing Ziegler–Nichols tuning for PID optimization."
date: "Aug 2024"
draft: false
tags:
- Embedded Systems
- C++
- PID Control
demoUrl: https://github.com/user-attachments/assets/4e1dce70-534a-4832-8511-e38f3f89c90d
repoUrl: https://github.com/UBC-Rocket/Thrust-Vectoring?tab=readme-ov-file
---

## **Introduction**

This project represents [UBC Rocket](https://www.ubcrocket.com)'s first year of a three-year roadmap for achieving a self-landing rocket. The current focus is a stationary rocket drone equipped with active stabilization capabilities, leveraging advanced control algorithms and sensor integration to maintain balance. 

The system will progress to an actual rocket capable of stabilization during ascent (Year 2) and later during both ascent and descent (Year 3).

---

## **Project Features**

- **Active Stabilization:** Demonstrates active balance control in a stationary rocket drone, simulating the challenges of maintaining stability in aerospace conditions.  
- **Accurate State Estimation:** Utilizes the MPU-6050 sensor for gyroscope and accelerometer data processed through a Kalman filter to minimize noise and improve accuracy.  
- **PID Control:** Implements PID controllers for real-time adjustment of roll and pitch angles, ensuring precise stability control.  
- **Tuned for Performance:** PID parameters fine-tuned using the Ziegler–Nichols method to achieve optimal system response.  

---

## **Hardware Components**

- **Microcontroller:** Arduino Uno for processing and control.  
- **Sensors:** MPU-6050 for gyroscope and accelerometer data.  
- **Actuators:**
  - Servo motors for pitch and roll adjustments.  
  - JP Hobby 160A ESC for motor control.  

---

## **Software Description**

The rocket drone is programmed in C and features:  
- **Kalman Filter Integration:** Ensures accurate state estimation by processing sensor data to eliminate noise and predict motion.  
- **PID Control:** Two PID controllers manage pitch and roll stabilization independently, reacting to disturbances in real-time.  
- **Motor Control:** Provides precise control of the ESC and servo motors for responsive movement.  
- **Tuning:** PID gains determined through the Ziegler–Nichols method for stable and efficient operation.  

---

## **Achievements**

- **Award:** Secured **Second Place** in the Technology Development Category at [Launch Canada 2024](https://www.launchcanada.org), Canada's premier rocketry competition featuring over 400 students from 25 Canadian universities.

---

## **Future Improvements**

- **Year 2 Goal:** Develop an actual rocket capable of active stabilization during ascent.  
- **Year 3 Goal:** Expand to a self-landing rocket with stabilization during both ascent and descent.  
- **Additional Enhancements:** Incorporate machine learning for adaptive control and optimize the Extended Kalman filter for even better state estimations.  
