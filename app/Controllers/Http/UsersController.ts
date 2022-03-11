import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'


export default class UsersController {
  public async index({}: HttpContextContract) {

  }

  public async create({}: HttpContextContract) {

  }

  public async store({request, response}: HttpContextContract) {
    try {
      const user = new User()

      user.email = request.input("email")
      user.password = request.input("password")

      user.save()
      const userJSON = user.serialize()
      
      response.status(200).json({
        message: 'Satifactorio. Creaste un User nuevo.',
        data: userJSON
      })

    } catch (error) {
      response.status(400).json({
        message : "ERROR. No has creado User nuevo."
      })
    }
  }

  public async show({}: HttpContextContract) {

  }

  public async edit({}: HttpContextContract) {

  }

  public async update({}: HttpContextContract) {

  }

  public async destroy({}: HttpContextContract) {

  }
}
