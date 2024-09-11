# PaytmClone
--A clone of India's leading upi payment app
--Steps to run this project 
--You first have to have a mongo db cluster setup either on your local machine or the cluster could be running anywhere else and put the connection string in backend/routes/config.js file that will allow you to estabilish a connection to mongo db.
--If you don't know how to find the connection string it's the first thing that pops up when you open the mongo db gui that is mongo db compass.
--Now you also need to change the jwt secret key to whatever string you like basically to sign and verify your jwt tokens
--Now after all this is done 
--head to the frontend folder using 
--cd frontend 
--after this run npm install
and after this npm run dev
and your frontend should be up and running 
--I used vite to build my project so my frontend runs at port 5173 for you it could be different so be vary of that
--also to run the backend navigate to backend folder cd ../backend (if you are in the frontend directory else cd backend if you are in the home directory)
--after this run nodemon index.js and your backend should be up too.

