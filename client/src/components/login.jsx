import { Container, Input, Row, Card, Button, css } from "@nextui-org/react"
import { useState } from "react"
import { postLogin } from "../hooks/postLogin"
import axios from "axios"

export function Login(){
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  //  const [token, setToken] = useState('')



     function hendleLogin(e){

      e.preventDefault();
      if(!email || !password ){
        alert("Preencha os dados!!")
      }

      // let token = postLogin("login", email,password)

      //  axios.post("http://localhost:3000/mentor/login",{email,password})
      //  .then(response=>{setToken(response.data)})





    }

    return(

      <Container fluid style={{marginTop:"15rem"}}>
             <Row justify="center" align="center">
              <Card style={{width:"40rem",height:"30rem"}}>
                <Card.Header css={{justifyContent:"center"}}>
                  <h1 style={{letterSpacing:"0.2rem"}}>LOGIN</h1>
                </Card.Header>
                <form onSubmit={hendleLogin}>
              <Card.Body css={{alignItems:"center",gap:"1.5rem"}}>
                  <div style={{width:"60%"}}>
                    <Input
                    rounded
                    bordered
                    label="Email"
                    placeholder="Email"
                    color="primary"
                    width="100%"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}/>
                  </div>
                  <div style={{width:"60%"}}>
                    <Input.Password
                    value={password}
                    rounded
                    bordered
                    label="Password"
                    placeholder="Password"
                    color="primary"
                    width="100%"
                    onChange={(e)=> setPassword(e.target.value)}/>
                  </div>
                <div>
                  <div>
                    <a href="">
                      <span>Esqueci minha senha</span>
                      </a>
                  </div>
                </div>

                <div>
                  <Button type="submit">Log In</Button>
                </div>

                <div style={{display:"flex", gap:"0.5rem"}}>
                  <div>
                    <Button auto> Git Hub </Button>
                  </div>
                  <div>
                    <Button auto> Google </Button>
                  </div>
                  <div>
                    <Button auto> LinkedIn </Button>
                  </div>
                </div>

              </Card.Body>
                </form>
             </Card>
            </Row>
      </Container>

  
    )

}