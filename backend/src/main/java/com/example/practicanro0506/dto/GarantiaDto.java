package com.example.practicanro0506.dto;
import java.time.LocalDate;

public class GarantiaDto {
        private Long id;
    private Long ventaId;
    private Long productoId;
    private LocalDate fechaInicio;
    private LocalDate fechaFin;
    private String estado;
    private String descripcion;

    public Long getId() { return id; }
public void setId(Long id) { this.id = id; }

public Long getVentaId() { return ventaId; }
public void setVentaId(Long ventaId) { this.ventaId = ventaId; }

public Long getProductoId() { return productoId; }
public void setProductoId(Long productoId) { this.productoId = productoId; }

public LocalDate getFechaInicio() { return fechaInicio; }
public void setFechaInicio(LocalDate fechaInicio) { this.fechaInicio = fechaInicio; }

public LocalDate getFechaFin() { return fechaFin; }
public void setFechaFin(LocalDate fechaFin) { this.fechaFin = fechaFin; }

public String getEstado() { return estado; }
public void setEstado(String estado) { this.estado = estado; }

public String getDescripcion() { return descripcion; }
public void setDescripcion(String descripcion) { this.descripcion = descripcion; }
}
