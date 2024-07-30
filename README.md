# React Journal

## Overview

Journal app created with React, Redux and Typescript using [Firebase](https://firebase.google.com/) as database and [Cloudinary](https://cloudinary.com/) as server to store the images.

The app allows multiple users to register and log in (even using your Google account). Each user can create multiple notes as a diary and also add images to each note.

## Tech stack

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Init

### 1. Install dependencies

* This project uses [pnpm](https://pnpm.io/installation) as a dependency manager.
* To install all dependencies run the following command:

```bash
pnpm install
```

### 2. Create .env files

* Create the ".env" file with the following Firebase and Cloudinary variables:

```txt
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGE_IN_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_CLOUDINARY_CLOUD_URL
```

* To run the tests it is necessary to create the ".env.test" file and add the following Firebase and Cloudinary variables:

```txt
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGE_IN_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_CLOUDINARY_CLOUD_URL
VITE_CLOUDINARY_CLOUD_NAME
VITE_CLOUDINARY_API_KEY
VITE_CLOUDINARY_API_SECRET
```

### 3. Launch the development server

```bash
pnpm run dev
```

## Commands

| Command          | Action                                        |
| :--------------- | :-------------------------------------------- |
| `dev`            | Run the local development server.  |
| `build`          | Check for possible errors and build production packaging in `./dist/`.      |
| `tests`          | Launch tests. |
