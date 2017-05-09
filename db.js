
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfiles: getProfiles
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
