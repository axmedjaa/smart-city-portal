package project.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import project.backend.entity.Department;
import project.backend.enums.Role;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserRequestDTO {
    @NotBlank(message = "Full name is required")
    @Size(min = 3, max = 100, message = "Full name must be between 3 and 100 characters")
    @Pattern(regexp = "^[A-Za-z ]+$", message = "Only letters and spaces are allowed")
    private String fullName;
    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;
    @Size(min = 8, message = "Password must be at least 8 characters long")
    private String password;
    private Role role;
    private Long departmentId;
}
