
# Algomox Test

Created a UI in html/bootstrap to accept user data from a form and
display it in a table.




## Getting Started

1. First I Created a UI in html/css to accept user data from a form.
<br>
<img src="images/01.png" width="500">
<br>
<br>
2. Then it validate The user data(Name and MailId)
<br>
<br>
2.1 Name is a required value and must be provided by user.
<br>
<img src="images/4.png" width="500">
<br>
2.2 Email should contain only email type values.
<br>
<img src="images/5.png" width="500">
<br>
<img src="images/6.png" width="500">
<br>

3. Form Filling and Submit Button
<img src="images/02.png" width="500">
<br>
<br>

4.After Posting this data to Server using a Post API here Im using Firebase and react js. This API should accept user data and append it to a file (contactform.json).
<br>
4.1 Firebase Interface(created project with name of Algomox test)
<br>
<img src="images/7.png" width="600">
<br>
4.2 Creating a Realtime Database with read and write operation
<br>
<img src="images/8.png" width="600">
<br>
4.3 it will Genatarte unique key for each submission
<br>
<img src="images/9.png" width="250">
<br>

4.4 And the Data will Store like this in Json
<br>
<img src="images/10.png" width="250">
<br>
4.5 We can also export this data in json file
<br>
<img src="images/11.png" width="600">
<br>
5. Created a beautified UI for the user using React and added delete row functionality
<img src="images/13.png" width="800">
<br>
5.1 created a react app and deployed using Netlify
<br>
<img src="images/19.png" width="500">
<br>
6. Table column Sl No.(auto-generated).
<img src="images/17.png" width="200">
<br>
7. Adding a row in the json file manually and it will auto-updated in UI within a sec without pressing the load button.
<br>
7.1 First Name is Tarun S
<br>
<img src="images/14.png" width="650">
<br>
7.2 Removed S from json manually
<br>
<img src="images/15.png" width="300">
<br>
7.3 manually removed char "S" is Updated on UI(S is removed)
<br>
<img src="images/16.png" width="650">
<br>


## Demo
<br>
Project Link
<br>
Post UI: https://taruntechhub.github.io/Algomox.github.io/post/
<br>
Get UI:  https://stalwart-sable-5ce972.netlify.app/
<br>
source-code : https://github.com/TarunTechHub/Algomox.github.io

## Acknowledgements

 - [DevDocs API Documentation](https://devdocs.io/)
 - [React](https://reactjs.org/docs/create-a-new-react-app.html)
 - [React Bootstrap](https://react-bootstrap.github.io/)






