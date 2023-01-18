import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Card } from '@mui/material';

const WordCard: React.FC = () => {
  interface Word {
    word: string;
    definition: string;
  }
  const [word, setWord] = useState<Word>({ word: '', definition: '' });

  useEffect(() => {
    axios
      .get('https://random-word-api.herokuapp.com/word?number=1')
      .then((res) => {
        axios
          .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${res.data[0]}`)
          .then((res) => {
            setWord({
              word: res.data[0].word,
              definition: res.data[0].meanings[0].definitions[0].definition,
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  const capitalized = word.word.charAt(0).toUpperCase() + word.word.slice(1);
  console.log(capitalized);
  return (
    <Card
      variant='outlined'
      sx={{
        p: 2,
        width: 'auto',
        borderRadius: 10,
        m: 2,
        backgroundColor: '#E6F5FF',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        sx={{ alignSelf: 'center', px: { xs: 0, sm: 2 } }}
      >
        <Typography
          variant='body1'
          color='text.primary'
          fontWeight={600}
          fontSize={24}
          textAlign='center'
          p={2}
          sx={{
            mt: { xs: 1.5, sm: 0 },
          }}
        >
          {capitalized}
        </Typography>
        <Typography
          component='div'
          variant='caption'
          color='text.secondary'
          fontWeight={500}
          fontSize={18}
          textAlign='center'
          p={2}
        >
          {word.definition}
        </Typography>
      </Box>
    </Card>
  );
};

export default WordCard;
