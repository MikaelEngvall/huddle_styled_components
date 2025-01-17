import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        HEADHUNTER

        <Flex>
          <ul>
            <li>
              Do not hesitate to contact us. We are always ready to help.
            </li>
            <li>+1-543-123-4567</li>
            <li>example@headhunter.ai</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2024 Headhunter. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}
