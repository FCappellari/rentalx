import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISPecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO) : void;
    findByName(name: string): Specification;
    list(): Specification[];
}

export { ISPecificationsRepository, ICreateSpecificationDTO };