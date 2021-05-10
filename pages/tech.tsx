import { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { Wrapper, Heading, CopyRight } from '../components/Tech/Tech.styles';
import TechStack from '../components/Tech/TechStack/TechStack';
import { TechListTypes } from '../types/techlist';

interface TechStackProps {
  techStacks: TechListTypes[];
}

export const getStaticProps = async () => {
  const query = `
         {
          allTechstacks {
            id,
            branch,
            techList,
        	}
        }
      `;

  let techStacks: TechListTypes[] = [];

  try {
    const responseData = await axios.post(
      `${process.env.CMS_URL}`,
      {
        query,
      },
      {
        headers: {
          authorization: `Bearer ${process.env.CMS_TOKEN}`,
        },
      }
    );
    techStacks = responseData.data.data.allTechstacks;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      techStacks,
    },
    revalidate: 600,
  };
};

const TechPage: NextPage<TechStackProps> = ({ techStacks }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Technology, that I'm using on a daily basis."
        />
        <title>Tech Stack</title>
      </Head>
      <Wrapper>
        <Heading>Technologies I use on a daily basis</Heading>
        <TechStack techStack={techStacks} />
        <CopyRight>Copyright © 2021 Miłosz Piskadło</CopyRight>
      </Wrapper>
    </>
  );
};

export default TechPage;
