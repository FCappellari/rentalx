import { ISPecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private speficitationsRepository: ISPecificationsRepository) { }

    execute({ name, description }: IRequest): void {
        const speficitationAlreadyExists = this.speficitationsRepository.findByName(name);

        if (speficitationAlreadyExists) {
            throw new Error("Speficitation already exists!");
        }

        this.speficitationsRepository.create({
            name,
            description
        })
    }
}

export { CreateSpecificationUseCase };