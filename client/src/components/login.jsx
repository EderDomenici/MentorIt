import { Container, Input, Row, Card, Button, css } from "@nextui-org/react"

export function Login(){



    return(

      <Container fluid style={{marginTop:"15rem"}}>
             <Row justify="center" align="center">
          <Card style={{width:"40rem",height:"30rem"}}>
            <Card.Header css={{justifyContent:"center"}}>
              <h1 style={{letterSpacing:"0.2rem"}}>LOGIN</h1>
            </Card.Header>
              <Card.Body css={{alignItems:"center",gap:"1.5rem"}}>
                <div style={{width:"60%"}}>
                  <Input
                  rounded
                  bordered
                  label="Email"
                  placeholder="Email"
                  color="primary"
                  width="100%"/>
                </div>
                <div style={{width:"60%"}}>
                  <Input.Password
                  rounded
                  bordered
                  label="Password"
                  placeholder="Password"
                  color="primary"
                  width="100%" />
                </div>
                <div>
                  <div>
                    <a href="">
                      <span>Esqueci minha senha</span>
                      </a>
                  </div>
                </div>

                <div>
                  <Button>Log In</Button>
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
          </Card>
      </Row>
            </Container>

  
    )

}