package com.example.reakot.repository

import com.example.reakot.entity.Parent
import org.springframework.data.jpa.repository.JpaRepository

interface ParentsRepository : JpaRepository<Parent, Long>
