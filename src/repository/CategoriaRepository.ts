import { EntityRepository, Repository } from "typeorm";
import { Categoria } from "../entity/Categoria";

@EntityRepository(Categoria)
class CategoriaRepository extends Repository<Categoria> {

}

export { CategoriaRepository }