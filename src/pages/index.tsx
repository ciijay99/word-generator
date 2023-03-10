import Head from 'next/head';
import { Box, Button } from '@mui/material';
import WordCard from '@/components/WordCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lexicon App</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '70vh',
        }}
      >
        <WordCard />
        <Button onClick={() => window.location.reload()}>New Word</Button>
      </Box>
    </>
  );
}
