package com.example.practicanro0506.service;
import com.example.practicanro0506.dto.GarantiaDto;
import com.example.practicanro0506.entity.Garantia;
import com.example.practicanro0506.repository.GarantiaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;import java.util.stream.Collectors;
@Service @Transactional
public class GarantiaService {
    private final GarantiaRepository repository;
    public GarantiaService(GarantiaRepository repository) { this.repository = repository; }
    public List<GarantiaDto> findAll() { return repository.findAll().stream().map(this::toDto).collect(Collectors.toList()); }
    public GarantiaDto findById(Long id) { return toDto(repository.findById(id).orElseThrow(() -> new RuntimeException("Garantia not found"))); }
    public GarantiaDto create(GarantiaDto dto) { Garantia entity = toEntity(dto); entity.setId(null); return toDto(repository.save(entity)); }
    public GarantiaDto update(Long id, GarantiaDto dto) { Garantia entity = toEntity(dto); entity.setId(id); return toDto(repository.save(entity)); }
    public void delete(Long id) { repository.deleteById(id); }
    private Garantia toEntity(GarantiaDto dto) { Garantia entity = new Garantia(); entity.setVentaId(dto.getVentaId());
    entity.setProductoId(dto.getProductoId());
    entity.setFechaInicio(dto.getFechaInicio());
    entity.setFechaFin(dto.getFechaFin());
    entity.setEstado(dto.getEstado());
    entity.setDescripcion(dto.getDescripcion()); return entity; }
    private GarantiaDto toDto(Garantia entity) { GarantiaDto dto = new GarantiaDto(); dto.setId(entity.getId());
    dto.setVentaId(entity.getVentaId());
    dto.setProductoId(entity.getProductoId());
    dto.setFechaInicio(entity.getFechaInicio());
    dto.setFechaFin(entity.getFechaFin());
    dto.setEstado(entity.getEstado());
    dto.setDescripcion(entity.getDescripcion()); return dto; }
}
