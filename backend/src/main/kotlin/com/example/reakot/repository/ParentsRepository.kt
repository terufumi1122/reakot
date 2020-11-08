package com.example.reakot.repository

import com.example.reakot.entity.Parent
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional

@Repository
@Transactional
interface ParentsRepository : CrudRepository<Parent, Long> {
    fun findAllByOrderByInsertDatetimeDesc(): Iterable<Parent>
}
