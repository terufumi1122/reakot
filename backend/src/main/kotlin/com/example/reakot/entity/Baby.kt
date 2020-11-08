package com.example.reakot.entity

import java.io.Serializable
import java.time.LocalDateTime
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "babies")
data class Baby(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    val id: Long,
    @Column(name = "parent_id", nullable = false)
    val parent_id: Long,
    @Column(name = "email", nullable = false)
    val name: String,
    @Column(name = "gender", nullable = false)
    val gender: Int,
    @Column(name = "birthday", nullable = true)
    val birthday: Date,
    @Column(name = "insert_datetime", nullable = false)
    val insertDatetime: LocalDateTime = LocalDateTime.now(),
    @Column(name = "update_datetime", nullable = false)
    var updateDatetime: LocalDateTime = LocalDateTime.now(),
    @Column(name = "update_count", nullable = false)
    val updateCount: Long = 0,
    @Column(name = "delete_flg", nullable = false)
    var deleteFlg: Int = 0
) : Serializable
