## React Native Expo Application with Google OAuth 2.0 authentication ( no firebase)

Created a small application with following features:

- 2 Screens: Home, Auth
- Home screen has a button to route to Auth screen when user is not signed in
- Auth screen has an option to authenticate using Google Oauth2 (without firebase)
- Once the Google auth is successfull:
- - A auth token is recieved as part of response
  - Token is stored in AsynStorage and a session is created
  - User is rerouted to home screen
- Home screen displays the profile of user with user's image, name & email address.
- A logout button is present in Home Screen which clears the session and resets the home screen.

Video demo - https://www.loom.com/share/b18145993f2b482fb5bb6331ddb95738?sid=87c11735-b3e7-4210-8159-827b27f44eaa

## Screenshots

- Home

![image](https://github.com/WadadParker/google-login-app/assets/117439709/0d9a7e94-781f-4f4c-a828-a24a7b96b711)

- Auth Screen
  
![image](https://github.com/WadadParker/google-login-app/assets/117439709/20040c11-8079-4e81-9496-9ac6fbce6b31)


- Google sign in page

![image](https://github.com/WadadParker/google-login-app/assets/117439709/4513cf01-1809-4201-95ee-ff822b7bd394)

- Home page ( After successful authorization)

![image](https://github.com/WadadParker/google-login-app/assets/117439709/6d49144b-e4d4-4a77-bc72-d8782781b3f4)
