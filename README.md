# Basal-Analytics

Frontend:
Tech stack: React, Redux, React Bootstarp, React router dom.
Installation: npm install.
How to run application: npm start.

Backend:
Tech stack: nodejs, express, mongoDB.
Installation: npm install.
How to run application: npm start.

Unit tests:

Frontend:

1. If you don't have an account, create a new account(click on signup button).
2. For login enter the Email and password.
3. Once successfully logged in, you will see feedbacks dashboard, dasboard includes list of feedbacks with post feedback.
4. If you click on post feedback it will take you to add feedback page where you can post your feedback.
5. In each feedback card you are able to see who gave feedback and what was the feedback along with that there are three buttons, where you can view, edit, delete your own feedbacks.
6. If admit is logged in he can access all the feedbacks given by users along with that he can view,edit and delete anyones feedbacks and he don't have access to post the feedback.
7. In the left most corner of the header there is a logout button from which user can logout.
8. http://3000 by this url you can access the frontend

Backend:

1. http://localhost:8000/ by this url you can access the backend.
2. End points to check apis
   a. Signup functionality: auth/signup.
   b. Login functionality: auth/login.
   c. Add feedback: feedback/add.
   d. Get feedback: feedback/get.
   e. Update feedback: feedback/update/:id.
   f. Delete feedback: feedback/delete/:id.
