import { Specification } from "../../model/Specification";
import { ISPecificationsRepository } from "../../repositories/ISpecificationsRepository";


class ListSpecificationsUseCase {
    constructor(private specificationsRepository: ISPecificationsRepository) {}
    
    execute(): Specification[] {
        const specifications = this.specificationsRepository.list();

        return specifications;
    }
}

export { ListSpecificationsUseCase }