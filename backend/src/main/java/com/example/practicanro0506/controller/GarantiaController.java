package com.example.practicanro0506.controller;
import com.example.practicanro0506.dto.GarantiaDto;
import com.example.practicanro0506.service.GarantiaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/garantias")
public class GarantiaController {
    private final GarantiaService service;
    public GarantiaController(GarantiaService service) { this.service = service; }
    @GetMapping public List<GarantiaDto> findAll() { return service.findAll(); }
    @GetMapping("/<built-in function id>") public GarantiaDto findById(@PathVariable Long id) { return service.findById(id); }
    @PostMapping public GarantiaDto create(@RequestBody GarantiaDto dto) { return service.create(dto); }
    @PutMapping("/<built-in function id>") public GarantiaDto update(@PathVariable Long id, @RequestBody GarantiaDto dto) { return service.update(id, dto); }
    @DeleteMapping("/<built-in function id>") public ResponseEntity<Void> delete(@PathVariable Long id) { service.delete(id); return ResponseEntity.noContent().build(); }
}
