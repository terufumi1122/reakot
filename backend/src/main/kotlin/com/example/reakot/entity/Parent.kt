package com.example.reakot.entity

import java.io.Serializable
import java.util.*
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "parents")
data class Parent(
    @Id
    @Column(name = "id", nullable = false)
    val id: Long,
    @Column(name = "email", nullable = false)
    val email: String,
    @Column(name = "name", nullable = true)
    val name: String,
    @Column(name = "password", nullable = false)
    val password: String,
    @Column(name = "gender", nullable = false)
    val gender: Int,
    @Column(name = "birthday", nullable = true)
    val birthday: Date,
    @Column(name = "insert_datetime", nullable = false)
    val insertDatetime: Date,
    @Column(name = "update_datetime", nullable = false)
    val updateDatetime: Date,
    @Column(name = "update_count", nullable = false)
    val updateCount: Long,
    @Column(name = "delete_flg", nullable = false)
    val deleteFlg: Int
) : Serializable
