import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";
import StyledHeader, { Image, Logo, Nav } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.png" />
          <div>
            <Button color="#af3a53">Apply Course</Button>
            <Button bg="#af3a53">Talk to Adviser</Button>
          </div>
        </Nav>
        <Flex>
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              libero quod veniam omnis, ratione sed ipsum laudantium et sapiente
              perferendis nemo, tempora voluptatibus. Molestiae cupiditate
              perferendis consequuntur et sunt aspernatur!
            </p>
            <Button bg="#af3a53">Start Your New Carier</Button>
          </div>
          <Image src="./images/hero.jpg" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
