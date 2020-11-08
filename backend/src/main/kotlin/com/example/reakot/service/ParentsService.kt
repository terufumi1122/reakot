package com.example.reakot.service

import com.example.reakot.entity.Parent
import com.example.reakot.repository.ParentsRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime

@Service
@Transactional
class ParentsService {
    @Autowired
    lateinit var repository: ParentsRepository

    // Create, Update
    fun save(parent: Parent) = repository.save(parent)

    // Read
    fun findAll(): MutableIterable<Parent> = repository.findAll()
    fun findAllWithoutDeleted(): List<Parent> = repository.findAll().filter { it.deleteFlg == 0 } //論理削除対応
    fun findById(id: Long): Parent = repository.getOne(id)
    fun findAllByOrderByInsertDatetimeDesc(): Iterable<Parent> = repository.findAllByOrderByInsertDatetimeDesc()

    // Delete
    fun delete(id: Long) {
        val target: Parent = repository.getOne(id).apply {
            deleteFlg = 1
            updateDatetime = LocalDateTime.now()
        }
        repository.save(target)
    }
}