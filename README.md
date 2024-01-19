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

## Local Development

### Frontend (React with Vite)

1. Navigate to the `frontend` and install npm using this commands in order.

   cd frontend
   npm install
   npm run dev


### Backend(Django)

2. Navigate to the `backend` directory and make migrations using this commands.

   cd backend
   python manage.py makemigrations
   python manage.py migrate
   python manage.py runserver


## For future development:
1. oauth part of app to pass images to image hosting services
2. client page with client registration and login, so every image will be anchored to certain client id
3. only client_id will be able to edit info about image this client_id uploaded

### This project is created to show some CRUD operations and not prepared for deployment