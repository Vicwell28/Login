import Route from '@ioc:Adonis/Core/Route'

Route.post('login', async ({ auth, request, response }) => {
  const email = request.input('email')
  const password = request.input('password')

  try {
    const token = await auth.use('api').attempt(email, password)
    return token
  } catch {
    return response.badRequest('Invalid credentials')
  }
})

Route.get('dashboard', async ({ auth }) => {
  await auth.use('api').authenticate()
  console.log(auth.use('api').user!)
})

Route.post('/logout', async ({ auth, response }) => {
  await auth.use('api').revoke()
  return {
    revoked: true
  }
})

Route.resource("/User", "UsersController").apiOnly()