import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";
import { ListSpecificationsController } from "./ListSpecificationsController";

const categoriesRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(categoriesRepository);
const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase);

export { listSpecificationsController };