import { InMemoryUsersRepository } from "../../modules/users/repositories/in-memory/InMemoryUsersRepository"
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository"
import { AuthenticateUserUseCase } from "../../modules/users/useCases/authenticateUser/AuthenticateUserUseCase"
import { CreateUserUseCase } from "../../modules/users/useCases/createUser/CreateUserUseCase";

let inMemoryUsersRepository: IUsersRepository;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase

describe('authenticateUser', () => {
  beforeAll(async () => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    authenticateUserUseCase = new AuthenticateUserUseCase(inMemoryUsersRepository);
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);

    await createUserUseCase.execute({
      email: 'mpgx5.c@gmail.com',
      password: '123654789',
      name: 'mpgxc'
    })
  })

  it('should return a user', async () => {
    const user = await authenticateUserUseCase.execute({
      email: 'mpgx5.c@gmail.com',
      password: '123654789',
    })

    expect(user).toBeTruthy()
  })
})

