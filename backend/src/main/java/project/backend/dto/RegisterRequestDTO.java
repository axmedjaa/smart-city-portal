package project.backend.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequestDTO {
    @NotBlank(message = "Full name cannot be empty")
    @Size(min = 3, max = 100, message = "Full name must be between 3 and 100 characters")
    @Pattern(regexp = "^[A-Za-z ]+$", message = "Only letters and spaces are allowed")
    private String fullName;
    @NotBlank(message = "Email cannot be empty")
    @Email(message = "Email must be valid")
    private String email;
    @NotBlank(message = "Password cannot be empty")
    @Size(min = 8, message = "Password must be at least 8 characters long")
    private String password;
}
