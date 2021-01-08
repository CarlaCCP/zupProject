package com.projeto.zupProject;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cadastro")
@CrossOrigin(origins = "*" , allowedHeaders = "*")
public class UsuarioController {

	@Autowired
	private UsuarioRepository repository;
	
	
	@GetMapping
	public ResponseEntity<List<UsuarioModel>> buscarTodos(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	
//	@GetMapping("/{id}")
//	public ResponseEntity<UsuarioModel> GetById(@PathVariable long id) {
//		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
//	}

	
	@PostMapping("/cadastrando")
	public ResponseEntity<UsuarioModel>Post(@RequestBody UsuarioModel usuarioModel){
		return ResponseEntity.ok(repository.save(usuarioModel));		
	}
	
	//@PutMapping
	//public ResponseEntity<UsuarioModel> Put(@RequestBody UsuarioModel usuario) {
		//return ResponseEntity.ok(repository.save(usuario));
	//}
	
}
