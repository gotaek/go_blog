import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const TagsBlock = styled.div`
  margin-top: 0.5rem;
  .tag {
    cursor: pointer;
    display: inline-block;
    color: ${palette.teal[7]};
    margin-right: 0.5rem;
    text-decoration: none;
    &:hover {
      color: ${palette.teal[6]};
    }
  }
`;

const Tags = ({ tags }) => {
  return (
    <TagsBlock>
      {tags.map((tag) => (
        <Link className="tag" to={`/tag?=${tag}`}>
          #{tag}
        </Link>
      ))}
    </TagsBlock>
  );
};

export default Tags;
