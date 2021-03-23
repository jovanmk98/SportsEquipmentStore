package web.web.service;

import web.web.model.Product;
import web.web.model.dto.ProductDto;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<Product> findAll();
    Optional<Product> findById(Long id);
    Optional<Product> save(ProductDto productDto);
    void deleteById(Long id);
}
