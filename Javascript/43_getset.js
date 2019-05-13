// Examples of pseudoproperties get and set

let person = {
    name: 'Pepe',
    birth : new Date(1965, 8, 31),
    get age () {
        return parseInt(((new Date() - this.birth )/(1000*60*60*24*365)))
    },
    friends: [],
    set newFriend(friend) {
      this.friends.push(friend);
    }   
}

person.newFriend = 'Antonio'
console.log(person)
console.log(person.age)