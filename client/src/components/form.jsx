import React, { useState } from 'react'

export default function Form() {
  const [name, setNome]=useState('')
  const [lastName, setLastName]=useState('')
  const [city, setCity]=useState('')
  const [photo, setPhoto]=useState('')
  const [about, setAbout]=useState('')
  const [job, setJob] =useState('')
  const [formation, setFormation]=useState('')
  const [stacks, setStacks]=useState('')
  const [linkedin, setLinkedin] =useState('')
  const [github, setGithub] =useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword] =useState('')
  const [lvl, setLevel] =useState('')
  const [sexo, setSexo] =useState('')
  
  
  return (
    <form>
    
    <input type='text' placeholder='Nome' name='name' onChange={(e)=> setNome(e.target.nome)} value={name} /> 
    <input type='text' placeholder='Sobrenome' name='lastName' onChange={(e)=> setLastName(e.target.lastName)} value={lastName} />
    <input type='email' placeholder='Email' name='email' onChange={(e)=> setEmail(e.target.email)} value={email} />
    <input type='password' placeholder='Senha' name='password' onChange={(e)=> setPassword(e.target.password)} value={password} />
    <input type='text' placeholder='Cidade' name='city' onChange={(e)=> setCity(e.target.city)} value={city} />
    <input type='text' placeholder='Foto' name='photo' onChange={(e)=> setPhoto(e.target.photo)} value={photo} /> 
    <input type='text' placeholder='Trabalho' name='job' onChange={(e)=> setJob(e.target.job)} value={job} />
    <input type='text' placeholder='Formação' name='formation' onChange={(e)=> setFormation(e.target.formation)} value={formation} />
    <input type='text' placeholder='Stacks' name='staks' onChange={(e)=> setStacks(e.target.stacks)} value={stacks} />
    <input type='url' placeholder='Linkedin' name='linkedin' onChange={(e)=> setLinkedin(e.target.linkedin)} value={linkedin} /> 
    <input type='url' placeholder='Github' name='github' onChange={(e)=> setGithub(e.target.github)} value={github} />
  
    <label>Sexo</label>
    <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
              <option value="1">Feminino </option>
              <option value="2">Masculino</option>
              <option value="null">Prefiro não informar</option>
    </select>
    <label> Nivel
    <select value={lvl} onChange={(e) => setLevel(e.target.value)}>
              <option value="1">Júnior</option>
              <option value="2">Pleno</option>
              <option value="3">Sênior</option>
    </select>
    </label>
    <textarea type='text' placeholder='Sobre' name='about' onChange={(e)=> setAbout(e.target.about)} value={about}></textarea>
    <input type="submit" value="Submit"/>
    </form>
  )
}