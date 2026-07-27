package project.backend.dto.Category;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryRequestDTO {
    @NotBlank(message = "Category name is required")
    @Size(min = 3, max = 100, message = "Category name must be between 3 and 100 characters")
    @Pattern(regexp = "^[A-Za-z ]+$", message = "Only letters and spaces are allowed")
    private String name;
    @NotNull(message = "Department is required")
    private Long departmentId;
}