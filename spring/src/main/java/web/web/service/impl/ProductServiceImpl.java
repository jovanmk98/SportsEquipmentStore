package web.web.service.impl;

import org.springframework.stereotype.Service;
import web.web.model.Manufacturer;
import web.web.model.Product;
import web.web.model.Sport;
import web.web.model.dto.ProductDto;
import web.web.repository.ManufacturerRepository;
import web.web.repository.ProductRepository;
import web.web.repository.SportRepository;
import web.web.service.ProductService;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final SportRepository sportRepository;
    private final ManufacturerRepository manufacturerRepository;
    public ProductServiceImpl(ProductRepository productRepository, SportRepository sportRepository, ManufacturerRepository manufacturerRepository) {
        this.productRepository = productRepository;
        this.sportRepository = sportRepository;
        this.manufacturerRepository = manufacturerRepository;
    }

    @Override
    public List<Product> findAll() {
        return this.productRepository.findAll();
    }

    @Override
    public Optional<Product> findById(Long id) {
        return this.productRepository.findById(id);
    }

    @Override
    public Optional<Product> save(ProductDto productDto) {
        Sport sport = this.sportRepository.findById(productDto.getSport())
                .orElseThrow();
        Manufacturer manufacturer = this.manufacturerRepository.findById(productDto.getManufacturer())
                .orElseThrow();

        this.productRepository.deleteByName(productDto.getName());
        return Optional.of(this.productRepository.save(new Product(productDto.getName(), productDto.getPrice(), sport, manufacturer, productDto.getImage())));
    }

    @Override
    public void deleteById(Long id) {
        this.productRepository.deleteById(id);
    }
}
