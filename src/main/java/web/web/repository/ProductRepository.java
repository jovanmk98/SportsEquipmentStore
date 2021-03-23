package web.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import web.web.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    void deleteByName(String name);
}
