import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 65px;
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  img {
    margin-right: 5px;
    width: 20px;
  }
`;

const Language: React.FC = () => {
  return (
    <Wrapper>
      <Image src="/images/poland.png" width={20} height={20} />
      PL
    </Wrapper>
  );
};

export default Language;
