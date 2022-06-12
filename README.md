
# Questionnaire - MasterCard Home Assignment

* A questionnaire using React, .NET and Microsoft SQL Server
* Files:
    * MasterCard Home Assignment Server - backend
    * MasterCardFrontEnd - client

## How Start
* Open the sln in MasterCard Home Assignment Server folder
* Change to connetion string that is below (I used local sql Server) - Web.config
![Connection string](https://drive.google.com/uc?export=view&id=15Uf_6afvDKtGMkypBDGZcVqaeLR_RBhj)
* Run the server
* In the sql Microsoft SQL Server Management Studio run the attached sql script 
* Change the url according to the local host of the server - it will be inside Url.js
![Url](https://drive.google.com/uc?export=view&id=1fsG0vOHcqVwp8aei--NIR5C_FeEmGoBw)
* Go to MasterCardFrontEnd file => questionnaire file inside it 
  use the terminal and run npm install
* use npm start
* Enjoy!
## Diagrams

![App Diagrams](https://drive.google.com/uc?export=view&id=1ijLa03CIYrmkuTkb1-VE6dxZ_sijDA2S)

## Screenshot

![Home Screenshot](https://drive.google.com/uc?export=view&id=1YYrqznvsLj16yHNMDxMYHFFqpMGQMjn1)
![Questionnaire Screenshot](https://drive.google.com/uc?export=view&id=1Yzqri-ZAl-0zU23fNo2QCOLjjUoWdrwg)
![score Screenshot](https://drive.google.com/uc?export=view&id=1Cf3916yf7ESj5bzmY79yDEJCNk_in7aV)
## Known Bugs

* In multi Answers Questions the comment will uplift only when checkbox is changed.
* In multi Answers Questions when need to penalize by 50%, the answer score would round down ((int)answer.Score/2)