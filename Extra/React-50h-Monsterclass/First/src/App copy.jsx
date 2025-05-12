const UsersInfo = () => {
  const users = [
    {id:1, name: 'Rodolfo', email: 'caraca@gmail.com'},
    {id:2, name: 'Gargamel', email: 'caraasra23423ca@gmail.com'},
    {id:3, name: 'Luan Bacana', email: 'carasf1234ca@gmail.com'},
    {id:4, name: 'Pica Grossa123', email: 'caracasa@gmail.com'}
  ]
  
  return (
    <div>{users.map(({id,name,email}) =>  (
      <ul>
        <li>{id}</li>
        <li>{name}</li>
        <li>{email}</li>
      </ul>
))}
      
    </div>
  )
}

export default UsersInfo;