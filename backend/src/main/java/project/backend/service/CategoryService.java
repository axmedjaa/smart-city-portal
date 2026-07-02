package project.backend.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import project.backend.dto.Category.CategoryRequestDTO;
import project.backend.dto.Category.CategoryResponseDTO;
import project.backend.entity.Category;
import project.backend.entity.Department;
import project.backend.repository.CategoryRepository;
import project.backend.repository.DepartmentRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final DepartmentRepository departmentRepository;

    public CategoryResponseDTO create(CategoryRequestDTO dto) {

        if (categoryRepository.existsByName(dto.getName())) {
            throw new RuntimeException("Category already exists");
        }

        Department department = departmentRepository.findById(dto.getDepartmentId())
                .orElseThrow(() -> new RuntimeException("Department not found"));

        Category category = new Category();
        category.setName(dto.getName());
        category.setDepartment(department);

        Category saved = categoryRepository.save(category);

        return mapToResponse(saved);
    }

    public List<CategoryResponseDTO> getAll() {
        return categoryRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    private CategoryResponseDTO mapToResponse(Category category) {

        return new CategoryResponseDTO(
                category.getId(),
                category.getName(),
                category.getDepartment().getId(),
                category.getDepartment().getName()
        );
    }
}