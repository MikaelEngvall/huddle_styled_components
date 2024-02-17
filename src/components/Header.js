import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/headhunter.png' alt='' />
          <Button>Login</Button>
        </Nav>

        <Flex>
          <div>
            <h1>HEADHUNTER the intelligent job ad creator</h1>

            <p>
              HEADHUNTER helps you create perfect job listings for your target in minutes. It’s simple and doesn’t require any technical skills.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Register now
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}
