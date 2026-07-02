package project.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import project.backend.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    boolean existsByName(String name);
}
