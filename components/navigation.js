import Link from "next/link";
import styled from "styled-components";

function Navigation() {
  return (
    <Nav>
      <Span>
        <Link href="/">HOME</Link>
      </Span>
      <Span>
        <Link href="/">ABOUT</Link>
      </Span>
      <Span>
        <Link href="/portfolio">PORTFOLIO</Link>
      </Span>
      <Span>
        <Link href="/">CONTACT</Link>
      </Span>
    </Nav>
  );
}

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  hight: fit-content;
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  margin: 2%;
`

export default Navigation;
