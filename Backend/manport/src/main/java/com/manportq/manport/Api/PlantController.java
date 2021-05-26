package com.manportq.manport.Api;

import com.manportq.manport.DTO.PlantDTO;
import com.manportq.manport.Servies.Impl.PlantServiceImpl;
import com.manportq.manport.Servies.PlantService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/plants")
@RequiredArgsConstructor
public class PlantController
{
    private final PlantService plantService;

    @PostMapping()
    public PlantDTO create(@RequestBody PlantDTO plantDTO)
    {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }
            return plantService.save(plantDTO);
    }

    public List<PlantDTO> getAll()
    {
        return plantService.getAll();
    }

    @PutMapping()
    public PlantDTO update(@RequestBody PlantDTO plantDTO)
    {
        try {
        Thread.sleep(1000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }
        return plantService.update(plantDTO);
    }

    @DeleteMapping("/{id}")
    public Boolean deleteById(@PathVariable("id") Long id)
    {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }
        return plantService.deleteById(id);
    }
}
