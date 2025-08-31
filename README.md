# Hey, Charles here ❤️

---
I'm so glad I finished this shit 😅
This project was really one filled with, 'why isn't this working 😠' and 'oh that's why 😅'

But well i'm done now
Here are some notes from when I just began the project

---

## This is a quiz site project to test your knowledge on backend
It is a 3-day time limit project.
Starting: ``` 25th August ``` 
 Ended: ``` 31st August ``` ( I was busy 😔 )

The goal is to give my old quiz site a backend
This should include 2 mongodb collections
All user quizzes are stored internally in the user doc
The quiz presets are transferred to a mongodb 'questions' collectiions

The current routes are: 
- auth ( post ): login, register, logout, refresh
- /quiz ( post ) : add quiz
- /quiz ( get ) : generate quiz
- /user/quizzes ( get ) : get user quizzes
- /user/data ( get ) : get user info for sidebar
- user details are decrypted from jwt on frontend

## Things I was able to do
- Added a default image for users, if no image is inputed
- fixed no accessToken in storage
- proper project architecture
- added an auto-refresh api interceptor to auto-refresh on no accessToken
- added an image upload feature
- added proper user validation and fixed all error paths
- included proper error handlers, including ground-level-error on both backend and frontend
- Debugged a lottttt, covered all the empty holes
- I installed a downgraded version of mongoose for compatibility with clever cloub MongoDB URI

``` javascript
The notification system is the browser window.alert(). 
 ```

> I was able to host the db on Clever Cloud
> I didn't want to use space off MongoDB Atlas since it was a simple project
> 
> The website is hosted at [dannysdomain-quiz-site-1-0.onrender.com](https://dannysdomain-quiz-site-1-0.onrender.com/)