package web.web.model.dto;

import lombok.Data;

@Data
public class ProductDto {

    private String name;

    private Double price;


    private Long sport;

    private Long manufacturer;

    private String image;

    public ProductDto() {
    }

    public ProductDto(String name, Double price, Long sport, Long manufacturer, String image) {
        this.name = name;
        this.price = price;
        this.sport = sport;
        this.manufacturer = manufacturer;
        this.image = image;
    }
}
