package project.backend.dto.Category;



import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CategoryResponseDTO {

    private Long id;
    private String name;
    private Long departmentId;
    private String departmentName;
}