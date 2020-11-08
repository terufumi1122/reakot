package com.example.reakot.controller

import com.example.reakot.entity.Parent
import com.example.reakot.service.ParentsService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/users")
class ParentsController(val service: ParentsService) {

    @GetMapping
    fun findAll() = service.findAll()

    @PostMapping
    fun addParent(@RequestBody parent: Parent) = service.save(parent)

    @PutMapping("/{id}")
    fun updateParent(@PathVariable id: Long, @RequestBody parent: Parent) {
        assert(parent.id == id)
        service.save(parent)
    }

    @DeleteMapping("/{id}")
    fun deleteParent(@PathVariable id: Long) = service.delete(id)

    @GetMapping("/{id}")
    fun getById(@PathVariable id: Long) = service.findById(id)
}