
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfiles: getProfiles,
  getAllProfiles: getAllProfiles,
  addProfile: addProfile,
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
}

function getProfiles (id, connection) {
  return connection('profiles').select()
  .where('id', id)
}

function getAllProfiles (connection) {
  return connection('profiles').select()
}

function addProfile (newData,connection) {
  return connection('profiles')
    .insert({
      user_id: newData.user_id,
      pic: newData.pic,
      url: newData.url
    })
    .then((connection('users')))
      .insert({
        id: newData.user_id,
        email: newData.email,
        name: newData.name
      })
}


// function addProf(newData,connection){
//   return connection('profiles')
//     .insert({
//       user_id: newData.user_id,
//       pic: newData.pic,
//       url: newData.url
//     })
//   }
//
// function addDetails(newData,connection){
//   return connection('users')
//     .insert({
//       id: newData.user_id,
//       email: newData.email,
//       name: newData.name
//     })
// }
