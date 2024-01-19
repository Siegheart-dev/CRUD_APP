# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This project is made to show CRUD operations, fething data between Frontend and Backend and also base for my future ImageStock application that will be deployed on AWS

## Technologies Used

- React (with Vite)
- Tailwind CSS
- Django

## Local Development (steps assuming you already installed django and react)

### Frontend (React with Vite)

1. Navigate to the `frontend` and install npm using this commands in order.

   1. cd frontend
   2. npm install
   3. npm run dev


### Backend(Django)

2. Navigate to the `backend` directory and make env / migrations using this commands.

   1. cd backend
   2. -m vevn env
   3. source env/Scripts/activate
   4. python manage.py makemigrations
   5. python manage.py migrate
   6. python manage.py runserver


## For future development:
1. oauth part of app to pass images to image hosting services
2. client page with client registration and login, so every image will be anchored to certain client id
3. only client_id will be able to edit info about image this client_id uploaded

### This project is created to show some CRUD operations and not prepared for deployment