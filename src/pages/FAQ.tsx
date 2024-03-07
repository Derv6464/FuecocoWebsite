import React, { useState } from 'react';

const FAQ = () => {
    const [text, setText] = useState<string>('');
    const [submittedText, setSubmittedText] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmittedText(prevSubmittedText => [...prevSubmittedText, text]);
        setText('');
    }

    return (
        <main className='container'>

        <hr />
        <article>
        <h1 style={{textAlign:"center"}}>FAQ</h1>

            <form onSubmit={handleSubmit}>
                <textarea name="q" placeholder="Write your question here" type="text" value={text} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <div>
                <h2>Submitted Questions:</h2>
                <ul>
                    {submittedText.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </article>
        </main>
        
    );
}

export default FAQ;