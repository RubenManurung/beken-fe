import React from "react";
import Link from "next/link";
import A_ButtonBookmark from "../../atom/A_ButtonBookmark";
import { Container } from "./style";

const Index = () => {
  return (
    <Container>
      <Link href="/bookmark">
        <a>
          <A_ButtonBookmark>See Bookmark</A_ButtonBookmark>
        </a>
      </Link>
    </Container>
  );
};

export default Index;
