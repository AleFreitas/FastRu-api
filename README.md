# FastRu-api
It is commonplace for Federal universities at Brasil to have a big restaurant with cheaper prices made for it's students 

However, thanks to bureaucracy and some other problems in most universities the system used for the students account is usually only
available at the restaurant. This means every student has to buy their ticket or put their money on their account presencially, causing great queues when students want to buy their tickets or even greater ones when they are entering the eating areas.

*This is an Api for a ficticional university restaurant transaction system that i made to train some skills in typescript that aims to solve this problem by creating a online system for the students to buy their tickets at home, reducing the queues to buy tickets or deposit money presencially*

# database modeling

![image](https://user-images.githubusercontent.com/83618808/230745447-42975c51-2bbb-4566-8235-ceb97a11c237.png)

# Routes

#### POST: /main_dish
Body: { "name" : "main dish name" }
#### POST: /salad
{ "name" : "salad name" }
#### POST: /accompaniment
{ "name" : "accompaniment name" }
#### POST: /dessert
{ "name" : "dessert name"}
#### POST: /dish
{\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"main_dish" : "valid main dish name",\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"salad1" : "valid salad name",\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"salad2" : "valid salad name",\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"accompaniment" : "valid accompaniment name",\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"dessert" : "valid dessert name",\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"date" : "valid date name"\
}
#### DELETE: /dish?date=DD_MM_YYYY
#### DELETE: /main_dish?name=Feijoada
#### DELETE: /accompaniment?name=Farofa
#### DELETE: /dessert?name=Banana
#### DELETE: /salad?name=Alface\

#### PUT: /dish/main_dish
{\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":"main dish name",\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"chosenDate":"DD/MM/YYYY"\
}
#### PUT: /dish/salad
{\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"chosenDate" : "DD/MM/YYYY,\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name" : "salad name",\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"saladOption" : salad option number (1 or 2)\
}
#### PUT: /dish/accompaniment
{\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":"accompaniment name",\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"chosenDate":"DD/MM/YYYY"\
}
#### PUT: /dish/dessert
{\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":"dessert name",\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"chosenDate":"DD/MM/YYYY"\
}\

#### GET: /dish?chosenDate=DD_MM_YYYY
#### GET: /dish/worker?id=5
