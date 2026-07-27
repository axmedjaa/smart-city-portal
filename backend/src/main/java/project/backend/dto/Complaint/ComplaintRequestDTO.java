package project.backend.dto.Complaint;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import project.backend.enums.Priority;

@Getter
@Setter
public class ComplaintRequestDTO {
    @NotBlank(message = "Title is required")
    @Size(min = 3, max = 100, message = "Title must be between 3 and 100 characters")
    private String title;
    @NotBlank(message = "Description is required")
    @Size(min = 10, max = 100, message = "Description must be between 10 and 100 characters")
    private String description;
    @NotBlank(message = "Location is required")
    @Size(min = 3, max = 100, message = "Location must be between 3 and 100 characters")
    private String location;
    @NotNull(message = "Category is required")
    private Long categoryId;
    private Priority priority;
}
