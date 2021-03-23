package web.web.service.impl;

import org.springframework.stereotype.Service;
import web.web.model.Manufacturer;
import web.web.repository.ManufacturerRepository;
import web.web.service.ManufacturerService;

import java.util.List;

@Service
public class ManufacturerServiceimpl implements ManufacturerService {
    private final ManufacturerRepository manufacturerRepository;

    public ManufacturerServiceimpl(ManufacturerRepository manufacturerRepository) {
        this.manufacturerRepository = manufacturerRepository;
    }

    @Override
    public List<Manufacturer> findAll() {
        return this.manufacturerRepository.findAll();
    }
}
