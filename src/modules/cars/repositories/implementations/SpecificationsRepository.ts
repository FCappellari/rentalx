import { Specification } from "../../model/Specification";
import { ISPecificationsRepository, ICreateSpecificationDTO } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISPecificationsRepository {

    private specifications: Specification[];

    private static INSTANCE: SpecificationsRepository;

    constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository {
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }

        return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        });

        this.specifications.push(specification);
    }

    findByName(name: string) {
        const specification = this.specifications.find(specification => specification.name === name);
        return specification;
    }

    list(): Specification[] {
        return this.specifications;
    }

}

export { SpecificationsRepository };