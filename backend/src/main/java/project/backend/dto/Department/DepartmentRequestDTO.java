package project.backend.dto.Department;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DepartmentRequestDTO {
    @NotBlank(message = "Department name is required")
    @Size(min = 3, max = 100, message = "Department name must be between 3 and 100 characters")
    @Pattern(regexp = "^[A-Za-z ]+$", message = "Only letters and spaces are allowed")
    private String name;
}