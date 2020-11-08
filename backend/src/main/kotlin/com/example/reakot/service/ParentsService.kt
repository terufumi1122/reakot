package com.example.reakot.service

import com.example.reakot.entity.Parent
import com.example.reakot.repository.ParentsRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.util.*

@Service
@Transactional
class ParentsService {
    @Autowired
    lateinit var repository: ParentsRepository

    // Create, Update
    fun save(parent: Parent) = repository.save(parent)

    // Read
    fun findAll(): MutableIterable<Parent> = repository.findAll()
    fun findById(id: Long): Optional<Parent> = repository.findById(id)
    fun findAllByOrderByInsertDatetimeDesc(): Iterable<Parent> = repository.findAllByOrderByInsertDatetimeDesc()

    // Delete
    fun delete(id: Long) = repository.deleteById(id)
}