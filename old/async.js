// setTimeout(function() {
//     alert('Hello timeout');
// }, 3000)

// let counter = 0

// let interval = setInterval(function() {
//     console.log(counter++)
// }, 3000)

// clearInterval(interval)







/* server */

console.log('Client: I want get list of users')
console.log('...')

// setTimeout(function() {
//     console.log('Server: ask list of users from db')
//     console.log('...')

//     setTimeout(function() {
//         console.log('DB: filter list of users')
//         console.log('...')

//         setTimeout(function() {
//             console.log('Sever: transform format db and send data to client')
//             console.log('...')

//             setTimeout(function() {
//                 console.log('Client: get data and render template')
//             }, 1000)
//         }, 500)
//     }, 500)
// }, 1000)

/* promise */
let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Server: ask list of users from db')
        console.log('...')
        resolve()
    }, 1000)
})

promise.then(function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var users = [
                {uid: 'id1', name: 'John'},
                {uid: 'id2', name: 'Ann'}
            ]
            console.log('DB: filter list of users')
            console.log('...')
            resolve(users)
        }, 500)
    })
})
.then(function(dbUsers) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Sever: transform format db and send data to client')
            console.log('...')
            var users = dbUsers.map(function(item) {
                return {
                    id: item.uid,
                    firstName: item.name,
                    timestamp: Date.now()
                }
            })
            resolve(users)
        }, 500)
    })
})
.then(function(users) {
    setTimeout(function() {
        console.log('Client: get data and render template', users)
    }, 1000)
})
.catch(function(error) {
    console.log(error)
})
.finally(function() {
    console.log('Finally')
})