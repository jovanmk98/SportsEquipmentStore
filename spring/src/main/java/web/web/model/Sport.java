package web.web.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Sport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(length = 4000)
    private String description;

    public Sport() {
    }

    public Sport(String name, String description) {
        this.name = name;
        this.description = description;
    }


}
