//regular type declaration

let Name: string
let age: number
let isStudent: boolean

Name = 'Aki'
age = 22
isStudent = true

//inference

let profession = 'Programmer' //same as typing profession: string. will still give an error if i change it to a name. 
//it has to be at the moment of declaration

let anything: any // can be any type. would be the same as let anything

//union type

let id: string | number //string or number
id = 34
id = 'Hello'

//arrays

let aData: [] //array typing 
let aData2: number[] //array WITH numbers. can restrict arrays to a single type in typescript.
let aPeople: Array <string>//generic type, requires the specification

aData2 = [1, 5, 3, 6]
aPeople = ['Dazai', 'Chuuya']

let aThreeValues: [number, number, number]

aThreeValues = [0, 9, 5]

//objects

let oData : {
    name: string
}                   //forces the object to stay fixed. not really used.better use ES6 objects. 
oData = {
    name: 'Aki',
    //age: 22
}

//oData = 'Aki'