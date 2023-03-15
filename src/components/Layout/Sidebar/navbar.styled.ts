import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Link from "next/link";

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  color: unset;
  width: 100%;
`;

const SidebarInnerStyled = styled(Box)`
  position: static;
`;

export { StyledLink, SidebarInnerStyled };
