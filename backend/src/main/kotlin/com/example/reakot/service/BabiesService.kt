package com.example.reakot.service

import com.example.reakot.entity.Baby
import com.example.reakot.entity.Parent
import com.example.reakot.repository.BabiesRepository
import com.example.reakot.repository.ParentsRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime

@Service
@Transactional
class BabiesService {
    @Autowired
    lateinit var repository: BabiesRepository

    // Create, Update
    fun save(baby: Baby) = repository.save(baby)

    // Read
    fun findAll(): MutableIterable<Baby> = repository.findAll()
    fun findAllWithoutDeleted(): List<Baby> = repository.findAll().filter { it.deleteFlg == 0 } //論理削除対応
    fun findById(id: Long): Baby = repository.getOne(id)

    // Delete
    fun delete(id: Long) {
        val target: Baby = repository.getOne(id).apply {
            deleteFlg = 1
            updateDatetime = LocalDateTime.now()
        }
        repository.save(target)
    }
}