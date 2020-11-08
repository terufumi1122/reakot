package com.example.reakot.controller

import com.example.reakot.entity.Baby
import com.example.reakot.entity.Parent
import com.example.reakot.service.BabiesService
import com.example.reakot.service.ParentsService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/babies")
class BabiesController(val service: BabiesService) {

    @GetMapping
    fun findAll() = service.findAllWithoutDeleted()

    @PostMapping
    fun addBaby(@RequestBody baby: Baby) = service.save(baby)

    @PutMapping("/{id}")
    fun updateBaby(@PathVariable id: Long, @RequestBody baby: Baby) {
        assert(baby.id == id)
        service.save(baby)
    }

    @DeleteMapping("/{id}")
    fun deleteBaby(@PathVariable id: Long) = service.delete(id)

    @GetMapping("/{id}")
    fun getById(@PathVariable id: Long) = service.findById(id)
}