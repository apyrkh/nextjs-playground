import { TextField } from '@rmwc/textfield';
import { ChangeEvent, useState } from 'react';


const IndexPage = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  return (
    <div>
      <h1>Next.js with rmwc</h1>
      <br/>

      <TextField
        label="Text"
        value={text1} onChange={(e: ChangeEvent<HTMLInputElement>) => setText1(e.target.value)}
      />
      <br/>
      <br/>

      <TextField outlined
        label="Outlined text"
        value={text2} onChange={(e: ChangeEvent<HTMLInputElement>) => setText2(e.target.value)}
      />
      <br/>
    </div>
  );
};

export default IndexPage;
