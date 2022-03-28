import React from 'react';
import styled from 'styled-components';

import BaseIcon from './BaseIcon';

const SocketIcon = ({ isActive, size }, props) => {
  const Circle = styled.div`
    background-color: ${p => p.theme.colors.medium};
    border-radius: 50%;
  `;
  const fill = isActive ? '#11B4BF' : 'black';

  return (
    <Circle>
      <BaseIcon size={size} viewBox="0 0 40 40" {...props}>
        <path
          d="M28.3664 16.1539H15.0788L17.5668 13.6658C17.8619 13.3708 17.8619 12.8924 17.5668 12.5973C17.2718 12.3022 16.7933 12.3022 16.4983 12.5973L12.7203 16.3752C12.4253 16.6702 12.4253 17.1487 12.7203 17.4438L16.4983 21.2217C16.6458 21.3692 16.8392 21.443 17.0326 21.443C17.2259 21.443 17.4193 21.3692 17.5668 21.2217C17.8619 20.9267 17.8619 20.4482 17.5668 20.1531L15.0788 17.6651H28.3664C28.7836 17.6651 29.1219 17.3268 29.1219 16.9095C29.1219 16.4922 28.7836 16.1539 28.3664 16.1539V16.1539Z"
          fill={fill}
        />
        <path
          d="M25.1237 20.1533C24.8286 19.8582 24.3502 19.8582 24.0551 20.1533C23.76 20.4483 23.76 20.9267 24.0551 21.2218L26.5432 23.7099H13.2556C12.8383 23.7099 12.5 24.0482 12.5 24.4655C12.5 24.8828 12.8383 25.2211 13.2556 25.2211H26.5432L24.0552 27.7092C23.7601 28.0042 23.7601 28.4827 24.0552 28.7777C24.2026 28.9252 24.396 28.999 24.5894 28.999C24.7828 28.999 24.9762 28.9252 25.1237 28.7777L28.9016 24.9997C29.1967 24.7047 29.1967 24.2263 28.9016 23.9312L25.1237 20.1533Z"
          fill={fill}
        />
      </BaseIcon>
    </Circle>
  );
};

export default SocketIcon;
