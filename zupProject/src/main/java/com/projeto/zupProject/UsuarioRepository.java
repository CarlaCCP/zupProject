package com.projeto.zupProject;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<UsuarioModel , Long>{

	
	public Optional<UsuarioModel> findByEmail(String Email);
}
